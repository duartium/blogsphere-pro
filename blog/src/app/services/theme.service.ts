import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private linkTag: HTMLLinkElement;

  constructor() {
    this.linkTag = document.createElement('link');
    this.linkTag.rel = 'stylesheet';
    document.head.appendChild(this.linkTag);
  }

  loadTheme(themeName: string): void {
    this.linkTag.href = `/assets/themes/${themeName}.css`;
  }

}
