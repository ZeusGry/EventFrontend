import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import {UserTemplate} from "../../interface/userTemplate";
import {EventService} from "../../services/event.service";
import {ProfileService} from "../../services/profile.service";
import {EventTemplate} from "../../interface/eventTemplate";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 user: UserTemplate |undefined
  events: EventTemplate | undefined

  constructor(private token: TokenStorageService,
              private profileService : ProfileService,
              private eventService: EventService
  ) { }

  ngOnInit(): void {
   this.getUser();
  }

  public hideEvents() {
   this.events = undefined;
  }

  private getUser() {
    this.profileService.getUser(this.token.getId()).subscribe(user => this.user = user);
  }

  public deleteUser(id: number) {
   this.profileService.deleteUser(id).subscribe(this.user= undefined)
  }

  showAccepteEvents(id: number) {
    this.eventService.getAcceptedEvents(this.token.getId()).subscribe(events => this.events =events)
  }

  showNotAcceptedEvents(id: number) {
    this.eventService.getNotAcceptedEvents(this.token.getId()).subscribe(events => this.events =events)
  }

  showEventsWhichIOrganize(id: number) {
    this.eventService.getOrganizationEvents(this.token.getId()).subscribe(events => this.events =events)
  }
}
