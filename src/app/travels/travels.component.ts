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

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
}
