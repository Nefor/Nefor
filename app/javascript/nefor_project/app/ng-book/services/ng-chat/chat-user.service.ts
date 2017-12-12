import {Subject} from "rxjs/Subject";
import {ChatUser} from "../../components/ng-chat/chat-user/chat-user.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Injectable} from "@angular/core";

@Injectable()
export class ChatUserService {
  currentUser: Subject<ChatUser> = new BehaviorSubject<ChatUser>(null);

  public setCurrentUser(newUser: ChatUser): void {
    this.currentUser.next(newUser);
  }
}

export const chatUserServiceInjectables: Array<any> = [
  ChatUserService
];
