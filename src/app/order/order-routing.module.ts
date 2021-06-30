import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrderComponent } from './place-order/place-order.component';
import {ShowOrderComponent} from './show-order/show-order.component'
const routes: Routes = [
  {
    path: 'show', component: ShowOrderComponent 
  },
  {
    path: 'place', component: PlaceOrderComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
