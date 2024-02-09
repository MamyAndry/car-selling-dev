import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../mapping/brand/Brand';
import { ModelFuelType } from '../../../mapping/CarParameters/ModelFuelType';
import { ModelGearBox } from '../../../mapping/CarParameters/ModelGearBox';
import { ModelMotor } from '../../../mapping/CarParameters/ModelMotor';
import { User } from '../../../mapping/login/User';
import { Model } from '../../../mapping/Model';
import { BrandService } from '../../service/cars/brand.service';
import { ModelFuelTypeService } from '../../service/cars/model-fuel-type.service';
import { ModelGearBoxService } from '../../service/cars/model-gear-box.service';
import { ModelMotorService } from '../../service/cars/model-motor.service';
import { ModelService } from '../../service/cars/model.service';

@Component({
  selector: 'app-voiture-form',
  standalone: true,
  imports: [],
  templateUrl: './voiture-form.component.html',
  styleUrl: './voiture-form.component.scss'
})
export class VoitureFormComponent implements OnInit{
  session_user?: User;
  token: string="";

  constructor(private brandService: BrandService, private modelService: ModelService, private modelGearBoxService: ModelGearBoxService, private modelFuelTypeService: ModelFuelTypeService, private modelMotorService:ModelMotorService){}

  ngOnInit(): void {
    // const sessionUserData = localStorage.getItem("session_user");
    // this.session_user = sessionUserData ? JSON.parse(sessionUserData) : undefined;
    // this.token = this.token = this.session_user?.password || '';
    this.brandService.findAll(this.token).subscribe((data)=>{
      this.brands = data.data;
    }, (error)=>{
      console.log(error);
    });
  }
  models: Model[] = []
  brands: Brand[] = []
  modelFuelTypes: ModelFuelType[] = []
  modelMotors: ModelMotor[] = []
  modelGearBox: ModelGearBox[] = []

}
