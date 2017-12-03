import { Component, Input } from "@angular/core";
import { InventoryProduct } from "../inventory-product/inventory-product.model";

@Component({
  selector: 'inventory-product-department',
  template: `
  <div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
      <a href="#">{{ name }}</a>
      <span>{{ i < (product.department.length-1) ? '>' : '' }}</span>
    </span>
  </div>
  `
})

export class InventoryProductDepartmentComponent {
  @Input() product: InventoryProduct;
}