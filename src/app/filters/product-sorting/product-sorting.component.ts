import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-sorting',
  templateUrl: './product-sorting.component.html',
  styleUrls: ['./product-sorting.component.css'],
})
export class ProductSortingComponent {
  selectedSorting: string = ''; // Selected sorting option

  @Output() sortChange = new EventEmitter<string>(); // Emit sorting changes

  onSortingChange(): void {
    this.sortChange.emit(this.selectedSorting); // Emit the selected sorting option
  }
}
