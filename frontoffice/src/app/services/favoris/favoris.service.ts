import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../mapping/response/Apiresponse';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  private url : string = UrlService.url + "favorite"
  constructor(private http : HttpClient) { }
  public findAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.url);
  }
}
