import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-home *ngIf="isLoaded"></app-home>
  <app-start-screen (onIntroChange)="handleIntroUpdate($event)"></app-start-screen>
  `
})

export class AppComponent {
  isLoaded: boolean = false;

  handleIntroUpdate() {
    this.isLoaded = true;
  }
}
