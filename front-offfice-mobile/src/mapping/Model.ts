import { FuelType } from "./CarParameters/FuelType";
import { ModelFuelType } from "./CarParameters/ModelFuelType";
import { ModelGearBox } from "./CarParameters/ModelGearBox";
import { ModelMotor } from "./CarParameters/ModelMotor";
import { GearBox } from "./CarParts/GearBox";
import { Motorisation } from "./CarParts/Motorisation";
import { Brand } from "./brand/Brand"
import { Category } from "./category/Category"

export class Model{
  idModel : string = "";
  name : string = "";
  brand ?: Brand = new Brand;
  category ?: Category = new Category;
  modelGearBoxes : ModelGearBox[] = []
  modelMotors : ModelMotor[] = []
  modelFuelTypes : ModelFuelType[] = []
  gearBoxes : GearBox[] = []
  motorisations : Motorisation[] = []
  fuelTypes : FuelType[] = []
}
