import { Component, OnInit } from '@angular/core';
import { Announcement } from '../../../mapping/announcement/Announcement';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { HeaderComponent } from '../header/header/header.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Transmission } from '../../../mapping/CarParts/Transmission';
import { BrandService } from '../../services/cars/brand.service';
import { Brand } from '../../../mapping/brand/Brand';
import { Model } from '../../../mapping/Model';
import { ModelGearBox } from '../../../mapping/CarParameters/ModelGearBox';
import { ModelFuelType } from '../../../mapping/CarParameters/ModelFuelType';
import { ModelMotor } from '../../../mapping/CarParameters/ModelMotor';
import { CarStatus } from '../../../mapping/CarParameters/CarStatus';
import { CarStatusService } from '../../services/cars/car-status.service';
import { User } from '../../../mapping/login/User';
import { FormsModule } from '@angular/forms';
import { Car } from '../../../mapping/Car';

@Component({
  selector: 'app-announcement-list',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        height: '0',
        opacity: '0'
      })),
      state('*', style({
        height: '*',
        opacity: '1'
      })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class AnnouncementListComponent implements OnInit{
  annonces : Announcement[] = []
  transmissions : Transmission[] = []
  brands : Brand[] = []
  carStatus : CarStatus[] = []
  car : Car = new Car
  brand : Brand = new Brand
  model : Model = new Model
  transmission : Transmission = new Transmission
  modelGearBox : ModelGearBox = new ModelGearBox
  modelFuelType : ModelFuelType = new ModelFuelType
  modelMotor : ModelMotor = new ModelMotor

  session_user?: User;
  token: string='';

  registerFormVisible: boolean = true;



  toggleForms() {
    this.registerFormVisible = !this.registerFormVisible;
  }

  constructor(private annonceService : AnnouncementService, private brandService : BrandService, private carStatusService : CarStatusService){}

  ngOnInit(): void {
    const sessionUserData = localStorage.getItem("session_user");
    this.session_user = sessionUserData ? JSON.parse(sessionUserData) : undefined;
    this.token = this.token = this.session_user?.password || '';

      this.annonceService.findAll().subscribe(
        (resp)=>{
          this.annonces = resp.data
        }
      )
      this.brandService.findAll(this.token).subscribe(
        (resp)=>{
          this.brands = resp.data
        }
      )
      this.carStatusService.findAll(this.token).subscribe(
        (resp)=>{
          this.carStatus = resp.data
        }
      )
  }

  isLogged(){
    return this.token != ''
    //return (localStorage.getItem("session_user") != undefined)
  }

}
