import {Component, Input} from "@angular/core";

@Component({
  selector: 'tab',
  template: `
  <div class="ui bottom attached tab segment"
    [class.active]="active">
    <ng-content></ng-content>
  </div>
  
  `
})
export class ContentTabComponent {
  @Input() title: string;
  active = false;
  name: string;
}
