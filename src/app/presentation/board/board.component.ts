import { Component, OnInit } from '@angular/core';
// import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  rows = [0,1,2,3,4,5,6];
  columns = [0,1,2,3,4,5,6];
  squares = Array(this.rows.length*this.columns.length).fill(null);
  alive = true;
  bombs: number[] = this.selectRandomSquare();

  get gameStatusMessage(){
    return this.alive? `You are still alive.` :
    `Bomb has sploded. You are dead.`;
  }

  handleMove(position) {
    let neighbors = {
      UP: position - this.columns.length,
      UPRIGHT: position - this.columns.length + 1,
      RIGHT: position + 1,
      DOWNRIGHT: position + this.columns.length + 1,
      DOWN: position + this.columns.length,
      DOWNLEFT: position + this.columns.length - 1,
      LEFT: position - 1,
      UPLEFT: position - this.columns.length - 1,
    };
    let bombThreat: number = 0;
    if (this.squares[position] === null) {
      this.squares[position] = -1;

      for (let i = 0; i<this.bombs.length; i++) {
        switch(true){
          case (position === this.bombs[i]):
            this.squares[position] = 'b';
            i = this.bombs.length;
            break;
          case (position === 0):
            if (this.bombs[i] === neighbors.RIGHT ||
                this.bombs[i] === neighbors.DOWNRIGHT ||
                this.bombs[i] === neighbors.DOWN) {
              bombThreat++;
              this.squares[position] = bombThreat; }
            break;
          case (position === this.columns.length - 1):
            if (this.bombs[i] === neighbors.LEFT ||
                this.bombs[i] === neighbors.DOWNLEFT ||
                this.bombs[i] === neighbors.DOWN ) {
              bombThreat++;
              this.squares[position] = bombThreat; }
            break;
          case (position === this.columns.length*this.rows.length - 1):
            if (this.bombs[i] === neighbors.LEFT ||
                this.bombs[i] === neighbors.UPLEFT ||
                this.bombs[i] === neighbors.UP ) {
              bombThreat++;
              this.squares[position] = bombThreat; }
            break;
          case (position === this.columns.length*this.rows.length - this.columns.length):
            if (this.bombs[i] === neighbors.RIGHT ||
                this.bombs[i] === neighbors.UPRIGHT ||
                this.bombs[i] === neighbors.UP ) {
              bombThreat++;
              this.squares[position] = bombThreat; }
            break;
          case (position < this.columns.length -1):
            if (this.bombs[i] === neighbors.RIGHT ||
                this.bombs[i] === neighbors.DOWNRIGHT ||
                this.bombs[i] === neighbors.DOWN ||
                this.bombs[i] === neighbors.DOWNLEFT ||
                this.bombs[i] === neighbors.LEFT ) {
              bombThreat++;
              this.squares[position] = bombThreat; }
            break;
          case (position % this.columns.length === this.columns.length - 1):
            if (this.bombs[i] === neighbors.UP ||
                this.bombs[i] === neighbors.UPLEFT ||
                this.bombs[i] === neighbors.LEFT ||
                this.bombs[i] === neighbors.DOWNLEFT ||
                this.bombs[i] === neighbors.DOWN ) {
              bombThreat++;
              this.squares[position] = bombThreat; }
            break;
          case (position > this.columns.length*(this.rows.length - 1)):
            if (this.bombs[i] === neighbors.LEFT ||
                this.bombs[i] === neighbors.UPLEFT ||
                this.bombs[i] === neighbors.UP ||
                this.bombs[i] === neighbors.UPRIGHT ||
                this.bombs[i] === neighbors.RIGHT ) {
              bombThreat++;
              this.squares[position] = bombThreat; }
            break;
          case (position % this.columns.length === 0 ):
            if (this.bombs[i] === neighbors.UP ||
                this.bombs[i] === neighbors.UPRIGHT ||
                this.bombs[i] === neighbors.RIGHT ||
                this.bombs[i] === neighbors.DOWNRIGHT ||
                this.bombs[i] === neighbors.DOWN ) {
              bombThreat++;
              this.squares[position] = bombThreat; }
            break;
          case (position % this.columns.length > 0):
            if (this.bombs[i] === neighbors.UP ||
                this.bombs[i] === neighbors.UPRIGHT ||
                this.bombs[i] === neighbors.RIGHT ||
                this.bombs[i] === neighbors.DOWNRIGHT ||
                this.bombs[i] === neighbors.DOWN ||
                this.bombs[i] === neighbors.DOWNLEFT ||
                this.bombs[i] === neighbors.LEFT ||
                this.bombs[i] === neighbors.UPLEFT ) {
              bombThreat++;
              this.squares[position] = bombThreat; }
            break;
          default:
            this.squares[position] = '-';
        }
      }
    }
    if (this.squares[position]===-1 ) {
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
