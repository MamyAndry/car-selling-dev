import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiresponse } from '../../../../mapping/response/Apiresponse';
import { Observable } from 'rxjs';
import { ModelMotor } from '../../../../mapping/CarParameters/ModelMotor';

@Injectable({
  providedIn: 'root'
})
export class ModelMotorService {

  url : string = "http://localhost:8080/modelMotor"
  constructor(private http : HttpClient) { }

  findAll(token : string):Observable<Apiresponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url, {headers : headers});
  }

  save(token : string, ModelMotor : ModelMotor):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<any>(this.url, JSON.stringify(ModelMotor), {headers:headers});
  }

  update(ModelMotor : ModelMotor):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(ModelMotor), {headers:headers});
  }
}
