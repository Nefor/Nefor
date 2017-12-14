import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<p>Hello, people!</p>
  <div class="ui message" popup message="Wow!">
    <div class="header">
      Learning Directives!
    </div>
  </div>
  
  <div app-message header="My message">
    This is the content of the message
  </div>
  `
})

export class HelloWorldComponent {}
