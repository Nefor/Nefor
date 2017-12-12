import {Injectable} from "@angular/core";
import * as _ from 'lodash';
import {Observable} from "rxjs/Observable";
import {ChatThreat} from "../../components/ng-chat/chat-thread/chat-threat.model";
import {ChatMessageService} from "./chat-message.service";
import {ChatMessage} from "../../components/ng-chat/chat-message/chat-message.model";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs'

@Injectable()
export class ChatThreadService {
  threads: Observable<{[key: string]: ChatThreat}>;
  orderedThreads: Observable<ChatThreat[]>;
  currentThread: Subject<ChatThreat> = new BehaviorSubject<ChatThreat>(new ChatThreat());
  currentThreadMessages: Observable<ChatMessage[]>;

  constructor(public messageService: ChatMessageService) {
    this.threads = messageService.messages
      .map((messages: ChatMessage[]) => {
        const threads: {[key: string]: ChatThreat} = {};
        messages.map((message: ChatMessage) => {
          threads[message.thread.id] = threads[message.thread.id] || message.thread;

          const messagesThread: ChatThreat = threads[message.thread.id];
          if (!messagesThread.lastMessage || messagesThread.lastMessage.sentAt < message.sentAt) {
            messagesThread.lastMessage = message;
          }
        });
        return threads;
      });

    this.orderedThreads = this.threads
      .map((threadGroups: {[key: string]: ChatThreat}) => {
        const threads: ChatThreat[] = _.values(threadGroups);
        return _.sortBy(threads, (t: ChatThreat) => t.lastMessage.sentAt).reverse();
      });

    this.currentThread.subscribe(this.messageService.markThreadAsRead);

    this.currentThreadMessages = this.currentThread
      .combineLatest(messageService.messages,
        (currentThread: ChatThreat, messages: ChatMessage[]) => {
        if (this.currentThread && messages.length > 0) {
          return _.chain(messages)
            .filter((message: ChatMessage) =>
              (message.thread.id === currentThread.id))
            .map((message: ChatMessage) => {
              message.isRead = true;
              return message; })
            .value();
        } else {
          return [];
        }
    });
  }

  setCurrentThread(newThread: ChatThreat): void {
    this.currentThread.next(newThread);
  }
}

export const chatThreadsServiceInjectables: Array<any> = [
  ChatThreadService
];
