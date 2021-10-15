import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trips } from '../trips'

@Component({
  selector: 'was-added',
  templateUrl: './was-added.component.html',
  styleUrls: ['./was-added.component.css']
})
export class WasAddedComponent implements OnInit {

  //route = new ActivatedRoute();
  constructor(private route: ActivatedRoute) { }
  trip: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: any = params.get("id");
      this.trip = trips[id];
    });
  }

}