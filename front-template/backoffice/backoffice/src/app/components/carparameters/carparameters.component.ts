import { Component, OnInit } from '@angular/core';
import { CarStatusService } from '../../services/carparameters/carstatus/car-status.service';
import { FuelTypeService } from '../../services/carparameters/fueltype/fuel-type.service';
import { CarStatus } from '../../../mapping/CarParameters/CarStatus';
import { FuelType } from '../../../mapping/CarParameters/FuelType';
import { Commission } from '../../../mapping/com/Commission';
import { CommissionService } from '../../services/carparameters/commission/commission.service';
import { data } from 'jquery';
import { User } from '../../../mapping/login/User';
import { Car } from '../../../mapping/Car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carparameters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carparameters.component.html',
  styleUrl: './carparameters.component.scss'
})
export class CarparametersComponent implements OnInit{
  allCarStatus : CarStatus[] = []
  allCommisions : Commission[] = []
  constructor(private carStatusService : CarStatusService, private fuelTypeService : FuelTypeService, private commissionService : CommissionService){}
  token : string = ""
  session_user ?: User
  carStatus : CarStatus = new CarStatus
  commission : Commission = new Commission

  ngOnInit(): void {
    const sessionUserData = localStorage.getItem("session_user");
    this.session_user = sessionUserData ? JSON.parse(sessionUserData) : undefined;
    this.token = this.token = this.session_user?.password || '';

    this.carStatusService.findAll(this.token).subscribe(
      (data) => {
        this.allCarStatus = data.data
      }
    )

    this.commissionService.findAll(this.token).subscribe(
      (data) => {
        this.allCommisions = data.data
      }
    )

  }

  submitCarStatus(){
    this.carStatusService.save(this.token, this.carStatus).subscribe(
      (data)=>{
        window.location.reload
      }
    )
  }

  updateCarStatus(carStatus : CarStatus){
    this.carStatusService.update(this.token, carStatus).subscribe(
      (data)=>{
          window.location.reload()
      }
    )
  }

  updateCommission(commission : Commission){
    this.commissionService.update(this.token, commission).subscribe(
      (data)=>{
          window.location.reload()
      }
    )
  }


}
