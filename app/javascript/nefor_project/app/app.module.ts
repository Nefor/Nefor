import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from "./ng-book/components/hello-world/hello-world.component";
import { RedditComponent } from "./ng-book/components/reddit/reddit.component";
import { RedditArticleComponent } from "./ng-book/components/reddit/reddit-article/reddit-article.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    RedditComponent,
    RedditArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
