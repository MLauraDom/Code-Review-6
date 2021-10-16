import { Component, OnInit } from '@angular/core';
import { trips } from '../trips'
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  trips = trips;
  bookings : any;
  summe : number = 0;
  checkoutForm;
  
  constructor(private CS:CartService, private  formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.bookings = this.CS.getItems();
    for (let val of this.bookings) {
      this.summe += val.counter*val.price;
    }
  }

  onSubmit(customerData:any) {
    console.warn('Your order has been submitted', customerData);
    if (this.summe>0){
    alert("Thank you for your Booking, " + customerData.name);
    } else {
    alert("You didn`t booked a trip yet!");
    }
    this.bookings = this.CS.clearCart();
    this.checkoutForm.reset();
  }
}


