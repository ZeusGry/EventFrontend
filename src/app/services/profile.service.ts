import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventTemplate} from "../interface/eventTemplate";
import {UserTemplate} from "../interface/userTemplate";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  private userUrl = 'http://localhost:8080/api/Users'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getUsers(): Observable<UserTemplate[]> {
    return this.http.get<UserTemplate[]>(this.userUrl);
  }

  getUser(id: number): Observable<UserTemplate> {
    const url = `${this.userUrl}/${id}`
    return this.http.get<UserTemplate>(url);
  }

  deleteUser(id: number) {
    const url = `${this.userUrl}/${id}`
    return this.http.delete<UserTemplate>(url);
  }
}
