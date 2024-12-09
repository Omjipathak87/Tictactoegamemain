import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})
export class TictactoeComponent 
{
    playerSymbol:string='X';
    cells:string[]=Array(10).fill(null);
    playerAName:string="playerA";
    PlayerBName:string="playerB";
    move:string="";
    
    
    onGridCellClicked(index:number):void 
    {
      this.cells[index]=this.playerSymbol;
      if(this.playerSymbol=='X'){this.playerSymbol='O';}
      else{this.playerSymbol='X';}
    }


}

