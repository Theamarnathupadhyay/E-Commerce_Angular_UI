import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRatingFilterComponent } from './product-rating-filter.component';

describe('ProductRatingFilterComponent', () => {
  let component: ProductRatingFilterComponent;
  let fixture: ComponentFixture<ProductRatingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRatingFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRatingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
