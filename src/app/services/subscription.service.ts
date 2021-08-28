import { Injectable } from '@angular/core';
import { Environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  env: Environment = new Environment();
  constructor(
    private httpClient: HttpClient
  ) { }

  subscriptionPaper(data: any) {
    return this.httpClient.post(this.env.getUrl() +
        "/papersubscription/subscribe/", data, {
        headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getMySubscriptionForUser(id:any) {
   return this.httpClient.get(this.env.getUrl() + "/papersubscription/getDetailForUserByUserId/"+id);
  }

  getExpiredSubscriptionForUser(id:any) {
    return this.httpClient.get(this.env.getUrl() + "/papersubscription/getExpiredDetailForUserByUserId/"+id);
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
