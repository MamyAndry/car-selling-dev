import { Routes } from '@angular/router';
import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';
import { LoginComponent } from './components/login/login/login.component';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
  {path : "", component : AnnouncementListComponent},
    { path : "announcement", component : AnnouncementListComponent },
  { path : "login", component : LoginComponent },
  { path : "", component : IndexComponent },
];
