import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeciesModule } from './species/species.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ContentComponent } from './core/content/content.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { ObservationComponent } from './observation/observation.component'
import { UserService } from './user/shared/user.service';
import { SpeciesService } from './species/shared/species.service';
import { ObservationService } from './observation/shared/observation.service';
import { ObservationsListComponent } from './observation/observations-list/observations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    UsersListComponent,
    ObservationComponent,
    ObservationsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SpeciesModule
  ],
  providers: [
    UserService,
    ObservationService,
    SpeciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
