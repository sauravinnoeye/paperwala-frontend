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
            redirectTo: 'admin/module'
        },
        // {
        //     path: 'dashboard',
        //     loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
        // },
        // {
        //     path: 'screen1',
        //     loadChildren: () => import('./screen1/screen1.module').then(m => m.Screen1Module)
        // },
        {
            path: 'vendor',
            component: ManageVendorComponent
        },
        // {path: 'add/new/donor',component: AddNewDonorDialogComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
