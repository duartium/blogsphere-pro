import { Component } from '@angular/core';
import { environment } from '../../../environment/.environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = environment.blogTitle;
  description: string = environment.description;
}
