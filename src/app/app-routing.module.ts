import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {EventsComponent} from "./components/events/events.component";
import {CommentAddComponent} from "./components/comment-add/comment-add.component";
import {EventsAddComponent} from "./components/events-add/events-add.component";
import {EventsDetailComponent} from "./components/events-detail/events-detail.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'addEvent', component: EventsAddComponent},
  {path: 'events', component: EventsComponent},
  {
    path: 'eventhDetalis/:id', component: EventsDetailComponent,
    children: [
      {
        path: 'addComment',
        component: CommentAddComponent,

      }]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
