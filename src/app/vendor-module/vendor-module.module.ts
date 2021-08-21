import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorModuleRoutingModule } from './vendor-module-routing.module';
import { VendorModuleComponent } from './vendor-module.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../Shared/material-module';
import { ManageNewspaperComponent } from './manage-newspaper/manage-newspaper.component';
import { AddNewNewspaperDialogComponent } from './dialog/add-new-newspaper-dialog/add-new-newspaper-dialog.component';
import { EditNewspaperDialogComponent } from './dialog/edit-newspaper-dialog/edit-newspaper-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VendorModuleComponent,
    NavbarComponent,
    ManageNewspaperComponent,
    AddNewNewspaperDialogComponent,
    EditNewspaperDialogComponent
  ],
  imports: [
    CommonModule,
    VendorModuleRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class VendorModuleModule { }
