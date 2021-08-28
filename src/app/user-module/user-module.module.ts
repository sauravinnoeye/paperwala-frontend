import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserModuleComponent } from './user-module.component';
import { MaterialModule } from '../Shared/material-module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';
import { ViewNewspaperDialogComponent } from './dialog/view-newspaper-dialog/view-newspaper-dialog.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { ExpiredSubscriptionComponent } from './expired-subscription/expired-subscription.component';


@NgModule({
  declarations: [
    UserModuleComponent,
    NavbarComponent,
    ViewVendorComponent,
    ViewNewspaperDialogComponent,
    MySubscriptionComponent,
    ExpiredSubscriptionComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class UserModuleModule { }
