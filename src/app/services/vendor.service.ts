import { Injectable } from '@angular/core';
import { Environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  env: Environment = new Environment();
  constructor(
    private httpClient: HttpClient
  ) { }

  addProduct(data: any) {
    return this.httpClient.post(this.env.getUrl() +
        "/add/", data, {
        headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getProducts() {
   return this.httpClient.get(this.env.getUrl() + "/product/");
  }

  updateProducts(data: any) {
   return this.httpClient.put(this.env.getUrl() +
   "/update/", data, {
   headers: new HttpHeaders().set('Content-Type', "application/json")
 })
 }

   deleteProducts(id: any) {
   return this.httpClient.delete(this.env.getUrl() + "/delete/"+id);
 }
}
