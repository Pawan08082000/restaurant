import { MenuService } from './../../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from 'src/services/order.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
dishes: any
categories = ["AntiPasti","Insalatone","Pasta","Pizza","Wine"]
  constructor(private menuService : MenuService,private _snackBar: MatSnackBar, private orderService: OrderService) { }

  ngOnInit(): void {
    this.menuService.getJson().subscribe( data =>{
      this.dishes = data
      console.log(data);
    })
  }

  categoryDishes(category:any){
     this.menuService.getJson().subscribe( data =>{
      this.dishes = data.filter(function(record : any){
        return record.Category == category
      })
      console.log(this.dishes);
    })
  }

  selectItem(dish : any){
  
    this.orderService.setItem(dish)
      this._snackBar.open("Item added to cart!", 'OK', {
            duration: 2000,
          });
    
  }
}
