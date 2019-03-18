import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../shared/observation.service';

@Component({
  selector: 'app-observations-list',
  templateUrl: './observations-list.component.html',
  styleUrls: ['./observations-list.component.scss']
})
export class ObservationsListComponent implements OnInit {
  observations;

  constructor(private service: ObservationService) { }

  getObservations():void { this.service.getObservations().subscribe(observations => this.observations = observations); }

  ngOnInit() { this.getObservations(); }

}
