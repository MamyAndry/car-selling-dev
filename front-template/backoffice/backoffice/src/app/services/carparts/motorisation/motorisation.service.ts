import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorisation } from '../../../../mapping/CarParts/Motorisation';
import { Apiresponse } from '../../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class MotorisationService {

  url : string = "localhost:8080/motorisation"
  constructor(private http : HttpClient) { }

  findAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url);
  }

  save(motorisation : Motorisation):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(motorisation), {headers});
  }

  update(motorisation : Motorisation):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(motorisation), {headers});
  }
}
