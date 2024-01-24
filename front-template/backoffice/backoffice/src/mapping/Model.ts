import { Brand } from "./Brand"
import { Categorie } from "./Categorie"

export class Model{
  idModel : string = ""
  name : string = ""
  brand ?: Brand = new Brand
  categorie ?: Categorie = new Categorie
}
