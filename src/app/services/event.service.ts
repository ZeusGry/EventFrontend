import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventTemplate} from "../interface/eventTemplate";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  private eventUrl = 'http://localhost:8080/api/Events'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getEvents(): Observable<EventTemplate[]> {
    return this.http.get<EventTemplate[]>(this.eventUrl);
  }

  addEvent(event: EventTemplate): Observable<EventTemplate> {
    return this.http.post<EventTemplate>(this.eventUrl, event);
  }

  getEvent(id: number): Observable<EventTemplate> {
    const url = `${this.eventUrl}/${id}`
    return this.http.get<EventTemplate>(url);
  }

  getAcceptedEvents(id: number) {
    const url = `${this.eventUrl}/accepted/${id}`
    return this.http.get<EventTemplate>(url);
  }

  getNotAcceptedEvents(id: number) {
    const url = `${this.eventUrl}/notaccepted/${id}`
    return this.http.get<EventTemplate>(url);
  }

  getOrganizationEvents(id: number) {
    const url = `${this.eventUrl}/organizer/${id}`
    return this.http.get<EventTemplate>(url);
  }
}
