import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userlogin } from '../../../mapping/login/Userlogin';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url : string = "http://localhost:8080/login";

  constructor(private http : HttpClient) { }
  login(user : Userlogin):Observable<Apiresponse>{
    console.log(JSON.stringify(user))
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Apiresponse>(this.url, JSON.stringify(user), {headers:headers});
  }
}
