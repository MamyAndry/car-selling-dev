import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from 'jquery';
import { Apiresponse } from '../../../mapping/response/Apiresponse';
import { Announcement } from '../../../mapping/announcement/Announcement';
import { Token } from '@angular/compiler';
import { User } from '../../../mapping/login/User';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private url : string = "http://localhost:8080/announcement";
  constructor(private http : HttpClient) { }

  findAllUnpublishedAnnouncement(token : string):Observable<Apiresponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Apiresponse>(this.url +"/status/" + 1, {headers : headers});
  }

  save(token : string, announcement : Announcement):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<any>(this.url, JSON.stringify(announcement), {headers : headers});
  }

  validate(token : string, announcement : Announcement):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put<any>(this.url, JSON.stringify(announcement), {headers : headers});
  }
}
