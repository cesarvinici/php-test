import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer/retailer.service';
import { ActivatedRoute } from '@angular/router';
import { Retailer } from '../retailer/retailer';

@Component({
  selector: 'app-retailer-list',
  templateUrl: './retailer-list.component.html',
  styleUrls: ['./retailer-list.component.css']
})
export class RetailerListComponent implements OnInit {

  retailers: Retailer[]  = []
  
  constructor(private retailerService: RetailerService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.retailerService.getRetailers().subscribe(retailers => {this.retailers = retailers, console.log(retailers)});
  }

}
