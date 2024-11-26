import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-rating-filter',
  templateUrl: './product-rating-filter.component.html',
  styleUrls: ['./product-rating-filter.component.css'],
})
export class ProductRatingFilterComponent implements OnInit {
  rating: number = 0; // Store selected rating
  stars: boolean[] = [false, false, false, false, false]; // Array to track star states

  @Output() ratingSelected: EventEmitter<number> = new EventEmitter<number>(); // EventEmitter to send rating to parent

  constructor() {}

  ngOnInit(): void {}

  selectStar(index: number) {
    this.rating = index + 1; // Set rating based on selected star
    this.updateStars(); // Update star states

    this.ratingSelected.emit(this.rating); // Emit the selected rating to the parent component
  }

  updateStars() {
    for (let i = 0; i < 5; i++) {
      this.stars[i] = i < this.rating; // Set star as selected or unselected
    }
  }
}
