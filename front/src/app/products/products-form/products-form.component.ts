import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product/product.service';
import { RetailerService } from 'src/app/retailers/retailer/retailer.service';
import { stringify } from '@angular/core/src/render3/util';
import { isNumber } from 'util';
import { empty } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

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
      const errors = []
      this.HideMsg = true;
      const form = this.formulario.value;
      const fd = new FormData();
      if(form.name != null){
        fd.append('name', form.name);

      }else{
        errors.push('Name is Required!');
      }

      if(form.price != null && !isNaN(parseFloat(form.price))){
        fd.append('price', form.price);
      }else{
        errors.push('Price must be numeric!');
      }

      if(form.retailer_id != null){
        fd.append('retailer_id', form.retailer_id);
      }else{
        errors.push("You must inform a Retailer");
      }
      

      if(this.file){
        fd.append('image', this.file)
      }else{
        errors.push("You must attatch one image!");
      }

      if(errors.length){
        console.log(errors)
        this.message = errors
        this.HideMsg = false;
        this.class = 'danger'
        return null;
      }else{
        this.HideMsg = true;
      }
      
      fd.append("description", form.description);
      
      this.productService.saveProduct(fd).subscribe(
        data => {
          this.message = ["Product added successfully"];
          this.class = 'success';
          this.HideMsg = false;          
          this.formulario.reset();
          this.file = null;
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
