import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventTemplate} from "../../interface/eventTemplate";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
  event: EventTemplate | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
  ) {
  }

  ngOnInit(): void {
    this.getEvent();
  }

  private getEvent(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);

  }
}
