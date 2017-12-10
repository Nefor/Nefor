import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BankomatService} from "../../services/bankomat.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'bankomat',
  template: `
  <button class="btn btn-primary" (click)="putMoneyRequest()">Put Money</button>
  <button class="btn btn-primary" (click)="takeMoneyRequest()">Take Money Back</button>
  <button class="btn btn-primary" (click)="showBalance()">Get Balance</button>
  
  <div *ngIf="showBalanceInfo">
    <div>Banknotes:</div>
    <ul class="list-group">
      <li class="col-sm-4 list-group-item"
        *ngFor="let banknote of banknotes">{{banknote[0]}} UAH : {{banknote[1]}} available</li>
    </ul>
    <div>Coins:</div>
    <ul class="list-group">
      <li class="col-sm-4 list-group-item"
        *ngFor="let coin of coins">{{coin[0]}} Cent : {{coin[1]}} available</li>
    </ul>
    <div>Total: {{total}} UAH
      <button class="btn btn-small btn-default" (click)="closeInfo()">OK</button>
    </div>
  </div>
  `
})
export class BankomatComponent implements OnInit{
  showBalanceInfo: boolean;
  showRequestMoneyForm: boolean;
  showPushMoneyForm: boolean;

  banknotes: Object;
  coins: Object;
  total: any;

  constructor(private service: BankomatService) {
  }

  ngOnInit(): void {
    this.showBalanceInfo = false;
    this.showRequestMoneyForm = false;
    this.showPushMoneyForm = false;
  }

  putMoneyRequest(): void {
    console.log('putMoneyRequest()');
  }

  takeMoneyRequest(): void {
    console.log('takeMoneyRequest()');
  }

  showBalance(): void {
    this.service.getBalance()
      .subscribe(res => {
        this.banknotes = res["banknotes"];
        this.coins = res["coins"];
        this.total = res["total"];
        this.showBalanceInfo = true;
      });
  }

  closeInfo(): void {
    this.showBalanceInfo = false;
  }
}
