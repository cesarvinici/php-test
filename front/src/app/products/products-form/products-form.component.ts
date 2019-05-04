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
       name: new FormControl(null),
       price: new FormControl(null),
       image: new FormControl(null),
       retailer_id: new FormControl(null),
       description: new FormControl(null),
    });
   
    
  }

  saveProduct()
  {
      this.HideMsg = true;
      const form = this.formulario.value;
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('price', form.price);
      fd.append('retailer_id', form.retailer_id);
      fd.append("description", form.description);
      fd.append('image', this.file)
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
    this.retailerService.getRetailers().subscribe(retailers => this.retailers = retailers['retailers'], error => error);
  }


  onFileChange(event) {
    this.file = event.target.files[0];
  } 

}
