import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../../../mapping/brand/Brand';
import { Observable } from 'rxjs';
import { post } from 'jquery';
import { Apiresponse } from '../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private url : string = "http://localhost:8080/brand";
  constructor(private http : HttpClient) { }

  findAll(token : string):Observable<Apiresponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url, {headers : headers});
  }

  save(token : string, brand : Brand):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<any>(this.url, JSON.stringify(brand), {headers : headers});
  }

  update(token : string, brand : Brand):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put<any>(this.url, JSON.stringify(brand), {headers : headers});
  }
}
