import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-category-filter',
  templateUrl: './product-category-filter.component.html',
  styleUrls: ['./product-category-filter.component.css'],
})
export class ProductCategoryFilterComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categories: string[] = ['fragrances', 'furniture', 'groceries', 'beauty'];

  selectedCategory: string = '';

  onCategoryChange(): void {
    this.categorySelected.emit(this.selectedCategory.trim());
  }
}
