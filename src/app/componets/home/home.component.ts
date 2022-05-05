import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCards();
    console.log(this.cards)
  }

  cards: Card[] =[]

  initCards(){
    let card: Card = {};
    card.title="Título Card";
    card.subTitle="Sub Título Card";
    card.color="primary";

    let card1: Card = {};
    card1.title='Title Card 1';
    card1.subTitle='Sub Title Card 1';
    card1.color='secondary';

    let card2: Card = {};
    card2.title='Título Card 2';
    card2.subTitle='Sub Título Card 2';
    card2.color='success';

    let card3: Card = {};
    card3.title='Title Card 3';
    card3.subTitle='Sub Title Card 3';
    card3.color='danger';

    let card4: Card = {};
    card4.title='Título Card 4';
    card4.subTitle='Sub Título Card 4';
    card4.color='warning';

    let card5: Card = {};
    card5.title='Title Card 5';
    card5.subTitle='Sub Title Card 5';
    card5.color='info';

    this.cards.push(card);
    this.cards.push(card1);
    this.cards.push(card2);
    this.cards.push(card3);
    this.cards.push(card4);
    this.cards.push(card5);
  }
}
