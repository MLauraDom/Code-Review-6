import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  bookings : any = [];
  constructor() { }

  addToCart(trip: any) {
    if(trip.counter==0){
    this.bookings.push(trip);
    trip.counter = 1;
  } else {
    trip.counter ++;
  }}

  getItems () {
    return this.bookings;
  }

  clearCart() {
    for (let val of this.bookings) {
      val.counter = 0;
    }
    this.bookings = [];
    return this.bookings;
  }
}

