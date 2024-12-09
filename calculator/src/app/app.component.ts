import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  displayValue:string="";
  onButtonClick(val:string){
    this.displayValue=this.displayValue+val;
  }
  onButtonClickClr(){
    this.displayValue='';
  }

  onButtonClickAns(){
   let result:string=""
   try{
    result=eval(this.displayValue);
    this.displayValue=result;
   }
   catch(error){
    this.displayValue="INVALID INPUT";
   }
   
  }
}