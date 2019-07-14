import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../species/shared/species.service';

@Component({
  selector: 'app-observation-form',
  templateUrl: './observation-form.component.html',
  styleUrls: ['./observation-form.component.scss']
})
export class ObservationFormComponent implements OnInit {
  species;

  constructor(private speciesService: SpeciesService) { }

  getSpecies(): void { this.speciesService.getSpecies().subscribe(species => this.species = species); }

  onSubmit() { /* emit an event to the parent */ }

  ngOnInit() {
    this.getSpecies();
  }

}
