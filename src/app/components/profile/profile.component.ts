import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {UserTemplate} from "../../interface/userTemplate";
import {EventService} from "../../services/event.service";
import {ProfileService} from "../../services/profile.service";
import {EventTemplate} from "../../interface/eventTemplate";
import {ActivatedRoute, Router} from "@angular/router";
import {role} from "../../interface/role";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: UserTemplate;
  events: EventTemplate[] = []
  roles: string[] = [];
  isOwner: boolean = false;
  showAdminBoard = false;
  isLoggedIn = false;
  changeRoles = false;
  user_role = false
  moderator_role = false
  admin_role = false


  constructor(private route: ActivatedRoute,
              private token: TokenStorageService,
              private profileService: ProfileService,
              private eventService: EventService,
              private tokenStorage: TokenStorageService,
              private redirect: Router
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    const tokenId = this.token.getId()
    const routeId = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.isOwner = tokenId == routeId

    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      this.showAdminBoard = this.tokenStorage.getUser().roles.includes('ROLE_ADMIN');
    }

  }

  public hideEvents() {
    this.events = [];
  }

  private getUser() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.profileService.getUser(id).subscribe(user => {
      this.user = user
      for (let role of user.roles) {
        this.roles.push(role.name)
        this.user_role = this.roles.includes('ROLE_USER')
        this.moderator_role = this.roles.includes('ROLE_MODERATOR')
        this.admin_role = this.roles.includes('ROLE_ADMIN')
      }
    });
  }

  public deleteUser(id: number) {
    this.profileService.deleteUser(id).subscribe(() => this.redirect.navigate(['userList']))
  }

  showAccepteEvents(id: number) {
    this.eventService.getAcceptedEvents(id).subscribe(events => this.events = events)
  }

  showEventsWhichIOrganize(id: number) {
    this.eventService.getOrganizationEvents(id).subscribe(events => this.events = events)
  }

  uodateRoles() {
    this.user.roles = []
    if (this.user_role){
      this.user.roles.push(new class implements role {
        name = 'ROLE_USER';
      })
    }
    if (this.moderator_role){
      this.user.roles.push(new class implements role {
        name = 'ROLE_MODERATOR';
      })
    }
    if (this.admin_role){
      this.user.roles.push(new class implements role {
        name = 'ROLE_ADMIN';
      })
    }
    this.profileService.updateRole(this.user).subscribe()
    this.changeRoles = !this.changeRoles
  }

}
