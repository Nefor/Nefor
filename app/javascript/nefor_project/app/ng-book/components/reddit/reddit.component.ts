import { Component } from '@angular/core';

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
  
  <reddit-article></reddit-article>  
  `
})

export class RedditComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}