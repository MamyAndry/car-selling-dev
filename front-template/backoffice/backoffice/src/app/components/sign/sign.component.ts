import { Component } from '@angular/core';
import { User } from '../../../mapping/login/User';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { Userlogin } from '../../../mapping/login/Userlogin';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss'
})
export class SignComponent {
  user : Userlogin = new Userlogin
  error ?: string = ""
  constructor(private loginService : LoginService, private route : Router){
    this.user.email = "dianarakoto9@gmail.com"
    this.user.password = "1234567huit"
    localStorage.removeItem("session_user")
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
          this.route.navigate(["/carmodel"])
        }else{
          this.error = data.error
        }
      }
    )
    //this.user = new User
  }
}
