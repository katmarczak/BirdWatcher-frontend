import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../shared/comment.model';

@Component({
  selector: 'app-observation-comment',
  templateUrl: './observation-comment.component.html',
  styleUrls: ['./observation-comment.component.scss']
})
export class ObservationCommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
