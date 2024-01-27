import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarStatus } from '../../../../mapping/CarParameters/CarStatus';

@Injectable({
  providedIn: 'root'
})
export class CarStatusService {

  url : string = "localhost:8080/carstatus"
  constructor(private http : HttpClient) { }

  findAll():Observable<CarStatus[]>{
    return this.http.get<CarStatus[]>(this.url);
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
