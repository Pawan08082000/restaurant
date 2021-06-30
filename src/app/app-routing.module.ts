import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //this is for lazy loading
    path: 'home',
    loadChildren: () =>
      import('./global/global.module').then((m) => m.GlobalModule),
  },
  {
    //this is for lazy loading
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
