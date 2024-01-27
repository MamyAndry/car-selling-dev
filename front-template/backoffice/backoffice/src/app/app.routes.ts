import { Routes } from '@angular/router';
import { CarmodelComponent } from './carmodel/carmodel.component';
import { SignComponent } from './sign/sign.component';

export const routes: Routes = [
  { path : "carmodel", component : CarmodelComponent },
  { path : "login", component : SignComponent},
];