/* tslint:disable:max-line-length */
import * as moment from 'moment';
import {ChatUser} from "./chat-user/chat-user.model";
import {ChatThreat} from "./chat-thread/chat-threat.model";
import {ChatMessage} from "./chat-message/chat-message.model";
import {ChatMessageService} from "../../services/ng-chat/chat-message.service";
import {ChatThreadService} from "../../services/ng-chat/chat-thread.service";
import {ChatUserService} from "../../services/ng-chat/chat-user.service";

// the person using the app us Juliet
const me: ChatUser      = new ChatUser('Juliet', 'assets/images/avatars/female-avatar-1.png');
const ladycap: ChatUser = new ChatUser('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
const echo: ChatUser    = new ChatUser('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
const rev: ChatUser     = new ChatUser('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
const wait: ChatUser    = new ChatUser('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');

const tLadycap: ChatThreat = new ChatThreat('tLadycap', ladycap.name, ladycap.avatarSrc);
const tEcho: ChatThreat    = new ChatThreat('tEcho', echo.name, echo.avatarSrc);
const tRev: ChatThreat     = new ChatThreat('tRev', rev.name, rev.avatarSrc);
const tWait: ChatThreat    = new ChatThreat('tWait', wait.name, wait.avatarSrc);

const initialMessages: Array<ChatMessage> = [
  new ChatMessage({
    author: me,
    sentAt: moment().subtract(45, 'minutes').toDate(),
    text: 'Yet let me weep for such a feeling loss.',
    thread: tLadycap
  }),
  new ChatMessage({
    author: ladycap,
    sentAt: moment().subtract(20, 'minutes').toDate(),
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    thread: tLadycap
  }),
  new ChatMessage({
    author: echo,
    sentAt: moment().subtract(1, 'minutes').toDate(),
    text: `I\'ll echo whatever you send me`,
    thread: tEcho
  }),
  new ChatMessage({
    author: rev,
    sentAt: moment().subtract(3, 'minutes').toDate(),
    text: `I\'ll reverse whatever you send me`,
    thread: tRev
  }),
  new ChatMessage({
    author: wait,
    sentAt: moment().subtract(4, 'minutes').toDate(),
    text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
    thread: tWait
  }),
];

export class ChatExampleData {
  static init(messagesService: ChatMessageService,
              threadsService: ChatThreadService,
              UsersService: ChatUserService): void {

    // TODO make `messages` hot
    messagesService.messages.subscribe(() => ({}));

    // set "Juliet" as the current user
    UsersService.setCurrentUser(me);

    // create the initial messages
    initialMessages.map( (message: ChatMessage) => messagesService.addMessage(message) );

    threadsService.setCurrentThread(tEcho);

    this.setupBots(messagesService);
  }

  static setupBots(messagesService: ChatMessageService): void {

    // echo bot
    messagesService.messagesForThreadUser(tEcho, echo)
      .forEach( (message: ChatMessage): void => {
          messagesService.addMessage(
            new ChatMessage({
              author: echo,
              text: message.text,
              thread: tEcho
            })
          );
        },
        null);


    // reverse bot
    messagesService.messagesForThreadUser(tRev, rev)
      .forEach( (message: ChatMessage): void => {
          messagesService.addMessage(
            new ChatMessage({
              author: rev,
              text: message.text.split('').reverse().join(''),
              thread: tRev
            })
          );
        },
        null);

    // waiting bot
    messagesService.messagesForThreadUser(tWait, wait)
      .forEach( (message: ChatMessage): void => {

          let waitTime: number = parseInt(message.text, 10);
          let reply: string;

          if (isNaN(waitTime)) {
            waitTime = 0;
            reply = `I didn\'t understand ${message.text}. Try sending me a number`;
          } else {
            reply = `I waited ${waitTime} seconds to send you this.`;
          }

          setTimeout(
            () => {
              messagesService.addMessage(
                new ChatMessage({
                  author: wait,
                  text: reply,
                  thread: tWait
                })
              );
            },
            waitTime * 1000);
        },
        null);


  }
}
