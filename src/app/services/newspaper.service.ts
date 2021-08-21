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

  addVendor(data: any) {
    return this.httpClient.post(this.env.getUrl() +
        "/vendor/addVendor/", data, {
        headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getVendors() {
   return this.httpClient.get(this.env.getUrl() + "/vendor/getAllVendor/");
  }

  updateVendor(data: any,id:any) {
   return this.httpClient.post(this.env.getUrl() +
   "/vendor/updateVendor/"+id, data, {
   headers: new HttpHeaders().set('Content-Type', "application/json")
 })
 }

   deleteVendor(id: any) {
   return this.httpClient.delete(this.env.getUrl() + "/vendor/deleteVendor/"+id);
 }
}
