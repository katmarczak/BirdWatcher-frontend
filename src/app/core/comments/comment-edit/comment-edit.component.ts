import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../shared/comments.service';
import { ObservationComment } from '../shared/observationComment.model';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss']
})
export class CommentEditComponent implements OnInit {
  comment: ObservationComment;

  constructor(
    private commentsService: CommentsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getComment();
  }

  getComment() {
    const id = this.route.snapshot.paramMap.get('id');
    this.commentsService.getObservationComment(id).subscribe(comment => this.comment = comment);
  }

  updateComment(commentText: String) {
    this.commentsService.updateObservationComment(this.comment._id, commentText).subscribe(
      (updatedComment) => this.router.navigate(['/observations', updatedComment.observationId]),
      (error) => console.log(error)
    );
  }

}
