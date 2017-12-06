import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'simple-http',
  template: `
  <h2>Basic request</h2>
  <button type="button" (click)="makeRequest()">Make request</button>
  <div *ngIf="loading">loading...</div>
  <pre>{{ data | json }}</pre>  
  `
})

export class SimpleHttpComponent {
  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) { }

  makeRequest(): void {
    this.loading = true;
    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res) => {
        this.data = res
        this.loading = false;
      });
  }
}