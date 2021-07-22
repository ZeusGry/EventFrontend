import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListOdUsers } from './board-admin/list-od-users.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { EventsComponent } from './components/events/events.component';
import { EventsAddComponent } from './components/events-add/events-add.component';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { OrganizerRegComponent } from './components/organizer-reg/organizer-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventsAddComponent,
    EventsDetailComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ListOdUsers,
    BoardModeratorComponent,
    BoardUserComponent,
    OrganizerRegComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
