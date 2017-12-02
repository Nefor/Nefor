import { Component, HostBinding } from '@angular/core';
import { RedditArticle } from './reddit-article.model';

@Component({
  selector: 'reddit-article',
  template: `
  <div class="four wide column center aligned votes">
    <div class="ui statistic">
      <div class="value">
        {{ article.votes }}
      </div>
      <div class="label">
        Points
      </div>
    </div>
  </div>
  <div class="twelve wide column">
    <a class="ui large header" href="{{ article.link }}">
      {{ article.title }}
    </a>
    <ul class="ui big horizontal list voters">
      <li class="item">
        <a href (click)="voteUp()">
          <i class="arrow up icon"></i>
          upvote
        </a>
      </li>
      <li class="item">
        <a href (click)="voteDown()">
          <i class="arrow down icon"></i>
          downvote
        </a>
      </li>
    </ul>
  </div>  
  `
})

export class RedditArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  article: RedditArticle;

  constructor() {
    this.article = new RedditArticle('Angular 2', 'https://angular.io', 10);
  }

  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }
}
