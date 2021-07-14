import { Component, OnInit } from '@angular/core';
import {UserTemplate} from "../interface/userTemplate";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../services/profile.service";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

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
