import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../../../mapping/Annonce';
import { Observable } from 'rxjs';
import { post } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private url : string = "http://localhost:8080/annonce";
  constructor(private http : HttpClient) { }

  findAll():Observable<Annonce[]>{
    return this.http.get<Annonce[]>(this.url);
  }

  save(Annonce : Annonce):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(Annonce), {headers});
  }
}
