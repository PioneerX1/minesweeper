import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares = Array(36).fill(null);
  // player = 'X';
  alive: boolean = true;

  get gameStatusMessage(){
    return this.alive? `You are still alive.` :
    `Bomb has sploded. You are dead.`;
  }

  constructor() { }

  ngOnInit() {
  }

}
