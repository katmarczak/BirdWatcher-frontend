import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObservationService } from './shared/observation.service';
import { Observation } from './shared/observation.model';
import { User } from '../user/shared/user.model';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss']
})
export class ObservationComponent implements OnInit {
  observation: Observation;
  owner: User;

  constructor(
    private observationService: ObservationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getObservation();
  }

  getObservation() {
    const id = this.route.snapshot.paramMap.get('id');
    this.observationService.getObservation(id).subscribe((observation) => {
      this.observation = observation;
      this.userService.getUser(observation.owner._id).subscribe((user) => {
        this.owner = user;
      });
    });
  }

  getAvatarSrc() {
    return this.userService.getAvatarSrc(this.owner);
  }

  getPhotoSrc() {
    return this.observationService.getPhotoSrc(this.observation);
  }

  isEditable() {
    return this.observation.editable;
  }

  toEditPage() {
    this.router.navigate(['/observations/edit', this.observation._id]);
  }

}
