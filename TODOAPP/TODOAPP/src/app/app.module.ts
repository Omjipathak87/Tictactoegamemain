import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TODOAPPComponent } from './todoapp/todoapp.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

@NgModule({
  declarations: [
    AppComponent,
    TODOAPPComponent,
    TictactoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
