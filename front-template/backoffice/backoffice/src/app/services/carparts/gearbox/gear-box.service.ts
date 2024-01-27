import { Injectable } from '@angular/core';
import { GearBox } from '../../../../mapping/CarParts/GearBox';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GearBoxService {
  url : string = "localhost:8080/gearbox"
  constructor(private http : HttpClient) { }

  findAll():Observable<GearBox[]>{
    return this.http.get<GearBox[]>(this.url);
  }

  save(gearbox : GearBox):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(gearbox), {headers});
  }

  update(gearbox : GearBox):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(gearbox), {headers});
  }
}
