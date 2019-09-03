import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from './shared/comments.service';
import { Observation } from 'src/app/observation/shared/observation.model';
import { Comment } from './shared/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() observation: Observation;
  comments: Comment[];

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.commentService.getObservationComments(this.observation._id)
    .subscribe((comments) => {
      this.comments = comments;
      console.log(comments);
    })
  }

}
