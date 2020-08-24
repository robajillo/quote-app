import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>(); //transmits to the delete trigger from parent component on delete function

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  uvotes = 0;
  dvotes = 0;

  upVote() {
    this.uvotes = this.uvotes + 1;
  }

  downVote() {
    this.dvotes = this.dvotes + 1;
  }

  constructor() {}

  ngOnInit() {}
}
