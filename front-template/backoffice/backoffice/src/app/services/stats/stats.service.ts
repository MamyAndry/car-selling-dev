import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  url : string = "http://localhost:8080/saleStatistics"
  constructor(private http : HttpClient) { }

  public getSalesStats(token : string) : Observable<Apiresponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url+"/sold", {headers : headers});
  }
}
