import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostComponent } from './pages/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PostsRecomendationComponent } from './components/posts-recomendation/posts-recomendation.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RouterModule } from '@angular/router';
import { CodeDisplayComponent } from './components/code-display/code-display.component';
import { LimitTextPipe } from './core/pipes/limit-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    PostsComponent,
    PostCardComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    PostsRecomendationComponent,
    NewsletterComponent,
    CodeDisplayComponent,
    LimitTextPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { scrollPositionRestoration: 'top'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
