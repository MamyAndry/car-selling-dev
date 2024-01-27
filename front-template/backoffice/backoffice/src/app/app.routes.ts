import { Routes } from '@angular/router';
import { CarmodelComponent } from './components/carmodel/carmodel.component';
import { SignComponent } from './sign/sign.component';
<<<<<<< HEAD
import { CarparametersComponent } from './components/carparameters/carparameters.component';
=======
import { AnnonceComponent } from './annonce/annonce.component';
>>>>>>> 05c9e1f18e504ae63389e46678f89e253d5b4f2e

export const routes: Routes = [
  { path : "carmodel", component : CarmodelComponent },
  { path : "login", component : SignComponent},
<<<<<<< HEAD
  { path : "carparameter", component : CarparametersComponent},
  { path : "carparameters", component : CarparametersComponent},
=======
  { path : "annonce", component : AnnonceComponent},
>>>>>>> 05c9e1f18e504ae63389e46678f89e253d5b4f2e
];
