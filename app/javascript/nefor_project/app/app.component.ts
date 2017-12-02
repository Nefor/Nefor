import { Component } from '@angular/core';

@Component({
  selector: 'nefor-project',
  template: `<h1>Hello {{name}}</h1>
  <hello-world></hello-world>`
})
export class AppComponent {
  name: string = 'Creator!';
}
