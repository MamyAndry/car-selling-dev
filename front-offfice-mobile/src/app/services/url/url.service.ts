import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public static url : string = "http://localhost/8080/"
  constructor() { }
}
