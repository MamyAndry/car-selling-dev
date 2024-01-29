import { Model } from "../Model"
import { FuelType } from "./FuelType"

export class ModelFuelType{
  idModelFuelType ?: number
  fuelType : FuelType = new FuelType
  model : Model = new Model
}
