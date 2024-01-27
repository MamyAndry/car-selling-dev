import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../../../mapping/brand/Brand';
import { Observable } from 'rxjs';
import { post } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private url : string = "http://localhost:8080/brand";
  constructor(private http : HttpClient) { }

  findAll():Observable<Brand[]>{
    return this.http.get<Brand[]>(this.url);
  }

  save(brand : Brand):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(brand), {headers});
  }

  update(brand : Brand):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(brand), {headers});
  }
}
