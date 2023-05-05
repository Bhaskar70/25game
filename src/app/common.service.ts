import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }
  constructor(private http: HttpClient) { }
  getapi() {
    let apiUrl = 'https://fakestoreapi.com/products/'
    return this.http.get(apiUrl)
  }

  postData(registerData: any) {
    console.log(registerData, "23")
    return this.http.post(
      this.url + '/posts',
      JSON.stringify(registerData),
      this.httpOptions
    )
  }
}
