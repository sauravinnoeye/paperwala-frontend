import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';

const routes: Routes = [
  {
    path: '',
    component: AdminModuleComponent,
    children: [
      {
        path: '',
        component: ManageVendorComponent
      },
      {
        path: '',
        redirectTo: 'admin/module'
      },
      {
        path: 'vendor',
        component: ManageVendorComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
