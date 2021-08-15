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
// import { LoaderComponent } from './Shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    // LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminModuleModule
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:NetworkInterceptor,multi:true}],
  bootstrap: [AppComponent],
  exports:[AdminModuleModule,MaterialModule]
})
export class AppModule { }
