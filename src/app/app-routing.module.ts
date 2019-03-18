import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './core/content/content.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { ObservationsListComponent } from './observation/observations-list/observations-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'observations',
    component: ObservationsListComponent
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
