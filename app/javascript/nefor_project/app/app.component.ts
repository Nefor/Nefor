import { Component } from '@angular/core';

@Component({
  selector: 'nefor-project',
  template: `    
  <h1>Hello {{name}}</h1>
  <!--<reddit></reddit>-->
  <!--<inventory-app></inventory-app>  -->
  <!--<ng-book-form></ng-book-form>  -->
  <!--<di></di>-->
  <simple-http></simple-http>
  `
})
export class AppComponent {
  name: string = 'Creator!';
}
