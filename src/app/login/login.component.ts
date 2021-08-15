import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  role: any;

  responseMessage:any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

   userLogin() {
    // console.log("this is saurav trying to login "+this.username+"-----"+this.password);
    // this.loginService.loginUser(this.username,this.password);

    var data = {
      userName: this.username,
      userPassword: this.password,
      userRole: this.role
    }
    // if(this.username == undefined || this.password== undefined || this.role==undefined){

    // }else{
    this.loginService.signUp(data).subscribe((response:any) => {
      console.log(response);
      this.responseMessage=response?.message;
    }, (error) => {
      console.log(error);
      this.responseMessage=error;
    });
 // }
  }

}
