import { ContentTabComponent } from "./content-tab.component";
import {AfterContentInit, Component, ContentChildren, QueryList} from "@angular/core";

@Component({
  selector: 'tabset',
  template: `
  <div class="ui top attached tabular menu">
    <a *ngFor="let tab of tabs"
      class="item"
      [class.active]="tab.active"
      (click)="setActive(tab)">
      {{ tab.title }}
    </a>
  </div>
  <ng-content></ng-content>
  `
})
export class ContentTabsetComponent implements AfterContentInit {
  @ContentChildren(ContentTabComponent) tabs: QueryList<ContentTabComponent>;

  ngAfterContentInit(): void {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: ContentTabComponent): void {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
}
