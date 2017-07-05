import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-home *ngIf="introLoaded"></app-home>
  <!-- Comment out to temp bypass startScreen -->
  <app-start-screen (onIntroChange)="handleIntroChange($event)"></app-start-screen>
  `
})

export class AppComponent {
/* OOOOBS REMEMEBER: introLoaded: boolean = false;*/
  introLoaded: boolean = false;

  handleIntroChange() {
    this.introLoaded = true;
  }
}
