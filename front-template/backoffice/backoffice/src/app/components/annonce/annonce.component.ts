import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Annonce } from '../../../mapping/Annonce';
import { BrandService } from '../../services/brand/brand.service';
import { CategoryService } from '../../services/category/category.service';
import DataTable from 'datatables.net-dt';
import { FormsModule } from '@angular/forms';
import { data } from 'jquery';

@Component({
  selector: 'app-annonce',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './annonce.component.html',
  styleUrl: './annonce.component.scss'
})
export class AnnonceComponent implements OnInit{

  annonces : Annonce[] = []

  constructor(private brandService : BrandService, private categoryService : CategoryService){}


  ngOnInit(): void {

  }

  getDetails():void{

  }

  delete():void{

  }
  validate():void{

  }
  private initializeDataTable(): void {

  }



}
