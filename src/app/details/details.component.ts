import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>(); //transmits to the delete trigger from parent component on delete function

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  upvotes = 0;
  downvotes = 0;
  constructor() {}

  ngOnInit() {}
}
