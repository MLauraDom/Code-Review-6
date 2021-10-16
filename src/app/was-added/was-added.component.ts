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

  constructor() { } 



  plus(a:any) {
    a.counter ++;
  }

  ngOnInit(): void {
    for (let val of trips) {
      if (val.counter>0) {
        this.summe += val.price;
      }
    }
   /* if(this.summe>200){
   if(this.summe>500){
     this.summe = this.summe * 0.8;
   } else {
    this.summe = this.summe * 0.9;
   }
  }*/

  }}