import { Component, OnInit } from '@angular/core';
import { CarStatusService } from '../../services/carparameters/carstatus/car-status.service';
import { FuelTypeService } from '../../services/carparameters/fueltype/fuel-type.service';
import { CarStatus } from '../../../mapping/CarParameters/CarStatus';
import { FuelType } from '../../../mapping/CarParameters/FuelType';
import { Commission } from '../../../mapping/com/Commission';
import { CommissionService } from '../../services/carparameters/commission/commission.service';
import { data } from 'jquery';

@Component({
  selector: 'app-carparameters',
  standalone: true,
  imports: [],
  templateUrl: './carparameters.component.html',
  styleUrl: './carparameters.component.scss'
})
export class CarparametersComponent implements OnInit{
  allCarStatus : CarStatus[] = []
  allCommisions : Commission[] = []
  constructor(private carStatusService : CarStatusService, private fuelTypeService : FuelTypeService, private commissionService : CommissionService){}

  ngOnInit(): void {
    this.carStatusService.findAll().subscribe(
      (data) => {
        this.allCarStatus = data.data
      }
    )

    this.commissionService.findAll().subscribe(
      (data) => {
        this.allCommisions = data.data
      }
    )

  }


}
