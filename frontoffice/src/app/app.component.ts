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

  isLoginPage: boolean = false;
  user : Userlogin = new Userlogin
  error ?: string = ""

  constructor(private loginService : LoginService, private router : Router){
    this.user.email = "dianarakoto9@gmail.com"
    this.user.password = "1234567huit"
    localStorage.removeItem("session_user")

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = event.urlAfterRedirects === '/login';
    });
  }

  login(){
    console.log(this.user)
    this.loginService.login(this.user).subscribe(
      (data) => {
        console.log(data)
        if(data.data == null){
          this.error = "Auth failed"
        }
        else if(data.error == null){
          let temp = data.data

          localStorage.setItem("session_user", JSON.stringify(temp))
          console.log(localStorage.getItem("session_user"))
          this.router.navigate(["/announcement"])
        }else{
          this.error = data.error
        }
      }
    )
    //this.user = new User
  }

  logout(){
    localStorage.removeItem("session_user")
    this.router.navigate(["/login"])
  }
}
