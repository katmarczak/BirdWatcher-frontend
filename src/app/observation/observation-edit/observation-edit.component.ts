import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../shared/observation.service';
import { Observation } from '../shared/observation.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-observation-edit',
  templateUrl: './observation-edit.component.html',
  styleUrls: ['./observation-edit.component.scss']
})
export class ObservationEditComponent implements OnInit {
  observation: Observation;

  constructor(
    private observationService: ObservationService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getObservation();
  }

  getObservation() {
    const id = this.route.snapshot.paramMap.get('id');
    this.observationService.getObservation(id).subscribe(observation => this.observation = observation);
  }

  update(observation) {
    const data = { _id: observation._id, speciesId: observation.species._id, date: observation.date, exactLocation: observation.exactLocation };
    this.observationService.editObservation(data).subscribe(
      (observation) => {
        this.router.navigate(['/observations', observation._id]);
    }, (error) => console.log(error));
  }

}
