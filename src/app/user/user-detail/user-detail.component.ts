import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../shared/user.service';
import { ObservationService } from '../../observation/shared/observation.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;
  userObservations;

  constructor(
    private userService: UserService,
    private observationService: ObservationService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
    
    this.route.params.subscribe(params => {
      const newId = params['id'];
      this.getUser(newId);
    })
  }

  getUser(id: string) {
    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
      this.getUserObservations(user._id);
    });
  }

  getUserObservations(userId) {
    this.observationService.getUserObservations(userId).subscribe(observations => this.userObservations = observations);
  }

  getAvatarSrc() {
    if(this.user && this.user.avatarPath) return `http://localhost:3000/${this.user.avatarPath}`;
    return '../../../assets/default-avatar.png';
  }

  goBack() {
    this.location.back();
  }
}
