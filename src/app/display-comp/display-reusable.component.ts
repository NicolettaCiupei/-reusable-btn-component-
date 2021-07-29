import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Routes} from "@angular/router";

@Component({
  selector: 'app-display-reusable',
  templateUrl: './display-reusable.component.html',
  styleUrls: ['./display-reusable.component.css']
})
export class DisplayReusableComponent implements OnInit {
  title = 'reusable-btn-comp';
  type: string;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
   console.log(this.route);
   this.route.params.subscribe( params => this.type = params.type);
  }

}
