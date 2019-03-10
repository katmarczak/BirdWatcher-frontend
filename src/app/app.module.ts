import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeciesModule } from './species/species.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ContentComponent } from './core/content/content.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { ObservationComponent } from './observation/observation.component'
import { UserService } from './user/shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    UsersListComponent,
    ObservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpeciesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
