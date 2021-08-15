import { Injectable, Type } from '@angular/core';
import { Environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  env: Environment = new Environment();
  constructor(private httpClient: HttpClient) { }

  loginUser(user: any, pass: any) {
    console.log(user + " service");
    console.log(pass + " service");

  }
 
  signUp(data: any) {
    return this.httpClient.post(this.env.getUrl() +
      "/users/signUp", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }
}
