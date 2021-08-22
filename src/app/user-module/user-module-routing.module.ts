import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModuleComponent } from './user-module.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';

const routes: Routes = [{
  path: '',
  component: UserModuleComponent,
  children: [
      {
          path: '',
          redirectTo: 'user/module'
      },
      {
          path: 'vendor',
          component: ViewVendorComponent
      },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
