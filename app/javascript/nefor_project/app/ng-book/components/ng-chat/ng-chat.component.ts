import {Component, Inject} from "@angular/core";
import {ChatExampleData} from "./ng-chat-example-data";
import {ChatMessageService} from "../../services/ng-chat/chat-message.service";
import {ChatThreadService} from "../../services/ng-chat/chat-thread.service";
import {ChatUserService} from "../../services/ng-chat/chat-user.service";

@Component({
  selector: 'ng-chat',
  template: `
  <div>
    <div>
      <!--<chat-nav-bar></chat-nav-bar>-->
      <div class="container">
        <chat-threads></chat-threads>
        <chat-window></chat-window>
      </div>
    </div>
  </div>
  `
})
export class NgChatComponent {
  constructor(public messagesService: ChatMessageService,
              public  threadService: ChatThreadService,
              public userService: ChatUserService) {
    ChatExampleData.init(messagesService, threadService, userService);
  }
}
