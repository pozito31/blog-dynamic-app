import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';
import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showSearch: boolean;
  public categories: Category[];

  constructor(
    public config: ConfigService,
    public categoryService: CategoryService,
    private route: Router
  ) {
    this.showSearch = false;
    this.categories = []
  }

  ngOnInit() {
    // Recojo las categorias
    this.categoryService.getCategories().subscribe(list => this.categories = list);
  }

  /**
   * Abre o cierra el bloque para buscar posts
   * @param $event Evento de propagacion
   */
  openInputSearch($event) {
    // Paro la propagacion de eventos
    $event.stopPropagation();
    this.showSearch = !this.showSearch;
  }

  /**
   * Esconde el bloque de busqueda
   */
  hideInputSearch(){
    this.showSearch = false;
  }

  /**
   * Busca los posts que coincidan con la cadena dada
   * @param searchValue cadena a buscar
   */
  searchPosts(searchValue: string) {
    this.route.navigate(['/search', searchValue]);
  }

  /**
   * Muestra los posts de una categoria
   * @param category categoria dada
   */
  showPosts(category) {
    this.route.navigate(['/content', category.id])
  }

}
