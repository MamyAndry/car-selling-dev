import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../mapping/category/Category';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private url : string = "";
  constructor(private http : HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.url+"/category");
  }
}
