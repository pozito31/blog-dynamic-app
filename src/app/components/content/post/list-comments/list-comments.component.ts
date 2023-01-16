import { ConfigService } from 'src/app/services/config.service';
import { Comment } from './../../../../models/comment';
import { CommentService } from './../../../../services/comment.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  @Input() idPost: string;
  public showComments: boolean;
  public listComments: Comment[];
  public page: number;

  constructor(
    private commentsService: CommentService,
    public config: ConfigService
  ) {
    this.listComments = [];
    this.showComments = false;
    this.page = 1;
  }

  ngOnInit() {

    // Obtiene los comentarios de un post
    this.commentsService.getCommentsByIdPost(this.idPost).subscribe(comments => {
      // Si hay comentarios, lo asigno
      if (comments && comments.length > 0) {
        this.listComments = comments;
      }
      console.log(this.listComments);

      this.showComments = true;
    }, error => {
      console.error("error al cargar los comentarios: " + error);
      this.showComments = true;
    })

  }

}
