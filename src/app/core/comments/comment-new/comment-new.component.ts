import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../shared/comments.service';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.scss']
})
export class CommentNewComponent implements OnInit {

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
      (newComment) => {
        // todo: refresh
      }, (error) => console.log(error));;
  }

}
