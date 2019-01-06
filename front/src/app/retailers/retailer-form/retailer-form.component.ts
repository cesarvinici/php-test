import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RetailerService } from '../retailer/retailer.service';

@Component({
  selector: 'app-retailer-form, base64-upload',
  templateUrl: './retailer-form.component.html',
  styleUrls: ['./retailer-form.component.css']
})
export class RetailerFormComponent implements OnInit {


  formulario: FormGroup;
  file = null;
  
  HideMsg = true;
  message = null;
  class = null;

  constructor(private retailerService: RetailerService) {
      this.message = '';
      this.class = 'success'
      this.HideMsg = true;
  }
  
  ngOnInit() {
    this.formulario = new FormGroup({
      Name: new FormControl(null),
      WebSite: new FormControl(null),
      Description: new FormControl(null),
      Logo: new FormControl(null)
      

    });
  }

  saveRetailer()
  {   
    this.HideMsg = true;
    const form = this.formulario.value;
    const fd = new FormData();
    fd.append('Name', form.Name);
    fd.append('WebSite', form.WebSite);
    fd.append("Description", form.Description);
    fd.append('Logo', this.file)
    this.retailerService.saveRetailer(fd).subscribe(
      data => {
        this.message = "Retailer added successfully";
        this.HideMsg = false;
        this.class = 'success';
        this.formulario.reset();
      },
      error => {
        this.message = error.message;
        this.HideMsg = false;
        this.class = 'danger'
      }
    );
  }


  onFileChange(event) {
    this.file = event.target.files[0];
  } 

}
