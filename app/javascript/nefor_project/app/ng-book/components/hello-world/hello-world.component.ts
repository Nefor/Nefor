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
  
  <tabset>
    <tab title="Tab 1">Tab 1</tab>
    <tab title="Tab 2">Tab 2</tab>
  </tabset>
  `
})

export class HelloWorldComponent {}
