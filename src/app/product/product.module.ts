import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  declarations: [ProductComponent, ProductsComponent, ProductDetailComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule, MaterialModule],
})
export class ProductModule {}
