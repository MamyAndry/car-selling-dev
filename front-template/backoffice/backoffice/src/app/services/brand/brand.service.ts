import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../../../mapping/Brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private url : string = "http://localhost:8080/brand";
  constructor(private http : HttpClient) { }

  findAll():Observable<Brand[]>{
    return this.http.get<Brand[]>(this.url);
  }
}
