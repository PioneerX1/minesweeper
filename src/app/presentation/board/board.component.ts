import { Component, OnInit } from '@angular/core';
// import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  rows: number = 6;
  columns: number = 6;
  squares = Array(36).fill(null);
  alive = true;
  bombs: number[] = this.selectRandomSquare();

  get gameStatusMessage(){
    return this.alive? `You are still alive.` :
    `Bomb has sploded. You are dead.`;
  }

  handleMove(position) {
    this.squares[position] = position;
    var bombThreat: number = 0;
    for (var i = 0; i<this.bombs.length; i++) {

      // bomb check
      if (position === this.bombs[i]){
        this.squares[position] = 'b';
        i = this.bombs.length;
      }
      // top left corner
      else if (position === 0 && (
        this.bombs[i] === position + 1 ||
        this.bombs[i] === position + this.columns ||
        this.bombs[i] === position + this.columns + 1 )) {
          bombThreat++;
          this.squares[position] = bombThreat;
      }
      // middle of top row
      else if (position > 0 && position < (this.columns - 1) && (
      this.bombs[i] === position + 1 ||
      this.bombs[i] === position + this.columns ||
      this.bombs[i] === position + this.columns + 1 ||
      this.bombs[i] === position - 1 ||
      this.bombs[i] === position + this.columns - 1)) {
        bombThreat++;
        this.squares[position] = bombThreat;
      }
      // top right corner
      else if (position === this.columns - 1 && (
        this.bombs[i] === position - 1 ||
        this.bombs[i] === position + this.columns ||
        this.bombs[i] === position + this.columns - 1 )) {
          bombThreat++;
          this.squares[position] = bombThreat;
        }

    }

    if (this.squares[position]!=='b' && bombThreat === 0) {
      this.squares[position] = '-';
    }
  }




  selectRandomSquare() {
    var bombs: number [] = [];
    var randomBomb: number;
    for (var i = 0; i<5; i++) {
      randomBomb = Math.floor(Math.random()*36);
      var duplicate = false;
      for(var k = 0; k < bombs.length; k++) {
        if(bombs[k] === randomBomb) {
          duplicate = true;
        }
      }
      if (duplicate === false) {
        bombs.push(randomBomb);
      } else {
        i--;
      }
    }
    console.log(bombs);
    return bombs;
  }

  constructor() { }

  ngOnInit() {
  }

}
