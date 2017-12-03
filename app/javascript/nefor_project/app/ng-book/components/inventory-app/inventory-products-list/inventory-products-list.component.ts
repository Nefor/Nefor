import { Component, Input, Output, EventEmitter } from "@angular/core";
import { InventoryProduct } from "../inventory-product/inventory-product.model";

@Component({
  selector: 'inventory-products-list',
  template: `
  <div class="ui items">
    <inventory-product
      *ngFor="let product of productList"
      [product]="product"
      (click)="clicked(product)"
      [class.selected]="isSelected(product)">      
    </inventory-product>
  </div>
  `
})

export class InventoryProductsListComponent {
  @Input() productList: InventoryProduct[];
  @Output() onProductSelected: EventEmitter<InventoryProduct>;
  private currentProduct: InventoryProduct;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: InventoryProduct): void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: InventoryProduct): boolean{
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
