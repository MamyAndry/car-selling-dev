import { Routes } from '@angular/router';
import { CarmodelComponent } from './components/carmodel/carmodel.component';
import { SignComponent } from './sign/sign.component';
import { CarparametersComponent } from './components/carparameters/carparameters.component';

export const routes: Routes = [
  { path : "carmodel", component : CarmodelComponent },
  { path : "login", component : SignComponent},
  { path : "carparameter", component : CarparametersComponent},
  { path : "carparameters", component : CarparametersComponent},
];
