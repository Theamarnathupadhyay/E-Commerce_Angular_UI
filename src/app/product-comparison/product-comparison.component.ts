import { Component, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-comparison',
  templateUrl: './product-comparison.component.html',
  styleUrls: ['./product-comparison.component.css']
})
export class ProductComparisonComponent {
  @Input() products: Product[] = []; // Array of products to compare
}
