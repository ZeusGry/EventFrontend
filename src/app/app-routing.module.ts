import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from "./components/events/events.component";
import {EventsAddComponent} from "./components/events-add/events-add.component";
import {EventsDetailComponent} from "./components/events-detail/events-detail.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'addEvents', component: EventsAddComponent},
  {path: 'detalisEvents/:id', component: EventsDetailComponent},
  {path: 'login', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
