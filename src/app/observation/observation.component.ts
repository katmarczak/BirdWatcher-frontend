import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
  ) { }

  ngOnInit() {
    this.getObservation();
  }

  getObservation() {
    const id = this.route.snapshot.paramMap.get('id');
    this.observationService.getObservation(id).subscribe(observation => this.observation = observation);
  }

  isEditable() {
    return this.observation.editable;
  }

  toEditPage() {
    this.router.navigate(['/observations/edit', this.observation._id]);
  }

}
