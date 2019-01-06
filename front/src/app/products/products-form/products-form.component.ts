import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product/product.service';
import { RetailerService } from 'src/app/retailers/retailer/retailer.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {


  formulario: FormGroup;
  retailers = null;
  HideMsg = true;
  file = null;
  message = null;
  class = null;



  constructor(private productService: ProductService, private retailerService: RetailerService) {

    this.getRetailers();
    this.HideMsg = true;


   }

  ngOnInit() {

    this.formulario = new FormGroup({
       Name: new FormControl(null),
       Price: new FormControl(null),
       Image: new FormControl(null),
       retailer_id: new FormControl(null),
       Description: new FormControl(null),
    });
   
    
  }

  saveProduct()
  {
      this.HideMsg = true;
      const form = this.formulario.value;
      const fd = new FormData();
      fd.append('Name', form.Name);
      fd.append('Price', form.Price);
      fd.append('retailer_id', form.retailer_id);
      fd.append("Description", form.Description);
      fd.append('Image', this.file)
      this.productService.saveProduct(fd).subscribe(
        data => {
          this.message = "Product added successfully";
          this.class = 'success';
          this.HideMsg = false;          
          this.formulario.reset();
        },
        error => {
          this.message = error.message;
          this.HideMsg = false;
          this.class = 'danger'
        }
      );
  }

  getRetailers()
  {
    this.retailerService.getRetailers().subscribe(retailers => this.retailers = retailers.retailers, error => error);
  }


  onFileChange(event) {
    this.file = event.target.files[0];
  } 

}
