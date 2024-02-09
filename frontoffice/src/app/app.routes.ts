import { AnnouncementComponent } from './../../../front-template/backoffice/backoffice/src/app/components/announcement/announcement.component';
import { VoitureFormComponent } from './components/voiture-form/voiture-form.component';
import { Routes } from '@angular/router';

import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';
import { FavoriListComponent } from './components/favori-list/favori-list.component';
import { LoginComponent } from './components/login/login/login.component';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
  { path : "announcement", component : AnnouncementListComponent },
  { path : "favoris", component : FavoriListComponent },
  { path : "login", component : LoginComponent },
<<<<<<< HEAD
  { path : "", component : IndexComponent },
=======

  
>>>>>>> 34a757f7bda1f96f2452a52fd2964d6df7766aa4
];
