import { Component, OnInit } from '@angular/core';
import { CarStatusService } from '../../services/carparameters/carstatus/car-status.service';
import { FuelTypeService } from '../../services/carparameters/fueltype/fuel-type.service';
import { CarStatus } from '../../../mapping/CarParameters/CarStatus';
import { FuelType } from '../../../mapping/CarParameters/FuelType';

@Component({
  selector: 'app-carparameters',
  standalone: true,
  imports: [],
  templateUrl: './carparameters.component.html',
  styleUrl: './carparameters.component.scss'
})
export class CarparametersComponent implements OnInit{
  allCarStatus : CarStatus[] = []
  allFuelTypes : FuelType[] = []
  constructor(private carStatusService : CarStatusService, private fuelTypeService : FuelTypeService){}

  ngOnInit(): void {
    this.carStatusService.findAll().subscribe(
      (data) => {
        this.allCarStatus = data.data
      }
    )
    this.fuelTypeService.findAll().subscribe(
      (data) => {
        this.allFuelTypes = data.data
      }
    )
  }


}
