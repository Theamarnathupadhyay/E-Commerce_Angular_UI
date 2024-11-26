import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-price-range-filter',
  templateUrl: './product-price-range-filter.component.html',
  styleUrls: ['./product-price-range-filter.component.css'],
})
export class ProductPriceRangeFilterComponent implements OnInit {
  @Output() priceRangeSelected = new EventEmitter<{
    min: number;
    max: number;
  }>();

  minPrice: number = 0; // Initial minimum price
  maxPrice: number = 1000; // Initial maximum price

  constructor() {}

  ngOnInit(): void {}

  onPriceChange(): void {
    this.priceRangeSelected.emit({ min: this.minPrice, max: this.maxPrice });
  }
}
