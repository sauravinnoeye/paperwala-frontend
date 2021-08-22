import { Injectable } from '@angular/core';
import { Environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {
  env: Environment = new Environment();
  constructor(
    private httpClient: HttpClient
  ) { }

  addNewspaper(data: any) {
    return this.httpClient.post(this.env.getUrl() +
        "/newspaper/addNewspaper/", data, {
        headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getNewspapers(id:any) {
   return this.httpClient.get(this.env.getUrl() + "/newspaper/getNewspaperByVendor/"+id);
  }

  updateNewspaper(data: any,id:any) {
   return this.httpClient.post(this.env.getUrl() +
   "/newspaper/updateNewspaper/"+id, data, {
   headers: new HttpHeaders().set('Content-Type', "application/json")
 })
 }

   deleteNewspaper(id: any) {
   return this.httpClient.delete(this.env.getUrl() + "/newspaper/deleteNewspaper/"+id);
 }
}
