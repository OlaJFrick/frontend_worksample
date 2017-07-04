import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
  animations: [
     trigger('fadeInAnimation', [
      state('in', style({opacity: '1'})),
      transition('void => *', [
        style({opacity: '0'}),
        animate('800ms 600ms ease')
      ])
    ]),
    trigger('msgAnimation', [
      state('in', style({opacity: '1'})),
      transition('void => *', [
        style({opacity: '0'}),
        animate('800ms 3500ms ease')
      ])
    ]),
    trigger('iconAnimation', [
      state('on', style({
        transform: 'translateY(0)'
      })),
      state('off', style({
        transform: 'translateY(100vh)'
      })),
      transition('on <=> off', animate('700ms 50ms ease'))
    ]),
    trigger('hideScreenAnimation', [
      state('down', style({
        top: '0px'
      })),
      state('up', style({
        top: '-100vh'
      })),
      transition('down <=> up', animate('700ms 50ms ease'))
    ]),
  ]
})

export class StartScreenComponent implements OnInit {
  bgState: string = 'up';
  changeState: string = 'off';
  intro: boolean = true;
  introMsg: string = 'Thank you for trying out the most unique invoice service for any kind of business';
  welcomeMsg: string = 'Explore the world\'s top invoice manager';

  ngOnInit() {
    setTimeout(() => { this.animateBg(); }, 3000);
    setTimeout(() => { this.animateIcon(); }, 4500);
  }

  animateBg() {
    this.bgState = (this.bgState === 'down' ? 'up' : 'down');
  }

  animateIcon() {
    this.changeState = (this.changeState === 'on' ? 'off' : 'on');
    this.intro = false;
  }
}