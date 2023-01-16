
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private afd: AngularFireDatabase
  ) {

  }

  /**
   * Obtiene todas las categorias
   */
  public getCategories(): Observable<Category[]> {
    return this.afd.list<Category>('categories').valueChanges();
  }


}
