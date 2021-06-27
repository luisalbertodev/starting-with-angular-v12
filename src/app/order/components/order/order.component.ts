import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Product } from '@app/product.model';
import { CartService } from '@app/core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$.pipe(
      map((products: []) => {
        console.log({ products });
        const distintos = [...new Set(products)];
        return distintos;
      })
    );
  }

  ngOnInit(): void {}
}
