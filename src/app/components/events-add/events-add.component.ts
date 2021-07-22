import {Component, OnInit} from '@angular/core';
import {EventTemplate} from "../../interface/eventTemplate";
import {ActivatedRoute, Router} from "@angular/router";
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

  organizators: string[] = [];
  organizatorToAdd: string ="";

  constructor(
    private route:ActivatedRoute,
    private eventService: EventService,
    private redirect: Router
  ) {
  }

  ngOnInit(): void {
  }

  public addOrganizators(): void{
    this.organizators.push(this.organizatorToAdd);
    this.organizatorToAdd = "";
  }

  private addEvent() {
    this.eventService.addEvent(this.event).subscribe(event => {
      console.log(event.id)
      if (event.id != null) {
        this.setOrganizators(event.id)
      }
    });
  }

  private setOrganizators(eventId: number) {
   this.eventService.setOrganizators(eventId, this.organizators).subscribe(() => this.redirect.navigate(['events']))
  }

  save(): void {
    this.addEvent();
  }

}
