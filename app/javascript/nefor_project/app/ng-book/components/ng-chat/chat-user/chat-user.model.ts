import {uuid} from "../../../util/uuid";

export class ChatUser {
  id: string;

  constructor(public name: string,
              public avatarSrc: string) {
    this.id = uuid();
  }
}
