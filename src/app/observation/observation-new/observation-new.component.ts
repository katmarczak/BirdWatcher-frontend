import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../shared/observation.service';

@Component({
  selector: 'app-observation-new',
  templateUrl: './observation-new.component.html',
  styleUrls: ['./observation-new.component.scss']
})
export class ObservationNewComponent implements OnInit {

  constructor(private observationService: ObservationService) { }

  ngOnInit() {
  }

  post(observation) {
    const data = { speciesId: observation.species._id, date: observation.date, exactLocation: observation.exactLocation };
    this.observationService.postObservation(data).subscribe((response) => {
      console.log(response);
    });
  }

}
