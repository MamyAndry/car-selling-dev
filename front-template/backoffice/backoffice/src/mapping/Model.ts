import { FuelType } from "./CarParameters/FuelType";
import { GearBox } from "./CarParts/GearBox";
import { Motorisation } from "./CarParts/Motorisation";
import { Brand } from "./brand/Brand"
import { Category } from "./category/Category"

export class Model{
  idModel : string = "";
  name : string = "";
  brand ?: Brand = new Brand;
  category ?: Category = new Category;
  gearBoxes : GearBox[] = []
  motorisations : Motorisation[] = []
  fuelTypes : FuelType[] = []
}
