import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';
import { Userlogin } from '../../../../mapping/login/Userlogin';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonModal } from '@ionic/angular/standalone';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { User } from 'src/mapping/login/User';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, IonicModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        height: '0',
        opacity: '0'
      })),
      state('*', style({
        height: '*',
        opacity: '1'
      })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent {
  isLoginPage: boolean = false;
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  user : Userlogin = new Userlogin
  userIn : User = new User
  error ?: string = ""



  constructor(private loginService : LoginService, private router : Router){
    this.user.email = "dianarakoto9@gmail.com"
    this.user.password = "1234567huit"
    //localStorage.removeItem("session_user")

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = event.urlAfterRedirects === '/login';
    });
  }

  registerFormVisible: boolean = true;



  toggleForms() {
    this.registerFormVisible = !this.registerFormVisible;
  }

  isLogged(){
    return (localStorage.getItem("session_user") != undefined)

  }

  signin(){
    this.loginService.signin(this.userIn).subscribe(
      (data)=>{
        console.log(data)
      }
    )
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
          this.router.navigate(["/announcement"])
          window.location.reload();
        }else{
          this.error = data.error
        }
      }
    )
    //this.user = new User
  }

  logout(){
    localStorage.removeItem("session_user")
    this.router.navigate(["/announcement"])
  }
}
