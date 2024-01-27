import { Brand } from "./brand/Brand"
import { Category } from "./category/Category"

export class Model{
  idModel : string = ""
  name : string = ""
  brand ?: Brand = new Brand
  categorie ?: Category = new Category
}
