import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<p>Hello, people!</p>
  <div class="ui message" popup message="Wow!">
    <div class="header">
      Learning Directives!
    </div>
  </div>
  `
})

export class HelloWorldComponent {}
