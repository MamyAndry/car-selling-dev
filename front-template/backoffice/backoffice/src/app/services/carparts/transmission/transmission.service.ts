import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transmission } from '../../../../mapping/CarParts/Transmission';
import { Apiresponse } from '../../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {

  url : string = "localhost:8080/transmission"
  constructor(private http : HttpClient) { }

  findAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url);
  }

  save(transmission : Transmission):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(transmission), {headers});
  }

  update(transmission : Transmission):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(transmission), {headers});
  }
}
