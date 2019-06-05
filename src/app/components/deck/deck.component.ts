import { Component, OnInit } from '@angular/core';
import { Card } from '../../model/Card';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  cards:Card = [];

  constructor() { }

  ngOnInit() {
    for(let i:number = 0; i < 4; i++){
      let currsuit:string;
      switch(i) {
        case 0: {
          currsuit = "Hearts";
          break;
        }
        case 1: {
          currsuit = "Spades";
          break;
        }
        case 2: {
          currsuit = "Clubs";
          break;
        }
        case 3: {
          currsuit = "Diamonds";
          break;
        }
      }
      for(let j:number = 1; j < 14; j++){
        this.cards.push(new Card(currsuit, j));
      }
    }
  }

}
