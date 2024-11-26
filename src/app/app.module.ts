import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewProductsComponent } from './view-products/view-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductRatingFilterComponent } from './filters/product-rating-filter/product-rating-filter.component';
import { FormsModule } from '@angular/forms';
import { ProductCategoryFilterComponent } from './filters/product-category-filter/product-category-filter.component';
import { ProductPriceRangeFilterComponent } from './filters/product-price-range-filter/product-price-range-filter.component';
import { ProductSortingComponent } from './filters/product-sorting/product-sorting.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComparisonComponent } from './product-comparison/product-comparison.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductsComponent,
    NavbarComponent,
    FooterComponent,
    ProductDetailDialogComponent,
    ProductRatingFilterComponent,
    ProductCategoryFilterComponent,
    ProductPriceRangeFilterComponent,
    ProductSortingComponent,
    AboutComponent,
    ContactComponent,
    ProductComparisonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
