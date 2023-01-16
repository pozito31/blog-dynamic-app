import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../../interfaces/ipost';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {

  @Input() post: IPost;

  constructor() { }

  ngOnInit() {
  }

}
