import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../../mapping/category/Category';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url : string = "http://localhost:8080/category";
  constructor(private http : HttpClient) { }


  findAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url);
  }

  save(Category : Category):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(Category), {headers});
  }

  update(Category : Category):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(Category), {headers});
  }
}
