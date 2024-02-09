import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url : String = "http://localhost:8080/cars";
  constructor() { }
}
