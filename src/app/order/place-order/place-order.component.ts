import { OrderService } from 'src/services/order.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent {
  orderForm = this.fb.group({
    name: [null, Validators.required],
    address: null,
    phone: [null, Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    ],
  });

  hasUnitNumber = false;

  constructor(private router: Router,private fb: FormBuilder, private orderService: OrderService) {}

  onSubmit(): void {
    if(this.orderForm.valid){
    this.orderService.deleteItem()
    alert("Your order places successfully!")
    this.router.navigate(['/home']);
  }}
}
