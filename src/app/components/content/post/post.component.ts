import { PostService } from './../../../services/post.service';
import { Post } from '../../../models/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post: Post;
  public showPost: boolean;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.showPost = false;
  }

  ngOnInit() {

    const self = this;
    // Obtiene los parametros de la URL
    this.route.params.subscribe(params => {
      // Obtiene el id del post
      let id = params['id'];
      this.postService.getPostById(id).subscribe(post => {
        if(post){
          self.post = new Post(post);
          console.log(self.post);
          self.showPost = true;
        }
      })
    })

  }

}
