import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiresponse } from '../../../mapping/response/Apiresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarStatusService {

  private url : string = "http://localhost:8080/carStatus";
  constructor(private http : HttpClient) { }
  findAll(token: string): Observable<Apiresponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url, {headers : headers});
  }
}
