import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from 'jquery';
import { Apiresponse } from '../../../mapping/response/Apiresponse';
import { Announcement } from '../../../mapping/announcement/Announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private url : string = "http://localhost:8080/announcement";
  constructor(private http : HttpClient) { }

  findAllUnpublishedAnnouncement():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url +"/status/" + 1);
  }

  save(announcement : Announcement):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url, JSON.stringify(announcement), {headers});
  }

  validate(announcement : Announcement):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(this.url, JSON.stringify(announcement), {headers});
  }
}
