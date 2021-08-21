import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserModuleComponent } from './user-module.component';
import { MaterialModule } from '../Shared/material-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserModuleComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class UserModuleModule { }
