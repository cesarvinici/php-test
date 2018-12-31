import { Component, OnInit } from '@angular/core';
import { Retailer } from '../retailer/retailer';

@Component({
  selector: 'app-retailer-form',
  templateUrl: './retailer-form.component.html',
  styleUrls: ['./retailer-form.component.css']
})
export class RetailerFormComponent implements OnInit {

  retailer: Object;
  constructor() {
    this.retailer = new Object();
   }
  
  ngOnInit() {
  }

  saveRetailer()
  {
    console.log(this.retailer);
    console.log(this.retailer);
  }

}
