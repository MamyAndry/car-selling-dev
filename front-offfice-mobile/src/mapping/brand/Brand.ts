import { Model } from "../Model";
import { Origin } from "./Origin";

export class Brand{
  idBrand : string = "";
  name : string = "";
  origin : Origin = new Origin
  models : Model[] = []
}
