import { Routes } from '@angular/router';
import { CarmodelComponent } from './components/carmodel/carmodel.component';
import { SignComponent } from './components/sign/sign.component';
import { CarparametersComponent } from './components/carparameters/carparameters.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { ModelparametersComponent } from './components/modelparameters/modelparameters.component';
import { StatsComponent } from './components/stats/stats/stats.component';

export const routes: Routes = [
  { path : "carmodel", component : CarmodelComponent },
  { path : "login", component : SignComponent},
  { path : "carparameter", component : CarparametersComponent},
  { path : "carparameters", component : CarparametersComponent},
  { path : "announcement", component : AnnouncementComponent},
  { path : "modelparameters", component : ModelparametersComponent},
  { path : "stats", component : StatsComponent},
  { path: '**', redirectTo: '/login'}
];
