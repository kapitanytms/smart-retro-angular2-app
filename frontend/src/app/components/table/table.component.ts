import { CardService } from './../../services/card.service';
import { Card } from './../../models/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  id: string;
  @Input()
  title: string;
  cards: Card[];
  showInputField: false;

  constructor( private cardService: CardService ) {}
  ngOnInit(): void {
    this.cardService.getCards(this.id).subscribe(cards => this.cards = cards);
  }

  addNewCard(description: string) {
     if (!description) { return; }
    this.cardService.create(description, this.id)
                    .subscribe(card => {
                      this.cards.push(card);
                      console.log(`${this.cards[this.cards.length - 1].table}`);
                    });
  }
  removeCard(removedCard: Card) {
    this.cardService.delete(removedCard._id)
                    .subscribe(() => {
                      this.cards = this.cards.filter(card => card !== removedCard);
                      // if (this.removeCard === removedCard) { removedCard = null; }
                    });
  }
}
