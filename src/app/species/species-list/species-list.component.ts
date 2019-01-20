import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {

  species;

  constructor(service: SpeciesService) {
    this.species = service.getAllSpecies();
  }

  ngOnInit() {
  }

}
