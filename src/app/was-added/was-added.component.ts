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
 trip : any;

  constructor(private route : ActivatedRoute, private CS: CartService) { } 

  addToCart(trip:any) {
    alert("Your Trip to " + trip.destination + " was booked!");
    this.CS.addToCart(trip);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : any = params.get('id');
      this.trip = trips[id];
    });
  }

}