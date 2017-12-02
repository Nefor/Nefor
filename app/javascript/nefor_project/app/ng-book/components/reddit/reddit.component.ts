import { Component } from '@angular/core';
import { RedditArticle } from "./reddit-article/reddit-article.model";

@Component({
  selector: 'reddit',
  template: `      
  <form class="ui large form segment">
    <h3 class="ui header">Add a Link</h3>
    
    <div class="field">
      <label for="title">Title:</label>
      <input name="title" #newtitle>
    </div>
    <div class="field">
      <label for="link">Link:</label>
      <input name="link" #newlink>
    </div>
    
    <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
      Submit link
    </button>
  </form>

  <div class="ui grid posts">
    <reddit-article *ngFor="let article of sortedArticles()" [article]="article">      
    </reddit-article>
  </div>  
  `
})

export class RedditComponent {
  articles: RedditArticle[];

  constructor(){
    this.articles = [
      new RedditArticle('Angular 2', 'https://angular.io', 3),
      new RedditArticle('Fullstack', 'https://fullstack.io', 2),
      new RedditArticle('Nefor project', 'https://nefor.herokuapp.com', 100),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new RedditArticle(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): RedditArticle[]{
    return this.articles.sort((a: RedditArticle, b: RedditArticle) => b.votes - a.votes);
  }
}
