import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../mapping/response/Apiresponse';
import { User } from '../../../mapping/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url : string = "http://localhost:8080/login/admin"

  constructor( private http : HttpClient){}

  login(user : User):Observable<Apiresponse>{
    return this.http.post<Apiresponse>(this.url, user);
  }
}
