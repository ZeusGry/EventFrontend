import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-organizer-reg',
  templateUrl: './organizer-reg.component.html',
  styleUrls: ['./organizer-reg.component.css']
})
export class OrganizerRegComponent implements OnInit {
  form: any = {
    username: null,
    showName: null,
    email: null,
    password: null
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
              private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('id')
    this.authService.getEmail(token).subscribe(email => this.form.email = email)
  }


  onSubmit(): void {
    const { username, showName, email, password } = this.form;
    this.authService.registerOrganizer(username, showName, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
