import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  welcomeMsg = "Explore the world's top invoice manager"
  constructor() { }

  ngOnInit() {
  }

  onClick() {

  }

}
