import { Component, OnInit } from '@angular/core';
import {Comments} from "../../interface/comment";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {

 comment: Comments ={content: "", user: this.token.getUser()}
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
  }

  send() {
  }

}
