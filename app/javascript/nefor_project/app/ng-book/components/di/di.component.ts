import { Component, ReflectiveInjector } from "@angular/core";
import { NgbookUserService } from "../../services/ngbook-user.service";

@Component({
  selector: 'di',
  template: `
  <div>
    <p 
      *ngIf="userName"
      class="welcome">
      Welcome: {{ userName }}!
    </p>
    <button
      (click)="signIn()"
      class="ui button">
      Sign In
    </button>
  </div>
  `
})

export class DiComponent {
  userName: string;
  userService: NgbookUserService;

  constructor(){
    const injector: any = ReflectiveInjector.resolveAndCreate([NgbookUserService]);
    this.userService = injector.get(NgbookUserService);
  }

  signIn() {
    this.userService.setUser({
      name: 'Nefor'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }
}
