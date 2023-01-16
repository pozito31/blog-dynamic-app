import { Comment } from './../models/comment';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private afd: AngularFireDatabase
  ) { }

  /**
   * Obtiene todos los comentarios
   */
  getComments(): Observable<Comment[]> {
    return this.afd.list<Comment>('/comments').valueChanges();
  }

  /**
   * Añade un comentario
   * @param comment Comentario a añadir
   */
  addComment(comment: Comment) {
    this.afd.list('/comments').push(comment.getData());
  }

  /**
   * 
   * @param idPost 
   */
  getCommentsByIdPost(idPost: string): Observable<Comment[]> {
    return this.afd.list<Comment>('/comments', ref =>
      ref.orderByChild('post').equalTo(idPost)
    ).valueChanges();
  }

}
