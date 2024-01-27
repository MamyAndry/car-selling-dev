import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarStatus } from '../../../../mapping/CarParameters/CarStatus';
import { Apiresponse } from '../../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class CarStatusService {

  url : string = "http://localhost:8080/carStatus"
  constructor(private http : HttpClient) { }

  findAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url);
  }

  save(CarStatus : CarStatus):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(CarStatus), {headers});
  }

  update(CarStatus : CarStatus):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(CarStatus), {headers});
  }
}
