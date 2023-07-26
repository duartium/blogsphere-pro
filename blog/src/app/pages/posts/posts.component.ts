import { Component } from '@angular/core';
import { PostCard } from 'src/app/core/models/PostCard.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: PostCard[] = [
    { id: 1, title: 'Noteworthy technology acquisitions 2021', categories: ['angular', 'typescript', 'frontend'], urlImage: 'https://flowbite.com/docs/images/blog/image-1.jpg' },
  ];

  constructor() {

  }
}
