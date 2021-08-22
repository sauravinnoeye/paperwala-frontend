import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  address:any;
  contact:any;
  hideOrShow: boolean = false;
  data:any;

  responseMessage: any;

  constructor(private usersService: UsersService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  usersingup(value: any) {
    console.log(value)
    if(this.role == "Admin"){
      this.data = {
        userName: this.username,
        userPassword: this.password,
        userRole: this.role
      }
    }

    else{
      this.data = {
        userName: this.username,
        userPassword: this.password,
        userRole: this.role,
        address: this.address,
        contact: this.contact
      }
    }

    this.usersService.signUp(this.data).subscribe((response: any) => {
      console.log(response);
      this.responseMessage = response?.message;
      this.openSnackBar(this.responseMessage,"Close");
      this.router.navigateByUrl('/login');
    }, (error) => {
      console.log(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else
      this.responseMessage = "Something went Wrong."
      this.openSnackBar(this.responseMessage,"Close");
    });

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration:2000
    });
  }

  valid(value: any) {
    if (value == "User")
      this.hideOrShow = true;
    else
      this.hideOrShow = false;
    console.log(value)
  }
}
