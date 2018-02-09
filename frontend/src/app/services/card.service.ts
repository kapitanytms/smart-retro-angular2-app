import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Card } from './../models/card';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable()
export class CardService {

  cards: Card[];
  private cardsUrl = 'http://localhost:8080/api/cards';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCards(table: string): Observable<Card[]> {
    return this.http.get('http://localhost:8080/api/table/' + table + '/cards')
          .map(res => res.json());
  }

  create(description: string, table: string): Observable<Card> {
    return this.http
      .post(this.cardsUrl, {'description': description, 'table': table, 'rate': 0})
      .map(card => card.json());
  }

  update(card: Card): Observable<any> {
    const url = `${this.cardsUrl}/${card._id}`;
    return this.http
              .put('http://localhost:8080/api/cards/' + card._id , {description: card.description, table: card.table, rate: card.rate})
              .map(message => console.log(message.json()));
  }
  delete(_id: string): Observable<void> {
    return this.http.delete('http://localhost:8080/api/cards/' + _id)
      .map(message => console.log(message.json()));
  }
}
