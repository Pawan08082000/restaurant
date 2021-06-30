import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order.service';
@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent implements OnInit {
orders :any;
prices:any;
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orders = JSON.parse(this.orderService.getItem() || '[]')
    this.totlaPrice()
  }

  totlaPrice(){
    var price = 0
    if(this.orders!=[]){
    this.prices = this.orders.map( order => Number(order.Price.match(/\d+/)[0]) 
    )
    this.prices.forEach(a => price += a);
  }
   return price
  }

}
