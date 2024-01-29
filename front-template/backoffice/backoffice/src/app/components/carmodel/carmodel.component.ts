import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Model } from '../../../mapping/Model';
import { Brand } from '../../../mapping/brand/Brand';
import { Category } from '../../../mapping/category/Category';
import { BrandService } from '../../services/brand/brand.service';
import { CategoryService } from '../../services/category/category.service';
import DataTable from 'datatables.net-dt';
import { FormsModule } from '@angular/forms';
import { data } from 'jquery';
import { Origin } from '../../../mapping/brand/Origin';
import { OriginService } from '../../services/brand/origin.service';
import { ModelService } from '../../services/model/model.service';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { User } from '../../../mapping/login/User';

@Component({
  selector: 'app-carmodel',
  standalone: true,
  imports: [FormsModule,MdbTooltipModule],
  templateUrl: './carmodel.component.html',
  styleUrl: './carmodel.component.scss'
})
export class CarmodelComponent implements OnInit{
  @ViewChild('brandlist') brandlist!: ElementRef;
  @ViewChild('categorylist') categorylist!: ElementRef;

  model : Model = new Model;
  brands : Brand[] = []
  origins : Origin[] = []
  categories : Category[] = []
  models : Model[] = []
  brand : Brand = new Brand;
  category : Category = new Category;
  session_user ?: User
  token : string = ""

  constructor(private modelService : ModelService, private brandService : BrandService, private categoryService : CategoryService, private originService : OriginService){}


  ngOnInit(): void {
    const sessionUserData = localStorage.getItem("session_user");
    this.session_user = sessionUserData ? JSON.parse(sessionUserData) : undefined;
    this.token = this.token = this.session_user?.password || '';

    this.brandService.findAll(this.token).subscribe(
      (data) => {
        this.brands = data.data
        setTimeout(() => this.initializeDataTable(), 0);
      }
    );
    this.modelService.findAll(this.token).subscribe(
      (data) => {
        this.models = data.data
        //setTimeout(() => this.initializeDataTable(), 0);
      }
    );
    this.categoryService.findAll(this.token).subscribe(
      (data) => {
        this.categories = data.data
        //setTimeout(() => this.initializeDataTable(), 0);
      }
    );
    this.originService.findAll(this.token).subscribe(
      (data) => {
        this.origins = data.data
        //setTimeout(() => this.initializeDataTable(), 0);
      }
    );
  }

  saveBrand(){
    this.brandService.save(this.token, this.brand).subscribe(
      (data)=>{
        console.log(data);
        this.brand = new Brand
      }
    );
  }

  updateBrand(brand : Brand){
    this.brandService.update(this.token, brand).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
    )
  }

  updateCategory(cat : Category){
    this.categoryService.update(this.token, cat).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
    )
  }

  private initializeDataTable(): void {
    let dataTable = new DataTable(this.brandlist.nativeElement,{info : false,lengthMenu: [3, 5, 10]});
    let dataTable2 = new DataTable(this.categorylist.nativeElement,{info : false,lengthMenu: [3, 5, 10]});
    // ... configuration supplémentaire de dataTable si nécessaire
  }



}
