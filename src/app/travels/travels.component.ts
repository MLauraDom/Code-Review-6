import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trips } from '../trips'
import { CartService } from '../cart.service';

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})

export class TravelsComponent implements OnInit {
  trips = trips;

  constructor() { }
  //private route: ActivatedRoute, private CS: CartService
  /*addToCart(trip: any) {
    alert("Trip booked");
    this.CS.addToCart(trip);
  };*/

  plus(a : any) {
    a.counter ++;
  };

  /*pushthis.route.paramMap.subscribe(params => {
    let id: any = params.get("id");
    this.trip = trips[id];
    console.log(this.trip);*/
  ngOnInit(): void {}

 
  }


