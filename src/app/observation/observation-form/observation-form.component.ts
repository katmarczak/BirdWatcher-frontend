import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpeciesService } from '../../species/shared/species.service';
import { Observation } from '../shared/observation.model';

@Component({
  selector: 'app-observation-form',
  templateUrl: './observation-form.component.html',
  styleUrls: ['./observation-form.component.scss']
})
export class ObservationFormComponent implements OnInit {
  speciesList;
  photos: FileList;
  observation: Observation = new Observation();
  @Output() submitEvent = new EventEmitter<FormData>();

  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {
    this.getSpecies();
    if(!this.observation) this.observation = new Observation();
  }

  getSpecies(): void { this.speciesService.getSpecies().subscribe(speciesList => this.speciesList = speciesList); }

  handleFileInput(files: FileList) {
    this.photos = files;
  }

  onSubmit() {
    const formData: FormData = new FormData();
    console.log(this.photos);
    if (this.photos) {
      for (var i = 0; i < this.photos.length; i++) formData.append('photos', this.photos[i]);
    }
    formData.append(`observation`, JSON.stringify(this.observation));
    this.submitEvent.emit(formData);
  }

}
