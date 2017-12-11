import {uuid} from "../../../util/uuid";
import {ChatMessage} from "../chat-message/chat-message.model";

export class ChatThreat {
  id: string;
  lastMessage: ChatMessage;
  name: string;
  avatarSrc: string;

  constructor(id?: string,
              name?: string,
              avatarSrc?: string) {
    this.id = id || uuid();
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}
