import { Component, EventEmitter } from "@angular/core";
import { InventoryProduct } from "./inventory-product/inventory-product.model";

@Component({
  selector: 'inventory-app',
  template: `
    <div class="inventory-app">
      <inventory-products-list 
        [productList]="products"
        (onProductSelected)="productWasSelected($event)">        
      </inventory-products-list>
    </div>
  `
})

export class InventoryAppComponent {
  products: InventoryProduct[];

  constructor() {
    this.products = [
      new InventoryProduct(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new InventoryProduct(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new InventoryProduct(
        'NICEHAT',
        'A nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product: InventoryProduct): void{
    console.log('Product clicked: ', product);
  }
}
