import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  constructor(private http: HttpClient) { }
  getapi() {
    let apiUrl = 'https://fakestoreapi.com/products/'
    return this.http.get(apiUrl)
  }

}
