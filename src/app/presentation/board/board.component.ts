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
    if (position === this.bombs[0] || position === this.bombs[1] ) {
      this.squares[position] = 'b';
    } else {
      this.squares[position] = position;
    }

  }

  selectRandomSquare() {
    var bombs: number [] = [];
    var randomBomb: number;
    for (var i = 0; i<2; i++) {
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
