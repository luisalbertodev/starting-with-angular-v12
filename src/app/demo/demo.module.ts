import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';

import { DemoComponent } from './components/demo/demo.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, FormsModule, SharedModule],
})
export class DemoModule {}
