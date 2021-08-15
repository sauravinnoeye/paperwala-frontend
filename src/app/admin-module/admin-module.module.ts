import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../Shared/material-module';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';
import { AddNewVendorDialogComponent } from './dialog/add-new-vendor-dialog/add-new-vendor-dialog.component';
import { EditVendorDialogComponent } from './dialog/edit-vendor-dialog/edit-vendor-dialog.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../Shared/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from '../services/network.interceptor';

@NgModule({
  declarations: [
    AdminModuleComponent,
    NavbarComponent,
    ManageVendorComponent,
    AddNewVendorDialogComponent,
    EditVendorDialogComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports:[LoaderComponent],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:NetworkInterceptor,multi:true}]
})
export class AdminModuleModule { }
