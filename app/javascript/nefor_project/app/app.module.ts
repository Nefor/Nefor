import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { youtubeSearchInjectables } from "./ng-book/components/youtube-search/youtube-search.injectables";
import { YoutubeSearchComponent } from "./ng-book/components/youtube-search/youtube-search.component";

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
    YoutubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    NgbookUserService,
    youtubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
