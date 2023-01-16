
import { IPost } from './../interfaces/ipost';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { map } from 'rxjs/operators';
import { forEach, find } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private afd: AngularFireDatabase
  ) { }

  /**
   *  Devuelve todos los posts
   */
  getPosts(): Observable<IPost[]> {
    return this.afd.list<IPost>('posts').valueChanges();
  }

  /**
   * Devuelve el post de un id en concreto
   * @param id id del post
   */
  getPostById(id: string): Observable<Post> {
    return this.afd.object<Post>('posts/' + id).valueChanges();
  }

  /**
   * Devuelve los posts de una categoria en concreto
   * @param idCategory 
   */
  getPostsByCategory(idCategory: string): Observable<IPost[]> {
    return this.getPosts().pipe(
      map(posts => {
        // Creo el array a devolver
        const postsFiltered = [];
        // Recorro los posts
        forEach(posts, p => {
          // Busco si pertence a esa categoria
          const categoryFound = find(p.categories, c => c === idCategory);
          if (categoryFound) {
            // Lo añado
            postsFiltered.push(new Post(p))
          }
        });

        return postsFiltered;
      })
    )
  }

  /**
   * Devuelve todos los posts donde su nombre coincida con el texto dado
   * @param value valor a buscar
   */
  getPostsByName(value: string): Observable<IPost[]> {
    return this.getPosts().pipe(
      map(posts => {
         // Creo el array a devolver
        const postsFiltered = [];
        // Recorro los posts
        forEach(posts, p => {
          // Compruebo si el titulo del post coincide con lo que me dieron
          if (p.title.toLowerCase().includes(value.toLowerCase())) {
            // Lo añado
            postsFiltered.push(new Post(p))
          }
        });

        return postsFiltered;
      })
    )
  }

}
