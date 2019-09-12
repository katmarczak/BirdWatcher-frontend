import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '../shared/comment.model';
import { CommentsService } from '../shared/comments.service';

@Component({
  selector: 'app-observation-comment',
  templateUrl: './observation-comment.component.html',
  styleUrls: ['./observation-comment.component.scss']
})
export class ObservationCommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() deletedComment = new EventEmitter();

  constructor(private commentsService: CommentsService, private router: Router) { }

  ngOnInit() {
  }

  isEditable() {
    return this.comment.editable;
  }

  deleteComment() {
    this.commentsService.deleteObservationComment(this.comment._id).subscribe(
      (response) => {
        console.log(response);
        this.deletedComment.emit();
      },
      (error) => console.log(error)
    );
  }

  toEditPage() {
    this.router.navigate(['/comments/edit', this.comment._id]);
  }

}
