import { Component, Input } from "@angular/core";

@Component({
  selector: 'inventory-price',
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})

export class InventoryPriceComponent {
  @Input() price: number;
}
