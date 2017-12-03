import { Component, Input, HostBinding } from "@angular/core";
import { InventoryProduct } from "../inventory-product/inventory-product.model";

@Component({
  selector: 'inventory-product-img',
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})

export class InventoryProductImgComponent {
  @Input() product: InventoryProduct;
  @HostBinding('attr.class') cssClass = 'ui small image';
}
