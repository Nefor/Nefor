import {Subject} from "rxjs/Subject";
import {ChatMessage} from "../../components/ng-chat/chat-message/chat-message.model";
import {ChatThreat} from "../../components/ng-chat/chat-thread/chat-threat.model";
import {ChatUser} from "../../components/ng-chat/chat-user/chat-user.model";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/publishReplay';

const initialMessages: ChatMessage[] = [];

interface IChatMessagesOperation extends Function {
  (messages: ChatMessage[]): ChatMessage[];
}

@Injectable()
export class ChatMessageService {
  newMessages: Subject<ChatMessage> = new Subject<ChatMessage>();
  messages: Observable<ChatMessage[]>;
  updates: Subject<any> = new Subject<any>();
  create: Subject<ChatMessage> = new Subject<ChatMessage>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates
      .scan((messages: ChatMessage[],
             operation: IChatMessagesOperation) => {
        return operation(messages);
        },
        initialMessages)
      .publishReplay(1)
      .refCount();

    this.create
      .map(function (message: ChatMessage): IChatMessagesOperation {
        return (messages: ChatMessage[]) => {
          return messages.concat(message);
        };
      })
      .subscribe(this.updates);

    this.newMessages
      .subscribe(this.create);

    this.markThreadAsRead
      .map((thread: ChatThreat) => {
        return (messages: ChatMessage[]) => {
          return messages.map((message: ChatMessage) => {
            if (message.thread.id === thread.id) {
              message.isRead = true;
            }
            return message;
          });
        };
      })
      .subscribe(this.updates);
  }

  addMessage(newMessage: ChatMessage): void {
    this.newMessages.next(newMessage);
  }

  messagesForThreadUser(thread: ChatThreat, user: ChatUser): Observable<ChatMessage> {
    return this.newMessages
      .filter((message: ChatMessage) => {
        return (message.thread.id === thread.id) && (message.author.id !== user.id);
      });
  }
}

export const chatMessagesServiceInjectables: Array<any> = [
  ChatMessageService
];
