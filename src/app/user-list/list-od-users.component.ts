import { Component, OnInit } from '@angular/core';
import {UserTemplate} from "../interface/userTemplate";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../services/profile.service";

@Component({
  selector: 'app-board-admin',
  templateUrl: './list-od-users.component.html',
  styleUrls: ['./list-od-users.component.css']
})
export class ListOdUsers implements OnInit {

  userList: UserTemplate[] | undefined

  constructor(
    private route: ActivatedRoute,
    private profileService : ProfileService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.profileService.getUsers().subscribe(users => this.userList = users);

  }
}
