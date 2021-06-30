import { OrderService } from 'src/services/order.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private orderService:OrderService) { }
numOfItems;

  ngOnInit(): void {
    this.numOfItems = this.orderService.numberOfItems()
  }

}
