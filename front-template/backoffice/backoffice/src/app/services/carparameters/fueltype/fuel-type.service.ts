import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuelType } from '../../../../mapping/CarParameters/FuelType';
import { Apiresponse } from '../../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  url : string = "http://localhost:8080/fuelType"
  constructor(private http : HttpClient) { }

  findAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url);
  }

  save(FuelType : FuelType):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(FuelType), {headers});
  }

  update(FuelType : FuelType):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(FuelType), {headers});
  }
}
