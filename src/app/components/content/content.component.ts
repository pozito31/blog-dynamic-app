import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public posts: IPost[];
  public showPosts: boolean;
  public page: number;

  constructor(
    private postService: PostService,
    public config: ConfigService,
    private route: ActivatedRoute
  ) {
    this.posts = [];
    this.showPosts = false;
  }

  ngOnInit() {

    const self = this;
    // Reinicia la pagina de busqueda
    this.page = 1;
    // Obtengo los parametros de la U_RL
    this.route.params.subscribe(params => {

      // Si existe un parametro categoria
      if (params['category']) {
        // Obtengo el parametro categoria
        let category = params['category'];
        // Obtengo todos los posts de una categoria
        this.postService.getPostsByCategory(category).subscribe(posts => {
          self.posts = posts;
          self.showPosts = true;
        }, error => {
          console.error("Error al cargar los posts via categoria: " + error);
          self.showPosts = true;
        })
      // Si existe un valor (busqueda de posts)
      } else if (params['value']) {
        // Obtengo el valor de busqueda
        let value = params['value'];
        // Obtengo todos los posts donde su titulo coincida con el valor dado
        this.postService.getPostsByName(value).subscribe(posts => {
          self.posts = posts;
          self.showPosts = true;
        }, error => {
          console.error("Error al cargar los posts via busqueda: " + error);
          self.showPosts = true;
        })

        // En cualquier otro caso, obtengo todos los posts
      } else {

        this.postService.getPosts().subscribe(list => {
          self.posts = list;
          self.showPosts = true;
        }, error => {
          console.error("Error al cargar los posts: " + error);
          self.showPosts = true;
        })
      }

    });


  }

}
