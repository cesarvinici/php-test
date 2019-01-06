import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RetailerListComponent } from './retailers/retailer-list/retailer-list.component';
import { RetailerDetailComponent } from './retailers/retailer-detail/retailer-detail.component';
import { RetailerFormComponent } from './retailers/retailer-form/retailer-form.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "products/:productId", component: ProductDetailComponent },
  { path: "retailers", component: RetailerListComponent },
  { path: "retailers/:retailerId", component: RetailerDetailComponent },
  { path: "retailer/create", component: RetailerFormComponent },
  { path: "product/create", component: ProductsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
