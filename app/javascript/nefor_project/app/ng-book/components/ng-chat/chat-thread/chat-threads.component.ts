import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ChatThreadService} from "../../../services/ng-chat/chat-thread.service";

@Component({
  selector: 'chat-threads',
  template: `
  <div class="row">
    <div class="conversation-wrap">
      <chat-thread
        *ngFor="let thread of threads | async"
        [thread]="thread">
      </chat-thread>
    </div>
  </div>
  `
})
export class ChatThreadsComponent{
  threads: Observable<any>;

  constructor(public threadService: ChatThreadService) {
    this.threads = threadService.orderedThreads;
  }
}
