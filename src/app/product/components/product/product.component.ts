import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Product } from '@app/product.model';
import { CartService } from '@app/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClick: EventEmitter<string>;

  today: Date;

  constructor(private cartService: CartService) {
    this.productClick = new EventEmitter();
    this.today = new Date();
    console.log('1 constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2 ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('3 ngOnInit');
  }

  ngDoCheck() {
    console.log('4 ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5 ngOnDestroy');
  }

  addCart() {
    console.log('added cart');
    this.cartService.addCart(this.product);
    // this.productClick.emit(this.product.id);
  }
}
