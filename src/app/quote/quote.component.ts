
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("Life", "Abraham Lincon","character is like a tree and reputation like a shadow.The shadow is what we think of it"),
    new Quote("Life", "Albert Einsten", "A person who never made a mistake never tried anything new"),
    new Quote("Life", "Unknown", "In understanding be men")
  ]
  previousNo: number
  lastNo: number
  token: number

  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote)
  }

  upvote(i) {
    this.quotes[i].upvotes + 1
  }
  downvote(i) {
    this.quotes[i].downvotes + 1
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }


constructor() { }

ngOnInit() {
}

}