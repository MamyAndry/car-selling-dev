import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModelGearBox } from '../../../mapping/CarParameters/ModelGearBox';
import { Model } from '../../../mapping/Model';
import { FuelType } from '../../../mapping/CarParameters/FuelType';
import { Motorisation } from '../../../mapping/CarParts/Motorisation';
import { ModelFuelType } from '../../../mapping/CarParameters/ModelFuelType';
import { ModelMotor } from '../../../mapping/CarParameters/ModelMotor';
import { ModelFuelTypeService } from '../../services/carparameters/fueltype/model-fuel-type.service';
import { ModelMotorService } from '../../services/carparts/motorisation/model-motor.service';
import { ModelGearBoxService } from '../../services/carparts/gearbox/model-gear-box.service';
import { FuelTypeService } from '../../services/carparameters/fueltype/fuel-type.service';
import { MotorisationService } from '../../services/carparts/motorisation/motorisation.service';
import { GearBoxService } from '../../services/carparts/gearbox/gear-box.service';
import { GearBox } from '../../../mapping/CarParts/GearBox';
import { User } from '../../../mapping/login/User';
import { FormsModule } from '@angular/forms';
import { data } from 'jquery';
import DataTable from 'datatables.net-dt';
import { ModelService } from '../../services/model/model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelparameters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modelparameters.component.html',
  styleUrl: './modelparameters.component.scss'
})
export class ModelparametersComponent implements OnInit{
  @ViewChild('motorlist') motorlist!: ElementRef;
  @ViewChild('fuellist') fuellist!: ElementRef;
  @ViewChild('gearlist') gearlist!: ElementRef;

  modelGearBox : ModelGearBox = new ModelGearBox;
  modelFuelType : ModelFuelType = new ModelFuelType;
  modelMotor : ModelMotor = new ModelMotor

  gearBox : GearBox = new GearBox
  fuelType : FuelType = new FuelType
  motorisation : Motorisation = new Motorisation

  model : Model = new Model

  models : Model[] = []
  fuelTypes : FuelType[] = []
  motorisations : Motorisation[] = []
  gearBoxes : GearBox[] = []
  session_user ?: User
  token : string = ""
  error ?: string

  constructor(
    private modelFuelTypeService : ModelFuelTypeService,
    private modelMotorService : ModelMotorService,
    private modelGearBoxService : ModelGearBoxService,

    private modelService : ModelService,

    private fuelTypeService : FuelTypeService,
    private motorService : MotorisationService,
    private gearBoxService : GearBoxService,
    private route : Router
  ){}

  ngOnInit(): void {
    const sessionUserData = localStorage.getItem("session_user");
    this.session_user = sessionUserData ? JSON.parse(sessionUserData) : undefined;
    this.token = this.token = this.session_user?.password || '';
    if(this.token == ''){
      this.route.navigate(['login'])
    }
    this.modelService.findAll(this.token).subscribe(
      (data) => {
        this.models = data.data
        this.model = this.models[0]

        this.gearBoxService.findAll(this.token).subscribe(
          (data)=>{
            this.error = data.error
            this.gearBoxes = data.data
            this.modelGearBox.gearBox = this.gearBoxes[0]
            this.modelGearBox.model = this.model
            setTimeout(() => this.initializeDataTable3(), 0);
          }
        )

        this.motorService.findAll(this.token).subscribe(
          (data)=>{
            this.error = data.error
            this.motorisations = data.data
            this.modelMotor.motorisation = this.motorisations[0]
            this.modelMotor.model = this.model
            setTimeout(() => this.initializeDataTable1(), 0);
          }
        )

        this.fuelTypeService.findAll(this.token).subscribe(
          (data)=>{
            this.error = data.error
            this.fuelTypes = data.data
            this.modelFuelType.fuelType = this.fuelTypes[0]
            this.modelFuelType.model = this.model
            setTimeout(() => this.initializeDataTable2(), 0);
          }
        )
      }
    )
  }

  submitFuelType(){
    this.fuelTypeService.save(this.token, this.fuelType).subscribe(
      (data) => {
        console.log(data)
        this.fuelTypeService.findAll(this.token).subscribe(
          (data)=>{
            this.error = data.error
            this.fuelTypes = data.data
          }
        )
      }
    )
    this.fuelType = new FuelType
  }

  submitGearBox(){
    this.gearBoxService.save(this.token, this.gearBox).subscribe(
      (data) => {
        console.log(data)
        this.gearBoxService.findAll(this.token).subscribe(
          (data)=>{
            this.error = data.error
            this.gearBoxes = data.data
          }
        )
      }
    )
    this.gearBox = new GearBox
  }

  submitModelGearBox(){
    this.modelGearBoxService.save(this.token, this.modelGearBox).subscribe(
      (data) => {
        console.log(data)
        this.model.gearBoxes.push(this.modelGearBox.gearBox)
      }
    )
  }

  deleteModelGearBox(mod : Model, gearB : GearBox){
    let modelGB = new ModelGearBox;
    modelGB.gearBox = gearB
    modelGB.model=mod
    console.log(JSON.stringify(modelGB))
    this.modelGearBoxService.delete(this.token, modelGB).subscribe(
      (data)=>{
        this.error = data.error
        console.log(data.data)
      }
    )
  }

  submitModelMotor(){
    this.modelMotorService.save(this.token, this.modelMotor).subscribe(
      (data) => {
        console.log(JSON.stringify(this.modelMotor))
        console.log(data)
        this.model.motorisations.push(this.modelMotor.motorisation)
      }
    )
  }

  submitModelFuelType(){
    this.modelFuelTypeService.save(this.token, this.modelFuelType).subscribe(
      (data) => {
        console.log(data)
        this.model.fuelTypes.push(this.modelFuelType.fuelType)
      }
    )
  }

  submitMotorisation(){
    this.motorService.save(this.token, this.motorisation).subscribe(
      (data) => {
        console.log(data)
        this.motorService.findAll(this.token).subscribe(
          (data)=>{
            this.error = data.error
            this.motorisations = data.data

          }
        )
      }
    )
    this.motorisation = new Motorisation
  }

  private initializeDataTable1(): void {
    let dataTable = new DataTable(this.motorlist.nativeElement,{info : false, searching : true, lengthChange : false});
    // ... configuration supplémentaire de dataTable si nécessaire
  }

  private initializeDataTable2(): void {
    let dataTable2 = new DataTable(this.fuellist.nativeElement,{info : false,searching : true , lengthChange : false});
    // ... configuration supplémentaire de dataTable si nécessaire
  }

  private initializeDataTable3(): void {
    let dataTable3 = new DataTable(this.gearlist.nativeElement,{info : false,searching : true , lengthChange : false});
    // ... configuration supplémentaire de dataTable si nécessaire
  }

  updateGearBox(gearB : GearBox){
    this.gearBoxService.update(this.token, gearB).subscribe(
      (data)=>{
        this.error = data.error
        console.log(data.data)
        window.location.reload()
      }
    )
  }

  updateMotor(motor : Motorisation){
    this.motorService.update(this.token, motor).subscribe(
      (data)=>{
        this.error = data.error
        console.log(data.data)
        window.location.reload()
      }
    )
  }

  updateFuel(fuel : FuelType){
    this.fuelTypeService.update(this.token, fuel).subscribe(
      (data)=>{
        this.error = data.error
        console.log(data.data)
        window.location.reload()
      }
    )
  }

}
