import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Model } from '../../mapping/Model';
import { Brand } from '../../mapping/brand/Brand';
import { Category } from '../../mapping/category/Category';
import { BrandService } from '../services/brand/brand.service';
import { CategoryService } from '../services/category/category.service';
import DataTable from 'datatables.net-dt';
import { FormsModule } from '@angular/forms';
import { data } from 'jquery';

@Component({
  selector: 'app-carmodel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carmodel.component.html',
  styleUrl: './carmodel.component.scss'
})
export class CarmodelComponent implements OnInit{
  @ViewChild('brandlist') brandlist!: ElementRef;
  @ViewChild('categorylist') categorylist!: ElementRef;

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
        setTimeout(() => this.initializeDataTable(), 0);
      }
    );
    this.categoryService.findAll().subscribe(
      (data) => {
        this.categories = data
        //setTimeout(() => this.initializeDataTable(), 0);
      }
    );
  }

  saveBrand(){
    this.brandService.save(this.brand).subscribe(
      (data)=>{
        console.log(data);
        this.brand = new Brand
      }
    );
  }

  private initializeDataTable(): void {
    let dataTable = new DataTable(this.brandlist.nativeElement,{info : false,lengthMenu: [3, 5, 10]});
    let dataTable2 = new DataTable(this.categorylist.nativeElement,{info : false,lengthMenu: [3, 5, 10]});
    // ... configuration supplémentaire de dataTable si nécessaire
  }



}
