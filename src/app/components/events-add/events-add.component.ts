import {Component, OnInit} from '@angular/core';
import {EventTemplate} from "../../interface/eventTemplate";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html',
  styleUrls: ['./events-add.component.css']
})
export class EventsAddComponent implements OnInit {
  event: EventTemplate = {
    acces: false,
    commentCount: 0,
    email: "",
    name: "",
    participantCount: 0,
    phoneNumber: "",
    startTime: "",
    adress: {
      city: "",
      street: "",
      numberOfBuilding: ""
    }
  }

  constructor(
    private route:ActivatedRoute,
    private eventService: EventService,
  ) {
  }

  ngOnInit(): void {
  }

  private addEvent() {
    this.eventService.addEvent(this.event).subscribe();
  }

  save(): void {
    this.addEvent();
  }

}
