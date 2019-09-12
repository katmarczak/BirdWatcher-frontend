import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../shared/comments.service';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.scss']
})
export class CommentNewComponent implements OnInit {
  @Output() newComment = new EventEmitter();

  constructor(
    private commentsService: CommentsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  postComment(commentText: String) {
    const observationId = this.route.snapshot.paramMap.get('id')
    const comment = {
      observationId: observationId,
      text: commentText
    };

    this.commentsService.postObservationComment(comment).subscribe(
      (response) => this.newComment.emit(), 
      (error) => console.log(error)
    );
  }

}
