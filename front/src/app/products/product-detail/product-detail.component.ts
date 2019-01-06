import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  formulario: FormGroup;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.activatedRoute.snapshot.params.productId;
    this.productService.getDetail(productId).subscribe(products => {this.product = products.product, console.log(products)});

    this.formulario = new FormGroup({
      Email: new FormControl(null),
      ProductId: new FormControl(null)
    })

  }


  sendEmail()
  {
      const form = this.formulario.value;
      const fd = new FormData();
      fd.append('Email', form.Email);
      fd.append('ProductId', this.product.id);

      this.productService.sendEmail(fd).subscribe(data => alert("email sent successfully!"));
      
  }


}
