import { Component, Input, HostBinding } from "@angular/core";
import { InventoryProduct } from "./inventory-product.model";

@Component({
  selector: 'inventory-product',
  template:`
  <inventory-product-img [product]="product"></inventory-product-img>  
  <div class="content">
    <div class="header">{{ product.name }}</div>
    <div class="meta">
      <div class="product-sku">SKU #{{ product.sku }}</div>
    </div>
    <div class="description">
      <inventory-product-department [product]="product"></inventory-product-department>
    </div>
  </div>
  <inventory-price [price]="product.price"></inventory-price>  
  `
})

export class InventoryProductComponent {
  @Input() product: InventoryProduct;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() {}
}
