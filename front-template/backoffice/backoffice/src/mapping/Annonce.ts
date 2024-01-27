import { Location } from "./Location"
import { Car } from "./Car"

export class Annonce{
    idAnnonce : string = "";
    dateAdd : string = "";
    dateValidation : string ="";
    price : string ="";
    description : string ="";
    status : string ="";
    location ?: Location = new Location
    car ?: Car = new Car;
  }