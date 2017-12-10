import {Component, OnInit} from "@angular/core";
import {BankomatService} from "../../services/bankomat.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bankomat',
  template: `
  <button class="btn btn-primary" (click)="putMoneyRequest()">Put Money</button>
  <button class="btn btn-primary" (click)="takeMoneyRequest()">Take Money Back</button>
  <button class="btn btn-primary" (click)="showBalance()">Get Balance</button>
  <div *ngIf="showPutMoneyForm" class="ui raised segment">
    <h2 class="ui header">Insert money:</h2>
    <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">
      <div formGroupName="banknotes" class="col-sm-6">
        <div class="field">
          <label for="1">1 UAH</label>
          <input type="number" placeholder="Enter count" formControlName="1" name="1">  
        </div>
        <div class="field" *ngFor="let denomination of UAH_BANKNOTES">
          <label for="{{denomination}}">{{denomination}} UAH</label>
          <input type="number" placeholder="Enter count" formControlName="{{denomination}}" name="{{denomination}}">  
        </div>
      </div>      
      <div formGroupName="coins" class="col-sm-6">
        <div class="field">
          <label for="1">1 cent</label>
          <input type="number" placeholder="Enter count" formControlName="1" name="1">  
        </div>
        <div class="field" *ngFor="let denomination of UAH_COINS">
          <label for="{{denomination}}">{{denomination}} cent</label>
          <input type="number" placeholder="Enter count" formControlName="{{denomination}}" name="{{denomination}}">  
        </div>
        <div class="field  ">
          <button type="submit" class="ui button">Insert</button>
        </div>
      </div>      
    </form>
  
  </div>
  
  <div *ngIf="showBalanceInfo">
    <div>Banknotes:</div>
    <ul class="">
      <li class="col-sm-4 "
        *ngFor="let banknote of banknotes">{{banknote[0]}} UAH : {{banknote[1]}} available</li>
    </ul>
    <div>Coins:</div>
    <ul class="">
      <li class="col-sm-4 "
        *ngFor="let coin of coins">{{coin[0]}} Cent : {{coin[1]}} available</li>
    </ul>
    <div>Total: {{total}} UAH
      <button class="btn btn-small btn-default" (click)="closeInfo()">OK</button>
    </div>
  </div>
  `
})
export class BankomatComponent implements OnInit{
  UAH_BANKNOTES = ['2', '5', '10', '20', '50', '100', '200', '500'];
  UAH_COINS = ['2', '5', '10', '25', '50'];
  showBalanceInfo: boolean;
  showTakeMoneyForm: boolean;
  showPutMoneyForm: boolean;

  banknotes: Object;
  coins: Object;
  total: any;
  myForm: FormGroup;
  banknotesGroup: FormGroup;
  coinsGroup: FormGroup;

  constructor(private service: BankomatService,fb: FormBuilder) {
    this.banknotesGroup = fb.group({
      '1': ['']
    });
    for (let banknote of this.UAH_BANKNOTES) {
      this.banknotesGroup.addControl(banknote, new FormControl(''));
    }
    // console.log(this.banknotesGroup);
    this.coinsGroup = fb.group({
      '1': ['']
    });
    for (let coin of this.UAH_COINS) {
      this.coinsGroup.addControl(coin, new FormControl(''));
    }
    // console.log(this.coinsGroup);
    this.myForm = fb.group({
      banknotes: this.banknotesGroup,
      coins: this.coinsGroup
    });
    console.log(this.myForm);
  }

  ngOnInit(): void {
    this.showBalanceInfo = false;
    this.showTakeMoneyForm = false;
    this.showPutMoneyForm = true;
  }

  putMoneyRequest(): void {
    this.showPutMoneyForm = true;
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

  onSubmit(form: any): void {
    console.log(form);
  }
}
