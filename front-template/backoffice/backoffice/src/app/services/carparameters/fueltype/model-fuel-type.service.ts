import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../../mapping/response/Apiresponse';
import { ModelFuelType } from '../../../../mapping/CarParameters/ModelFuelType';

@Injectable({
  providedIn: 'root'
})
export class ModelFuelTypeService {

  url : string = "http://localhost:8080/modelFuelType"
  constructor(private http : HttpClient) { }

  findAll(token : string):Observable<Apiresponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url, {headers : headers});
  }

  save(token : string,ModelFuelType :ModelFuelType):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<any>(this.url, JSON.stringify(ModelFuelType), {headers:headers});
  }

  update(modelFuelType :ModelFuelType):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(modelFuelType), {headers:headers});
  }
}
