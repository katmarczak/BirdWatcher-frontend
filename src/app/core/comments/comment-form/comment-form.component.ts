import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObservationComment } from '../shared/observationComment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() comment: ObservationComment;
  @Output() submitEvent = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    if(!this.comment) this.comment = new ObservationComment;
  }

  onSubmit() { 
    // todo: validation
    this.submitEvent.emit(this.comment.text);
    this.comment.text = '';
  }
}
