import { Injectable } from "@angular/core";

@Injectable()
export class NgbookUserService {
  user: any;

  setUser(newUser) {
    this.user = newUser
  }

  getUser(): any{
    return this.user;
  }
}
