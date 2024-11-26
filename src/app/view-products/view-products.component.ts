import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';
import { Product } from '../product-comparison/product.model';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  productList: any[] = [];
  allProducts: any[] = [];
  isLoading = false;
  allLoaded = false;
  visibleCount = 10;
  selectedRating: number = 0;
  selectedCategory: string = '';
  selectedPriceRange: { min: number; max: number } = { min: 0, max: 1000 };
  selectedSort: string = '';
  private debounceTimeout: any;
  errorMessage: string = '';
  selectedProducts: Product[] = [];
  @Input() products: Product[] = [];
  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.productService.getProducts().subscribe(
      (data) => {
        if (Array.isArray(data.products)) {
          this.allProducts = data.products;
          this.updateVisibleProducts();
        } else {
          console.error('API response is invalid');
          this.errorMessage = 'Invalid response from the server.';
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.errorMessage =
          error.message || 'An error occurred while loading products.';
        this.isLoading = false;
      }
    );
  }

  updateVisibleProducts(): void {
    let filteredProducts = this.allProducts;

    // Reset error message before applying filters
    this.errorMessage = '';

    // Filter by category
    if (this.selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category &&
          product.category.trim().toLowerCase() ===
            this.selectedCategory.trim().toLowerCase()
      );
    }

    // Filter by rating
    if (this.selectedRating > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= this.selectedRating
      );
    }

    // Filter by price range
    if (
      this.selectedPriceRange.min != null &&
      this.selectedPriceRange.max != null
    ) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= this.selectedPriceRange.min &&
          product.price <= this.selectedPriceRange.max
      );
    }

    // Handle sorting
    if (this.selectedSort) {
      this.handleSortChange(this.selectedSort, filteredProducts);
    }

    // Check if no products match the selected filters
    if (filteredProducts.length === 0) {
      // If no filtered products are found, set error message
      this.errorMessage =
        'No matching products found with the selected filters.';
    }

    // Update the product list with filtered products, and slice based on visible count
    this.productList = filteredProducts.slice(0, this.visibleCount);

    // Determine if all products are loaded
    this.allLoaded = this.visibleCount >= filteredProducts.length;
  }

  loadMore(): void {
    if (this.isLoading || this.allLoaded) return;
    this.isLoading = true;
    setTimeout(() => {
      this.visibleCount += 6;
      this.updateVisibleProducts();
      this.isLoading = false;
    }, 500);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    this.debounceTimeout = setTimeout(() => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.loadMore();
      }
    }, 200);
  }

  openProductDetail(product: any): void {
    this.dialog.open(ProductDetailDialogComponent, { data: { product } });
  }

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

  onRatingSelected(rating: number) {
    this.selectedRating = rating;
    this.updateVisibleProducts();
  }

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.updateVisibleProducts();
  }

  onPriceRangeSelected(priceRange: { min: number; max: number }): void {
    this.selectedPriceRange = priceRange;
    this.updateVisibleProducts();
  }

  handleSortChange(
    sortOption: string,
    filteredProducts: any[] = this.productList
  ): void {
    switch (sortOption) {
      case 'priceLowToHigh':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'nameAZ':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameZA':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    this.productList = filteredProducts;
  }

  onSortChange(sortOption: string): void {
    this.selectedSort = sortOption;
    this.updateVisibleProducts();
  }

  selectProduct(product: Product) {
    if (this.selectedProducts.length < 3) {
      this.selectedProducts.push(product);
    } else {
      alert('You can only compare up to 3 products.');
    }
  }

  clearComparison() {
    this.selectedProducts = [];
  }
}
