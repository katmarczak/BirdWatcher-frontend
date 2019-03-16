import { Component, OnInit } from '@angular/core';
import { SpeciesService } from './shared/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  species;

  constructor(private service: SpeciesService) { }

  getSpecies():void { this.species = this.service.getSpecies(); }

  ngOnInit() {
    this.getSpecies();
  }

}
