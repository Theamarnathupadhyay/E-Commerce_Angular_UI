import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceRangeFilterComponent } from './product-price-range-filter.component';

describe('ProductPriceRangeFilterComponent', () => {
  let component: ProductPriceRangeFilterComponent;
  let fixture: ComponentFixture<ProductPriceRangeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceRangeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceRangeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
