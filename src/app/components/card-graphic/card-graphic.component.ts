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

}
