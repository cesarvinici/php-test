import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Product } from './product';

const API = 'http://cinq.test/api';

@Injectable({providedIn: 'root'})
export class ProductService{

    constructor(private http: HttpClient) { }

    getProducts()
    {
        return this.http.get<Product[]>(`${API}/products`);
    }


    getDetail(productId: number)
    {
        return this.http.get<Product>(`${API}/products/${productId}`).pipe(map(responce=>responce));
    }


}