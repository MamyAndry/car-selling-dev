import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../../mapping/Category';
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
}
