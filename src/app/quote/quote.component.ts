import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  quotes:Quote[] = [
    {author:'roba', quote:'Watch finding Nemo'},
    {author:'roba', quote:'in understanding be men'}
  ];
}