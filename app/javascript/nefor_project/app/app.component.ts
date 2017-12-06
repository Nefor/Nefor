import { Component } from '@angular/core';

@Component({
  selector: 'nefor-project',
  template: `    
  <h1>Hello {{name}}</h1>
  <!--<reddit></reddit>-->
  <!--<inventory-app></inventory-app>  -->
  <!--<ng-book-form></ng-book-form>  -->
  <!--<simple-http></simple-http>-->
  <youtube-search></youtube-search>
  `
})
export class AppComponent {
  name: string = 'Creator!';
}
