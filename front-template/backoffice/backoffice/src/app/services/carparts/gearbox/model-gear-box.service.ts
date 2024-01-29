import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../../mapping/response/Apiresponse';
import { ModelGearBox } from '../../../../mapping/CarParameters/ModelGearBox';

@Injectable({
  providedIn: 'root'
})
export class ModelGearBoxService {

  url : string = "http://localhost:8080/modelGearBox"
  constructor(private http : HttpClient) { }

  findAll(token : string):Observable<Apiresponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url, {headers : headers});
  }

  save(token : string, ModelGearBox : ModelGearBox):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<any>(this.url, JSON.stringify(ModelGearBox), {headers:headers});
  }

  update(token : string, ModelGearBox : ModelGearBox):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put<any>(this.url, JSON.stringify(ModelGearBox), {headers:headers});
  }

  delete(token:string, ModelGearBox : ModelGearBox):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.delete<any>(this.url+"/delete", {headers:headers, body : JSON.stringify(ModelGearBox)});
  }
}
