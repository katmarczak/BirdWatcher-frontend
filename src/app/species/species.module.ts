import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpeciesComponent } from './species.component';
import { SpeciesService } from './shared/species.service';
import { CommonModule } from '@angular/common';
import { SpeciesListComponent } from './species-list/species-list.component';

@NgModule({
  declarations: [
    SpeciesComponent,
    SpeciesListComponent
  ],
  imports: [
      CommonModule,
  ],
  providers: [
    SpeciesService
  ],
  exports: [
    SpeciesComponent,
  ]
})
export class SpeciesModule { }
