import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ShowOrderComponent } from './show-order/show-order.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowOrderComponent,
    PlaceOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, ReactiveFormsModule
  ]
})
export class OrderModule { }
