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

  handle(formData: FormData) {
    const formObservation = JSON.parse(formData.get('observation').toString());
    const fields = { speciesId: formObservation.species._id, date: formObservation.date, exactLocation: formObservation.exactLocation };
    const files = formData.getAll('photos');
    console.log('Fields:', fields, ' Files: ', files);

    this.observationService.postObservation(fields).subscribe(
      (observation) => {
        if (!files) {
          this.router.navigate(['/observations', observation._id]);
        }
        else {
          this.observationService.postPhotos(observation._id, files).subscribe(() => {
            this.router.navigate(['/observations', observation._id]);
          }, (error) => console.log(error));
        }
      }, (error) => console.log(error));
  }
}
