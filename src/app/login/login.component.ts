import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  role: any;
  data:any;
  responseMessage: any;

  constructor(private usersService: UsersService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  userLogin(value: any) {
    localStorage.setItem('email', "123");
    this.router.navigate(['/admin/module']);
    console.log(value)
      this.data = {
        userName: this.username,
        userPassword: this.password,
      }

    this.usersService.signUp(this.data).subscribe((response: any) => {
      console.log(response);
      // this.responseMessage = response?.message;
    }, (error) => {
      console.log(error);
      this.responseMessage = error;
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
  
}
