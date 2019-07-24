import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './core/content/content.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { ObservationsListComponent } from './observation/observations-list/observations-list.component';
import { ObservationNewComponent } from './observation/observation-new/observation-new.component';
import { ObservationEditComponent } from './observation/observation-edit/observation-edit.component';
import { ObservationComponent } from './observation/observation.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },      
      {
        path: 'observations/create',
        component: ObservationNewComponent
      },      
      {
        path: 'observations/edit/:id',
        component: ObservationEditComponent
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
      },
      {
        path: 'settings',
        component: UserSettingsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
