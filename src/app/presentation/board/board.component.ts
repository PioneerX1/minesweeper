import { Component, OnInit } from '@angular/core';
// import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares = Array(36).fill(null);
  alive = null;
  bombs: number[] = this.selectRandomSquare();

  get gameStatusMessage(){
    return this.alive? `You are still alive.` :
    `Bomb has sploded. You are dead.`;
  }

  handleMove(position) {
    this.squares[position] = position;
    for (var i = 0; i < this.bombs.length; i++) {
      if (position === this.bombs[i] ) {
        this.squares[position] = 'b';
      }
    }
  }

  selectRandomSquare() {
    var bombs: number [] = [];
    var randomBomb: number;
    for (var i = 0; i<5; i++) {
      randomBomb = Math.floor(Math.random()*36);
      bombs.push(randomBomb);
      console.log(randomBomb);
    }

    return bombs;
  }

  constructor() { }

  ngOnInit() {
  }

}
