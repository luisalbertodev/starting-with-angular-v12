import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '@app/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[];

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.baseUrl}/products/${id}`);
  }

  createdProduct(product: Product) {
    return this.http.post(`${environment.baseUrl}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.baseUrl}/products`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete<Product>(`${environment.baseUrl}/products/${id}`);
  }
}
