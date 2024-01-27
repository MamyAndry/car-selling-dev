import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Origin } from '../../../mapping/brand/Origin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OriginService {

  url : string = "localhost:8080/origin"
  constructor(private http : HttpClient) { }

  findAll():Observable<Origin[]>{
    return this.http.get<Origin[]>(this.url);
  }

  save(Origin : Origin):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(Origin), {headers});
  }

  update(Origin : Origin):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(Origin), {headers});
  }
}
