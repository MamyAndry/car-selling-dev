import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../mapping/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url : string = "http://localhost:8080/login/admin"

  constructor( private http : HttpClient){}

  login():Observable<User>{
    return this.http.post<>
  }
}
