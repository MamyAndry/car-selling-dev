import { Injectable } from '@angular/core';
import { Apiresponse } from '../../../mapping/response/Apiresponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from '../../../mapping/Model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private url : string = "http://localhost:8080/model";
  constructor(private http : HttpClient) { }


  findAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url);
  }

  save(Model : Model):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(Model), {headers});
  }

  update(Model : Model):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(Model), {headers});
  }
}
