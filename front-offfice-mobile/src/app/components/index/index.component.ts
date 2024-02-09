
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnnouncementListComponent } from "../announcement-list/announcement-list.component";
import { filter } from 'rxjs';
import { Userlogin } from '../../../mapping/login/Userlogin';
import { LoginService } from '../../services/login/login.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header/header.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule,RouterOutlet, RouterLink, RouterLinkActive, AnnouncementListComponent, HeaderComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})


export class IndexComponent{
  title = 'carselling';


}

