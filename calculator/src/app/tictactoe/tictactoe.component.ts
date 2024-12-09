import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})
export class TictactoeComponent {
  playerSymbol:string ='X';
  cells:string[]=Array(10).fill(null);
  onGridCellClicked(index:number):void{
    this.cells[index]=this.playerSymbol;
    if(this.playerSymbol=='X'){this.playerSymbol='O';}
      else{this.playerSymbol='X';
      }
  }

  }

