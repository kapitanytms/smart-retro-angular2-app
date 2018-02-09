import { Card } from './../../models/card';
import { CardService } from './../../services/card.service';
import { Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, DoCheck {

  editText = false;
  changeLog: string[] = [];
  oldDescription: string;
  oldRate: number;

  @Input()
  card: Card;

  @Output() cardUpdating: EventEmitter<Card> = new EventEmitter();
  @Output() cardRemoving: EventEmitter<Card> = new EventEmitter();

  constructor(private cardService: CardService) {
   }

  ngOnInit() {
    this.oldDescription = this.card.description;
    this.oldRate = this.card.rate;
  }

  increaceRate() {
    this.card.rate++;
    this.cardService.update(this.card).subscribe();
  }
  removeCard() {
    this.cardRemoving.emit(this.card);
  }

  ngDoCheck() {
    if (this.card.description !== this.oldDescription) {
      this.oldDescription = this.card.description;
      this.cardService.update(this.card).subscribe();
    }
  }
}
