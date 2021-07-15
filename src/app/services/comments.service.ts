import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comments} from "../interface/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  private eventUrl = 'http://localhost:8080/api/Comments'

  getComments(id: number): Observable<Comments[]> {
    const url = `${this.eventUrl}/${id}`
    return this.http.get<Comments[]>(url);
  }

  send(comment: Comments, id: number): Observable<Comments> {
    const url = `${this.eventUrl}/${id}`
    return this.http.post<Comments>(url, comment);
  }
}
