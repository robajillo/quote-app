import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(
      'Life',
      'Abraham Lincon',
      'character is like a tree and reputation like a shadow.The shadow is what we think of it'
    ),
    new Quote(
      'Life',
      'Albert Einsten',
      'A person who never made a mistake never tried anything new'
    ),
    new Quote('Life', 'Unknown', 'In understanding be men'),
  ];
  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote);
  }

  upvote(i) {
    this.quotes[i].upvotes++;
  }
  downvote(i) {
    this.quotes[i].downvotes++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1);
  }
  preNum: number;
  lastNum: number;
  counter: number;

  highestUpvote() {
    this.preNum = 0;
    this.lastNum = 0;

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.preNum) {
        this.preNum = this.lastNum;
      }
    }
    return this.preNum;
  }

  constructor() {}

  ngOnInit() {}
}
