import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './components/deck/deck.component';
import { CardGraphicComponent } from './components/card-graphic/card-graphic.component';
import { ShuffleComponent } from './components/shuffle/shuffle.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    CardGraphicComponent,
    ShuffleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
