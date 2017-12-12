import {Component, Input, OnInit} from "@angular/core";
import {ChatMessage} from "./chat-message.model";
import {ChatUser} from "../chat-user/chat-user.model";
import {ChatUserService} from "../../../services/ng-chat/chat-user.service";

@Component({
  selector: 'chat-message',
  template: `
  <div class="msg-container"
       [ngClass]="{'base-sent': !incoming, 'base-receive': incoming}">
  
    <div class="avatar"
         *ngIf="!incoming">
      <img src="{{message.author.avatarSrc}}">
    </div>
  
    <div class="messages"
      [ngClass]="{'msg-sent': !incoming, 'msg-receive': incoming}">
      <p>{{message.text}}</p>
      <p class="time">{{message.sender}} • {{message.sentAt}}</p>
    </div>
  
    <div class="avatar"
         *ngIf="incoming">
      <img src="{{message.author.avatarSrc}}">
    </div>
  </div>
  `
})
export class ChatMessageComponent implements OnInit {
  @Input() message: ChatMessage;
  currentUser: ChatUser;
  incoming: boolean;

  constructor(public userService: ChatUserService){
  }

  ngOnInit(): void {
    this.userService.currentUser
      .subscribe(
        (user: ChatUser) => {
          this.currentUser = user;
          if (this.message.author && user) {
            this.incoming = this.message.author.id !== user.id;
          }
        });
  }
}
