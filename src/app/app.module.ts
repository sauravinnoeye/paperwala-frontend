import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Shared/material-module';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { NetworkInterceptor } from './services/network.interceptor';
import { VendorModuleModule } from './vendor-module/vendor-module.module';
import { UserModuleModule } from './user-module/user-module.module';
// import { LoaderComponent } from './Shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminModuleModule,
    VendorModuleModule,
    UserModuleModule
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:NetworkInterceptor,multi:true}],
  bootstrap: [AppComponent],
  exports:[AdminModuleModule,MaterialModule,VendorModuleModule,UserModuleModule]
})
export class AppModule { }
