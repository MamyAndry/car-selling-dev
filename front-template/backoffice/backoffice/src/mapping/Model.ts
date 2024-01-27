import { Brand } from "./Brand"
import { Category } from "./Category"

export class Model{
  idModel : string = "";
  name : string = "";
  brand ?: Brand = new Brand;
  categorie ?: Category = new Category;
}
