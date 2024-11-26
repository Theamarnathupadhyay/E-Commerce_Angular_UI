import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.css'],
})
export class ProductDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  getStars(rating: number) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push({ filled: 1 });
      } else if (rating > i) {
        stars.push({ filled: 0.5 });
      } else {
        stars.push({ filled: 0 });
      }
    }
    return stars;
  }
}
