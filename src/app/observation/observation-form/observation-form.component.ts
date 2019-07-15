import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpeciesService } from '../../species/shared/species.service';
import { Observation } from '../shared/observation.model';

@Component({
  selector: 'app-observation-form',
  templateUrl: './observation-form.component.html',
  styleUrls: ['./observation-form.component.scss']
})
export class ObservationFormComponent implements OnInit {
  species;
  observation: Observation = new Observation();
  @Output() submitEvent = new EventEmitter<Observation>();

  constructor(private speciesService: SpeciesService) { }

  getSpecies(): void { this.speciesService.getSpecies().subscribe(species => this.species = species); }

  onSubmit() { 
    this.submitEvent.emit(this.observation);
  }

  ngOnInit() {
    this.getSpecies();
  }

}
