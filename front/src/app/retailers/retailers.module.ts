import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RetailerComponent } from './retailer/retailer.component';
import { RetailerListComponent } from './retailer-list/retailer-list.component';
import { RetailerDetailComponent } from './retailer-detail/retailer-detail.component';
import { RetailerFormComponent } from './retailer-form/retailer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RetailerComponent, RetailerListComponent, RetailerDetailComponent, RetailerFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RetailersModule { }
