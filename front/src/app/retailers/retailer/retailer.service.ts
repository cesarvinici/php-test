import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Retailer } from './retailer';



const API = 'http://cinq.test/api';

@Injectable({providedIn: 'root'})
export class RetailerService{

    constructor(private http: HttpClient) { }

    getRetailers()
    {
        return this.http.get<Retailer[]>(`${API}/retailers`);
    }


    getRetailerDetail(retailerId: number)
    {
        return this.http.get<Retailer>(`${API}/retailers/${retailerId}`).pipe(map(responce=>responce));
    }


}