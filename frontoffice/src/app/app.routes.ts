import { Routes } from '@angular/router';
import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';
import { FavoriListComponent } from './components/favori-list/favori-list.component';
import { LoginComponent } from './components/login/login/login.component';

export const routes: Routes = [
  { path : "announcement", component : AnnouncementListComponent },
  { path : "favoris", component : FavoriListComponent },
  { path : "login", component : LoginComponent },
];
