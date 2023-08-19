import { Component, Input } from '@angular/core';
import { PostCard } from 'src/app/core/models/PostCard.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post: PostCard = {id: 0, codePost: '', title:'', categories: []};
  
  constructor() {

  }


} 
