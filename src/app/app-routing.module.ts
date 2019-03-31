import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './core/content/content.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { ObservationsListComponent } from './observation/observations-list/observations-list.component';
import { ObservationComponent } from './observation/observation.component';
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
    path: 'observations/:id',
    component: ObservationComponent
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailComponent,
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
