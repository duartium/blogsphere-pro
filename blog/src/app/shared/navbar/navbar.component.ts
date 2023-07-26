import { Component } from '@angular/core';
import { environment } from '../../../environment/.environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  blogtitle: string = environment.blogTitle;

  constructor(private router: Router) { }

  goToHome(){
    this.router.navigate(['/']);
  }
}
