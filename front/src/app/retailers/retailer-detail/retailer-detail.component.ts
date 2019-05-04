import { Component, OnInit } from '@angular/core';
import { Retailer } from '../retailer/retailer';
import { RetailerService } from '../retailer/retailer.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-retailer-detail',
  templateUrl: './retailer-detail.component.html',
  styleUrls: ['./retailer-detail.component.css']
})
export class RetailerDetailComponent implements OnInit {

  retailer: Retailer;
  apiUrl = environment.apiUrl;
  
  constructor(private retailerService: RetailerService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const retailerId = this.activatedRoute.snapshot.params.retailerId;
    this.retailerService.getRetailerDetail(retailerId).subscribe(retailer => {this.retailer = retailer, console.log(retailer)});
  }
}
