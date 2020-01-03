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

  handle(formData: FormData) {
    const formObservation = JSON.parse(formData.get('observation').toString());
    const data = { _id: formObservation._id, speciesId: formObservation.species._id, date: formObservation.date, exactLocation: formObservation.exactLocation };
    this.observationService.editObservation(data).subscribe(
      (observation) => {
        this.router.navigate(['/observations', observation._id]);
    }, (error) => console.log(error));
  }

}
