import {Component, Input, OnInit} from "@angular/core";
import {ChatThreat} from "./chat-threat.model";
import {ChatThreadService} from "../../../services/ng-chat/chat-thread.service";

@Component({
  selector: 'chat-thread',
  template: `
  <div class="media conversation">
    <div class="pull-left">
      <img class="media-object avatar" src="{{thread.avatarSrc}}">
    </div>
    <div class="media-body">
      <h5 class="media-heading contact-name">{{thread.name}}
        <span *ngIf="selected">&bull;</span>
      </h5>
      <small class="message-preview">{{thread.lastMessage.text}}</small>
    </div>
    <a (click)="clicked($event)" class="div-link">Select</a>
  </div>
  `
})
export class ChatThreadComponent implements OnInit{
  @Input() thread: ChatThreat;
  selected = false;

  constructor(public threadService: ChatThreadService) {
  }

  ngOnInit(): void {
    this.threadService.currentThread
      .subscribe( (currentThred: ChatThreat) => {
        this.selected = currentThred && (currentThred.id === this.thread.id);
      });
  }

  clicked(event: any): void{
    this.threadService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
