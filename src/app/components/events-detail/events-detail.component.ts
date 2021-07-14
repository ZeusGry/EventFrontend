import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventTemplate} from "../../interface/eventTemplate";
import {EventService} from "../../services/event.service";
import {Comments} from "../../interface/comment";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
  event: EventTemplate = {
    acces: false, commentCount: 0, email: "", name: "", participantCount: 0, phoneNumber: "", startTime: "",
    adress: {
      city: "",
      street: "",
      numberOfBuilding: ""
    },
  };
  comments: Comments[] = [];



  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private commentService: CommentsService,
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

  showComments() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.commentService.getComments(id)
      .subscribe(comments => this.comments = comments)
  }

  hideComments() {
    this.comments = [];
  }
}
