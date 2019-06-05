import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../model/Card'

@Component({
  selector: 'app-card-graphic',
  templateUrl: './card-graphic.component.html',
  styleUrls: ['./card-graphic.component.css']
})
export class CardGraphicComponent implements OnInit {
  @Input() card: Card;


  constructor() { }

  ngOnInit() {

  }

  getNum() {

    if(this.card.num < 11 && this.card.num > 1) {
      //regular cards
      return this.card.num;
    } else if(this.card.num === 1 ) {
      //Ace
      return 'A'
    } else if(this.card.num === 11 ) {
      //Jack
      return 'J'
    } else if(this.card.num === 12 ) {
      //Queen
      return 'Q'
    } else if(this.card.num === 13 ) {
      //King
      return 'K'
    };
  }

  getSuit(){
    return "assets/" + this.card.suit + ".png"
  }

  getColor(){
    if(this.card.suit === "Hearts" || this.card.suit === "Diamonds"){
      return "red";
    } else {
      return "black";
    };
  }

  getMiddle(){
    switch(this.card.num) {
      case 11: {
        return "assets/Jack.png";
        break;
      }
      case 12: {
        return "assets/Queen.png";
        break;
      }
      case 13: {
        return "assets/King.png";
        break;
      }
      default: {
        return "assets/" + this.card.suit + ".png"
        break;
      }
    }
  }

}
