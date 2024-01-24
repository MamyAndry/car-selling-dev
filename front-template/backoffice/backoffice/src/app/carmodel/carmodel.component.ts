import { Component, OnInit } from '@angular/core';
import { Model } from '../../mapping/Model';
import { Brand } from '../../mapping/Brand';
import { Category } from '../../mapping/Category';
import { BrandService } from '../services/brand/brand.service';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-carmodel',
  standalone: true,
  imports: [],
  templateUrl: './carmodel.component.html',
  styleUrl: './carmodel.component.scss'
})
export class CarmodelComponent implements OnInit{
  model : Model = new Model;
  brands : Brand[] = []
  categories : Category[] = []
  brand : Brand = new Brand;
  category : Category = new Category;

  constructor(private brandService : BrandService, private categoryService : CategoryService){}

  ngOnInit(): void {

    this.brandService.findAll().subscribe(
      (data) => {
        this.brands = data
      }
    );
    this.categoryService.findAll().subscribe(
      (data) => {
        this.categories = data
      }
    );
  }



}
