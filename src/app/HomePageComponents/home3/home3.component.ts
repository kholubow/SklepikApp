import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {
  BGwrap: string;

  constructor() { }

  ngOnInit() {
    this.BGwrap = 'assets/images/services/bg_wrap.jpg';
  }

}
