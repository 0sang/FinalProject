package lee.hawoob.finalproject.dto;

import lee.hawoob.finalproject.entity.Board;
import lee.hawoob.finalproject.entity.Comment;
import lee.hawoob.finalproject.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Transactional
public class CommentDto {

    private Long id;

    private String comment;

    private User user;

    private Board board;

//    private LocalDateTime createDate;

    public CommentDto(Comment comment){
        this.id = comment.getId();
        this.comment = comment.getComment();
        this.user = comment.getUser();
        this.board = comment.getBoard();
//        this.createDate = comment.getCreateDate();
    }

}
