import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { EventsAddComponent } from './components/events-add/events-add.component';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CommentAddComponent } from './components/comment-add/comment-add.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventsAddComponent,
    EventsDetailComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CommentAddComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
