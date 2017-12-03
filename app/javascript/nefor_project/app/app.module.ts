import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    InventoryProductDepartmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
