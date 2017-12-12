import { ChatMessageService } from "./chat-message.service";
import {ChatUser} from "../../components/ng-chat/chat-user/chat-user.model";
import {ChatThreat} from "../../components/ng-chat/chat-thread/chat-threat.model";
import {ChatMessage} from "../../components/ng-chat/chat-message/chat-message.model";

describe('ChatMessageService', () => {
  it('should test', () => {
    const user: ChatUser = new ChatUser('Nefor', '');
    const thread: ChatThreat = new ChatThreat('t1', 'Nefor', '');
    const m1: ChatMessage = new ChatMessage({
      author: user,
      text: 'Hi!',
      thread: thread
    });
    const m2: ChatMessage = new ChatMessage({
      author: user,
      text: 'Bye!',
      thread: thread
    });

    const messageService: ChatMessageService = new ChatMessageService();

    messageService.newMessages
      .subscribe( (message: ChatMessage) => {
        console.log('=> newMessages: ' + message.text);
      });

    messageService.messages
      .subscribe((messages: ChatMessage[]) => {
        console.log('=> messages: ' + messages.length);
      });

    messageService.addMessage(m1);
    messageService.addMessage(m2);
  });
});
