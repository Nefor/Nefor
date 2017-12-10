import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BankomatService {
  URL_API = 'http://localhost:3000/api/money'
  // URL_API = 'https://nefor.herokuapp.com/api/money'
  constructor(public http: HttpClient) {
  }

  getBalance() {
    return this.http.get(this.URL_API);
  }
}
