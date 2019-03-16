import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../shared/species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {
  species;

  constructor(private service: SpeciesService) { }

  getSpecies():void { this.service.getSpecies().subscribe(species => this.species = species); }

  ngOnInit() { this.getSpecies(); }

}
