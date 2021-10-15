import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  bookings : any = [];
  constructor() { }

  addToCart(trip: any) {
    this.bookings.push(trip);
  }

  getItems () {
    return this.bookings;
  }

  clearCart() {
    this.bookings = [];
    return this.bookings;
  }
}

