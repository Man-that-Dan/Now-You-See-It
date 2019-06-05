export class Card {
  _suit:string;
  _num:number;

  constructor(suit:string,  num:number){
    this._suit = suit;
    this._num = num;
  }

  get suit() {
    return this._suit
  };

  get num() {
    return this._num
  }
}
