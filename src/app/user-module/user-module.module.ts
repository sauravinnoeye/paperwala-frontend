import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserModuleComponent } from './user-module.component';
import { MaterialModule } from '../Shared/material-module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';
import { ViewNewspaperDialogComponent } from './dialog/view-newspaper-dialog/view-newspaper-dialog.component';


@NgModule({
  declarations: [
    UserModuleComponent,
    NavbarComponent,
    ViewVendorComponent,
    ViewNewspaperDialogComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class UserModuleModule { }
