import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../shared/observation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observation-new',
  templateUrl: './observation-new.component.html',
  styleUrls: ['./observation-new.component.scss']
})
export class ObservationNewComponent implements OnInit {

  constructor(private observationService: ObservationService, private router: Router) { }

  ngOnInit() {
  }

  post(observation) {
    const data = { speciesId: observation.species._id, date: observation.date, exactLocation: observation.exactLocation };
    this.observationService.postObservation(data).subscribe(
      (observation) => {
        this.router.navigate(['/observations', observation._id]);
    }, (error) => console.log(error));
  }

}
