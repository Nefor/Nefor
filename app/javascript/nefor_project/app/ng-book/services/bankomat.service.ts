import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {FormControl} from "@angular/forms";

@Injectable()
export class BankomatService {
  URL_API = 'http://localhost:3000/api';
  // URL_API = 'https://nefor.herokuapp.com/api'
  constructor(public http: HttpClient) {
  }

  getBalance() {
    return this.http.get(this.URL_API + '/money');
  }

  insertMoney(data: any) {
    return this.http.get(this.URL_API + '/insert_money', { params: {'money': JSON.stringify(data)} });
  }
}
