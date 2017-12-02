import { Component } from '@angular/core';

@Component({
  selector: 'nefor-project',
  template: `<h1>Hello {{name}}</h1>
  <reddit></reddit>`
})
export class AppComponent {
  name: string = 'Creator!';
}
