import { Component, OnInit } from '@angular/core';
import {EventTemplate} from "../../interface/eventTemplate";
import {EventService} from "../../services/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventTemplate[] | undefined

  constructor(
    private route: ActivatedRoute,
    private eventService : EventService) {  }

  ngOnInit(): void {
    this.getEvents();
  }

  private getEvents() {
    this.eventService.getEvents().subscribe(events => {this.events=events;
    console.log("Odbierany event " + events)});
  }
}
