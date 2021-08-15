import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username: any;
  password: any;
  role: any;

  responseMessage:any;

  constructor(private usersService: UsersService) { }

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
    this.usersService.signUp(data).subscribe((response:any) => {
      console.log(response);
      this.responseMessage=response?.message;
    }, (error) => {
      console.log(error);
      this.responseMessage=error;
    });
 // }
  }
}
