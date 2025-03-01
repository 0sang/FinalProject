package lee.hawoob.finalproject.entity;

import lombok.*;
import javax.persistence.*;

@Builder
@Entity
@Table(name="COMMENT")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Comment{
// extends BaseTimeEntity
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COMMENT_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NICKNAME", referencedColumnName = "NICKNAME")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "POST_INDEX", referencedColumnName = "POST_INDEX")
    private Board board;

    @Column(name = "REPLY", nullable = false)
    private String comment;

//    @Column(name = "CREATE_DATE")
//    @CreatedDate
//    private String createdDate;
//
//    @Column(name = "MODIFIED_DATE")
//    @LastModifiedDate
//    private String modifiedDate;

}
