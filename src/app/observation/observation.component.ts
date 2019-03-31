import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ObservationService } from './shared/observation.service';
import { Observation } from './shared/observation.model';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss']
})
export class ObservationComponent implements OnInit {
  observation: Observation;

  constructor(
    private observationService: ObservationService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getObservation();
  }

  getObservation() {
    const id = this.route.snapshot.paramMap.get('id');
    this.observationService.getObservation(id).subscribe(observation => this.observation = observation);
  }

  goBack() {
    this.location.back();
  }

}
