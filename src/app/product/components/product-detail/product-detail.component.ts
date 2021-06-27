import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '@app/core/services/products/products.service';
import { Product } from '@app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchProduct(params.id);
    });
  }

  fetchProduct(id: string) {
    this.productsService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }
}
