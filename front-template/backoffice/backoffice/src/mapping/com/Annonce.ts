import { Car } from "../Car"
import { Location } from "./Location"

export class Annonce{
  idAnnonce : string = ""
  dateAdd : string = ""
  dateValidation : string = ""
  price : number = 0
  description : string = ""
  status : number = 0 // status - integer
  location ?: Location
  car ?: Car
}
