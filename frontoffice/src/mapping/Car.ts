import { CarStatus } from "./CarParameters/CarStatus";
import { ModelFuelType } from "./CarParameters/ModelFuelType";
import { ModelGearBox } from "./CarParameters/ModelGearBox";
import { ModelMotor } from "./CarParameters/ModelMotor";
import { Transmission } from "./CarParts/Transmission";
import { Model } from "./Model";
import { User } from "./login/User";

export class Car{
  transmission : Transmission = new Transmission
  modelFuelType : ModelFuelType = new ModelFuelType
  modelMotor : ModelMotor = new ModelMotor
  modelGearBox : ModelGearBox = new ModelGearBox
  doorNumber : number = 0
  color : string = ""
  kilometrage : number = 0
  carStatus : CarStatus = new CarStatus
  user : User = new User
  model : Model = new Model
}
