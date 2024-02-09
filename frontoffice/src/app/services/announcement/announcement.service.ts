import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../../../mapping/announcement/Announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private url:string = "http://localhost:8080/announcement"

  constructor(private http : HttpClient) { }

  findAllPublishedAnnouncement(): Observable<Announcement[]>{
    return this.http.get<Announcement[]>(this.url+"/status/"+20);
  }
}
