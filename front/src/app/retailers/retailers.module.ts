import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RetailerComponent } from './retailer/retailer.component';
import { RetailerListComponent } from './retailer-list/retailer-list.component';
import { RetailerDetailComponent } from './retailer-detail/retailer-detail.component';
import { RetailerFormComponent } from './retailer-form/retailer-form.component';

@NgModule({
  declarations: [RetailerComponent, RetailerListComponent, RetailerDetailComponent, RetailerFormComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class RetailersModule { }
