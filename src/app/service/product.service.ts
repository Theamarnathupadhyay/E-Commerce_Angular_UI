import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        return throwError(
          () => new Error('Failed to load products. Please try again later.')
        );
      })
    );
  }
}
