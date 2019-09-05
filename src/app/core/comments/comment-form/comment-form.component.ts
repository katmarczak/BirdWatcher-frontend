import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() comment: String;
  @Output() submitEvent = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    if(!this.comment) this.comment = '';
  }

  onSubmit() { 
    // todo: validation
    this.submitEvent.emit(this.comment);
  }
}
