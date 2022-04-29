package lee.hawoob.finalproject.service;

import lee.hawoob.finalproject.auth.PrincipalDetails;
import lee.hawoob.finalproject.dto.BoardDto;
import lee.hawoob.finalproject.entity.Board;
import lee.hawoob.finalproject.dto.SearchBoardDto;
import lee.hawoob.finalproject.entity.User;
import lee.hawoob.finalproject.form.CreatePostForm;
import lee.hawoob.finalproject.form.UpdateBoardForm;
import lee.hawoob.finalproject.repository.BoardRepository;
import lee.hawoob.finalproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class BoardService {

    private final BoardRepository repository;
    private final UserRepository userRepository;


//    public List<SearchBoardDto> findAll(){
//        List<SearchBoardDto> dto = repository.findAll().stream().map(b -> new SearchBoardDto(b)).collect(Collectors.toList());
//        return dto;
//    }

    public Page<SearchBoardDto> getBoardList(Pageable pageable){
        int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1);
        pageable = PageRequest.of(page, 10, Sort.by(Sort.Direction.DESC, "boardIndex")); // <- Sort 추가
        Page<SearchBoardDto> dto = repository.findAll(pageable).map(b -> new SearchBoardDto(b));

        return dto;
    }


//    public Page<Board> getBoardList1(Pageable pageable) {
//        int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1);
//        pageable = PageRequest.of(page, 10, Sort.by(Sort.Direction.DESC, "boardIndex")); // <- Sort 추가
//
//        return repository.findAll(pageable);
//    }


    @Transactional
    public int updateView(Long boardIndex) {
        return repository.updateView(boardIndex);
    }

    public Page<SearchBoardDto> searchBoard(String keyword, Pageable pageable) {
        int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1);
        pageable = PageRequest.of(page, 10, Sort.by(Sort.Direction.DESC, "boardIndex")); // <- Sort 추가
        Page<SearchBoardDto> dto = repository.findByBoardTitleAndPostContentContaining(keyword, pageable).map(b -> new SearchBoardDto(b));


        return dto;
    }


    public BoardDto getBoardDto(Board board) {
        BoardDto dto = new BoardDto();

        dto.setBoardIndex(board.getBoardIndex());
        dto.setTitle(board.getTitle());
        dto.setContent(board.getContent());
        dto.setUser(board.getUser());

        return dto;
    }

    
    
    public Optional<Board> findByIndex(Long boardIndex){
        return repository.findById(boardIndex);
    }

    public void createBoard(CreatePostForm form, @AuthenticationPrincipal PrincipalDetails custom) {
        Board board = new Board();
        User user = userRepository.findById(custom.getUser().getUser_id()).get();

        board.setTitle(form.getTitle());
        board.setContent(form.getContent());
        board.setUser(user);

        repository.save(board);
    }

    public void deleteBoard(Long boardIndex) {
        repository.deleteById(boardIndex);

    }


    public void updateBoard(UpdateBoardForm form, PrincipalDetails principal){
        Optional<Board> opBoard = repository.findById(form.getBoardIndex());
        User user = new User();
        user.setUser_id(principal.getUser().getUser_id());

        Board board = opBoard.get();

        board.setBoardIndex(form.getBoardIndex());
        board.setTitle(form.getTitle());
        board.setContent(form.getContent());
        board.setUser(user);

        repository.save(board);
    }

}



