import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('menuSlideAnimation', [
      state('start', style({
        width: '0'
      })),
      state('finish', style({
        width: '38vw'
      })),
      transition('start => finish', animate('300ms linear')),
      transition('finish => start', animate('200ms 200ms linear')),
    ]),
    trigger('menuItemsAni', [
      state('start', style({
        transform: 'translateX(60px)',
        opacity: 0
      })),
      state('finish', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('start => finish', animate('200ms 300ms')),
      transition('finish => start', animate('100ms 100ms ease-out')),
    ]),
  ]
})

export class MenuComponent {
  @Output() watchClick = new EventEmitter();
  menuProps = ['Invoices', 'Account', 'Favorite', 'Settings'];
  faIcons = ['money', 'user-circle-o', 'star', 'sign-in'];
  state: string = 'start';

  menuState = false;
  dropState: string = 'in';

  animateMe() {
    this.state = (this.state === 'start' ? 'finish' : 'start');
    this.menuState = !this.menuState;
    this.watchClick.emit(this.menuState);
  }
}
