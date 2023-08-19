import { Component } from '@angular/core';
import { PostCard } from 'src/app/core/models/PostCard.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: PostCard[] = [
    { id: 1, codePost: 'mas-alla-del-codigo-el-desafio-sin-fin-del-desarrollador-moderno', title: 'Más Allá del Código: El Desafío Sin Fin del Desarrollador Moderno', categories: ['angular', 'typescript', 'frontend'], urlImage: '../../../../../assets/images/posts/1annie-spratt-sggw4-qDD54-unsplash.jpg' },
    { id: 2, codePost: 'patron-singleton', title: 'Patrón Singleton', categories: ['angular', 'typescript', 'frontend'], urlImage: '../../../../../assets/images/posts/1annie-spratt-sggw4-qDD54-unsplash.jpg' },
  ];

  constructor() {

  }
}
