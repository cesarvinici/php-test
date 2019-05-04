import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from './product';

const API = environment.apiUrl+'/api';

@Injectable({providedIn: 'root'})
export class ProductService{

    constructor(private http: HttpClient) { }

    getProducts()
    {
        return this.http.get<Product[]>(`${API}/products`);
    }


    saveProduct(product)
    {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
       return this.http.post(`${API}/products`, product, {headers: headers}).pipe(map(res => res));

    }



    getDetail(productId: number)
    {
        return this.http.get<Product>(`${API}/products/${productId}`).pipe(map(responce=>responce));
    }


    sendEmail(product)
    {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
       return this.http.post(`${API}/products/email`, product, {headers: headers}).pipe(map(res => res));
    }



}