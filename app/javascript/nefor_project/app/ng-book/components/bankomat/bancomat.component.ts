import {Component} from "@angular/core";

@Component({
  selector: 'bankomat',
  template: `
  <button class="btn btn-primary" (click)="putMoneyRequest()">Put Money</button>
  <button class="btn btn-primary" (click)="takeMoneyRequest()">Take Money Back</button>
  <button class="btn btn-primary" (click)="showBalance()">Get Balance</button>
  `
})
export class BancomatComponent {
  putMoneyRequest(): void {
    console.log('putMoneyRequest()');
  }

  takeMoneyRequest(): void {
    console.log('takeMoneyRequest()');
  }

  showBalance(): void {
    console.log('showBalance()');
  }
}
