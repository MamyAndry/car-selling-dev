import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class ModelFuelTypeService {
  private url = "http://localhost:8080/modelFuelType"
  constructor(private http : HttpClient) { }
  findModelFuelTypeByModel(token: string, idModel: string): Observable<Apiresponse>{
    this.url += "/model";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url, {headers : headers});
  }
}
