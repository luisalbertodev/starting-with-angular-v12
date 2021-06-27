import { Component, OnInit } from '@angular/core';

import { Product } from '@app/product.model';
import { ProductsService } from '@app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: string) {
    console.log(id);
  }

  fetchProducts() {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}
