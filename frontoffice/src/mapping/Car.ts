import { CarStatus } from "./CarParameters/CarStatus";
import { ModelFuelType } from "./CarParameters/ModelFuelType";
import { Transmission } from "./CarParts/Transmission";
import { User } from "./login/User";

export class Car{
  transmission : Transmission = new Transmission
  modelFuelType : ModelFuelType = new ModelFuelType
  doorNumber : number = 0
  color : string = ""
  kilometrage : number = 0
  carStatus : CarStatus = new CarStatus
  user : User = new User
}
