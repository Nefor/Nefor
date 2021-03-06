import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { youtubeSearchInjectables } from "./ng-book/components/youtube-search/youtube-search.injectables";
import { YoutubeSearchComponent } from "./ng-book/components/youtube-search/youtube-search.component";
import { RouterModule, Routes } from "@angular/router";
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from "@angular/common";
import {chatUserServiceInjectables} from "./ng-book/services/ng-chat/chat-user.service";
import {chatMessagesServiceInjectables} from "./ng-book/services/ng-chat/chat-message.service";
import {chatThreadsServiceInjectables} from "./ng-book/services/ng-chat/chat-thread.service";
import { PopupDirective } from "./ng-book/directives/popup.directive";
import {ContentTabsetComponent} from "./ng-book/components/tabs/content-tabset.component";
import {ContentTabComponent} from "./ng-book/components/tabs/content-tab.component";
import { AppComponent } from './app.component';
import { HelloWorldComponent } from "./ng-book/components/hello-world/hello-world.component";
import { RedditComponent } from "./ng-book/components/reddit/reddit.component";
import { RedditArticleComponent } from "./ng-book/components/reddit/reddit-article/reddit-article.component";
import { InventoryAppComponent } from "./ng-book/components/inventory-app/inventory-app.component";
import { InventoryProductComponent } from "./ng-book/components/inventory-app/inventory-product/inventory-product.component";
import { InventoryProductsListComponent } from "./ng-book/components/inventory-app/inventory-products-list/inventory-products-list.component";
import { InventoryProductImgComponent } from "./ng-book/components/inventory-app/inventory-product-img/inventory-product-img.component";
import { InventoryPriceComponent } from "./ng-book/components/inventory-app/inventory-price/inventory-price.component";
import { InventoryProductDepartmentComponent } from "./ng-book/components/inventory-app/inventory-product-department/inventory-product-department.component";
import { NgBookFormComponent } from "./ng-book/components/ng-book-form/ng-book-form.component";
import { DiComponent } from "./ng-book/components/di/di.component";
import { NgbookUserService } from "./ng-book/services/ngbook-user.service";
import { SimpleHttpComponent } from "./ng-book/components/simple-http/simple-http.component";
import { YoutubeSearchBoxComponent } from "./ng-book/components/youtube-search/youtube-search-box.component";
import { YoutubeSearchResultComponent } from "./ng-book/components/youtube-search/youtube-search-result.component";
import { SpotifyService } from "./ng-book/services/spotify.service";
import { SpotifySearchComponent } from "./ng-book/components/spotify-search/spotify-search.component";
import { BankomatComponent } from "./ng-book/components/bankomat/bankomat.component";
import { BankomatService } from './ng-book/services/bankomat.service';
import {NgChatComponent} from "./ng-book/components/ng-chat/ng-chat.component";
import {ChatThreadsComponent} from "./ng-book/components/ng-chat/chat-thread/chat-threads.component";
import {ChatThreadComponent} from "./ng-book/components/ng-chat/chat-thread/chat-thread.component";
import {ChatWindowComponent} from "./ng-book/components/ng-chat/chat-window.component";
import {ChatMessageComponent} from "./ng-book/components/ng-chat/chat-message/chat-message.component";
import {MessageoComponent} from "./ng-book/components/messageo/messageo.component";

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'static_pages/frontend', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SpotifySearchComponent },
  { path: 'artists/:id', component: HelloWorldComponent },
  { path: 'tracks/:id', component: HelloWorldComponent },
  { path: 'albums/:id', component: HelloWorldComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    RedditComponent,
    RedditArticleComponent,
    InventoryAppComponent,
    InventoryProductComponent,
    InventoryProductsListComponent,
    InventoryProductImgComponent,
    InventoryPriceComponent,
    InventoryProductDepartmentComponent,
    NgBookFormComponent,
    DiComponent,
    SimpleHttpComponent,
    YoutubeSearchBoxComponent,
    YoutubeSearchResultComponent,
    YoutubeSearchComponent,
    SpotifySearchComponent,
    BankomatComponent,
    NgChatComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    PopupDirective,
    MessageoComponent,
    ContentTabsetComponent,
    ContentTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    NgbookUserService,
    youtubeSearchInjectables,
    SpotifyService,
    BankomatService,
    chatUserServiceInjectables,
    chatMessagesServiceInjectables,
    chatThreadsServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
