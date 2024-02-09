import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiresponse } from '../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private url = "http://localhost:8080/model";
  constructor(private http : HttpClient) { }
  findAll(token : string):Observable<Apiresponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url, {headers : headers});
  }
  findModelByBrand(token: string, idBrand:string): Observable<Apiresponse>{
    this.url += "/brand";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url, {headers : headers});
  }
}
