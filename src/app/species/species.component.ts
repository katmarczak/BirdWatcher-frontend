import { Component, OnInit } from '@angular/core';
import { SpeciesService } from './species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  species;

  constructor(service: SpeciesService) {
    this.species = service.getAllSpecies();
  }

  ngOnInit() {
  }

}
