import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private url : string = "http://localhost:8080/announcement";
  constructor(private http : HttpClient) { }

  public findAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url);
  }
}
