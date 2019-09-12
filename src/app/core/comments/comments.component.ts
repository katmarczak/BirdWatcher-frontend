import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from './shared/comments.service';
import { Observation } from 'src/app/observation/shared/observation.model';
import { Comment } from './shared/comment.model';
import { AuthService } from 'src/app/user/login/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() observation: Observation;
  comments: Comment[];
  currentUsername: String;

  constructor(private commentService: CommentsService, private authService: AuthService) { }

  ngOnInit() {
    this.commentService.getObservationComments(this.observation._id)
      .subscribe((comments) => this.comments = comments );
    
    if(localStorage.getItem('username')) this.currentUsername = localStorage.getItem('username');
  }

  reload() {
    this.ngOnInit();
  }

}
