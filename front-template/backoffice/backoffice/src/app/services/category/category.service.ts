import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../../mapping/category/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url : string = "http://localhost:8080/category";
  constructor(private http : HttpClient) { }


  findAll():Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
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
