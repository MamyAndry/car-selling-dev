import { AnnouncementComponent } from './../../../front-template/backoffice/backoffice/src/app/components/announcement/announcement.component';
import { VoitureFormComponent } from './components/voiture-form/voiture-form.component';
import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
  { path : "ajoutVoiture", component : VoitureFormComponent },
  { path : "annonce", component : AnnouncementComponent},
  { path: '**', redirectTo: '/ajoutVoiture'}
];
