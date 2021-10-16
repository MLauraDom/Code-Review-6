import { Component, OnInit } from '@angular/core';
import { trips } from "../trips";

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  trips = trips;

  constructor() { }

  plus(a:any) {
    a.counter ++;
  }
  
  ngOnInit(): void {
  }

}
