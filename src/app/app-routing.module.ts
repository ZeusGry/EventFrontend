import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {ListOdUsers} from './user-list/list-od-users.component';
import {EventsComponent} from "./components/events/events.component";
import {EventsAddComponent} from "./components/events-add/events-add.component";
import {EventsDetailComponent} from "./components/events-detail/events-detail.component";
import {OrganizerRegComponent} from "./components/organizer-reg/organizer-reg.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'userList', component: ListOdUsers},
  {path: 'addEvent', component: EventsAddComponent},
  {path: 'events', component: EventsComponent},
  {path: 'eventhDetalis/:id', component: EventsDetailComponent},
  {path: 'register/:id', component: OrganizerRegComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
