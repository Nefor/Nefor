import {ChangeDetectionStrategy, Component, ElementRef, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ChatThreat} from "./chat-thread/chat-threat.model";
import {ChatMessage} from "./chat-message/chat-message.model";
import {ChatUser} from "./chat-user/chat-user.model";
import {ChatMessageService} from "../../services/ng-chat/chat-message.service";
import {ChatThreadService} from "../../services/ng-chat/chat-thread.service";
import {ChatUserService} from "../../services/ng-chat/chat-user.service";

@Component({
  selector: 'chat-window',
  template: `
  <div class="chat-window-container">
    <div class="chat-window">
      <div class="panel-container">
        <div class="panel panel-default">
  
          <div class="panel-heading top-bar">
            <div class="panel-title-container">
              <h3 class="panel-title">
                <span class="glyphicon glyphicon-comment"></span>
                Chat - {{currentThread.name}}
              </h3>
            </div>
            <div class="panel-buttons-container">
              <!-- you could put minimize or close buttons here -->
            </div>
          </div>
  
          <div class="panel-body msg-container-base">
            <chat-message
            *ngFor="let message of messages | async"
            [message]="message">
          </chat-message>
        </div>
  
        <div class="panel-footer">
          <div class="input-group">
            <input type="text"
            class="chat-input"
            placeholder="Write your message here..."
            (keydown.enter)="onEnter($event)"
            [(ngModel)]="draftMessage.text" />
            <span class="input-group-btn">
              <button class="btn-chat"
              (click)="onEnter($event)"
              >Send</button>
            </span>
          </div>
        </div>
  
      </div>
    </div>
   </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: ChatThreat;
  draftMessage: ChatMessage;
  currentUser: ChatUser;

  constructor(public messageService: ChatMessageService,
              public threadService: ChatThreadService,
              public userService: ChatUserService,
              public el: ElementRef) {
  }

  ngOnInit(): void {
    this.messages = this.threadService.currentThreadMessages;
    this.draftMessage = new ChatMessage();

    this.threadService.currentThread.subscribe(
      (thread: ChatThreat) => {
        this.currentThread = thread;
      });
    this.userService.currentUser
      .subscribe(
        (user: ChatUser) => {
          this.currentUser = user;
        });
    this.messages
      .subscribe(
        (messages: Array<ChatMessage>) => {
          setTimeout(() => {
            this.scrollToBottom();
          });
        });
  }

  sendMessage(): void {
    const m: ChatMessage = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messageService.addMessage(m);
    this.draftMessage = new ChatMessage();
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

}
