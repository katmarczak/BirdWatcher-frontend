import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './core/content/content.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { UsersListComponent } from './user/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'species',
    component: SpeciesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
