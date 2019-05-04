import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Retailer } from './retailer';
import { Observable } from 'rxjs';



const API = 'http://localhost:8000/api';

@Injectable({providedIn: 'root'})
export class RetailerService{

    constructor(private http: HttpClient) { }

    getRetailers()
    {
        return this.http.get<Retailer[]>(`${API}/retailers`).pipe(map(response => response));
    }

    getRetailerDetail(retailerId: number)
    {
        return this.http.get<Retailer>(`${API}/retailers/${retailerId}`).pipe(map(response=>response));
    }

    saveRetailer(retailer){
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
       return this.http.post(`${API}/retailers`, retailer, {headers: headers}).pipe(map(res => res));
      
    }

}