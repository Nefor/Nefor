import {ChatUser} from "../chat-user/chat-user.model";
import {ChatThreat} from "../chat-thread/chat-threat.model";
import {uuid} from "../../../util/uuid";

export class ChatMessage {
  id: string;
  sentAt: Date;
  isRead: boolean;
  author: ChatUser;
  text: string;
  thread: ChatThreat;

  constructor(obj?: any) {
    this.id = obj && obj.id || uuid();
    this.sentAt = obj && obj.sentAt || new Date();
    this.isRead = obj && obj.isRead || false;
    this.author = obj && obj.author || null;
    this.text = obj && obj.text || null;
    this.thread = obj && obj.thread || null;
  }
}
