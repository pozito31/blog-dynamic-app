import { CommentService } from './../../../../services/comment.service';
import { Comment } from './../../../../models/comment';
import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-leave-comment',
  templateUrl: './leave-comment.component.html',
  styleUrls: ['./leave-comment.component.css']
})
export class LeaveCommentComponent implements OnInit {

  @Input() idPost: string;
  public comment: Comment;

  constructor(
    private commentService: CommentService
  ) {
    this.comment = new Comment({});
  }

  ngOnInit() {
  }

  addComment() {

    // Obtengo la fecha
    this.comment.date = moment().toISOString();
    // Añado el id del post
    this.comment.post = this.idPost;

    // Añado el comentario
    this.commentService.addComment(this.comment);

    // Reseteo el comentario
    this.comment = new Comment({})

  }

}
