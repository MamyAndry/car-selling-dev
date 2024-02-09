import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnnouncementListComponent } from "./components/announcement-list/announcement-list.component";
import { filter } from 'rxjs';
import { Userlogin } from '../mapping/login/Userlogin';
import { LoginService } from './services/login/login.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [FormsModule,RouterOutlet, RouterLink, RouterLinkActive, AnnouncementListComponent]

})

export class AppComponent{
  title = 'carselling';

}
