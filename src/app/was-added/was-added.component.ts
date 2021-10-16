import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trips } from '../trips'
import { CartService } from '../cart.service';
@Component({
  selector: 'was-added',
  templateUrl: './was-added.component.html',
  styleUrls: ['./was-added.component.css']
})
export class WasAddedComponent implements OnInit {
  trips = trips;
  summe : number = 0;
  //route = new ActivatedRoute(); private route: ActivatedRoute, private CS: CartService
  constructor() { }
  /*addToCart(trip: any) {
    alert("Trip booked");
    this.CS.addToCart(trip);
  }*/
  plus(a:any) {
    a.counter ++;
  }

  ngOnInit(): void {
    for (let val of trips) {
      if (val.counter>0) {
        this.summe += val.price;
      }
    }
  }
/* this.route.paramMap.subscribe(params => {
      let id: any = params.get("id");
      this.trip = trips[id];
      console.log(this.trip);
    });}
*/
  }