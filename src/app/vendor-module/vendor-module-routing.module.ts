import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageNewspaperComponent } from './manage-newspaper/manage-newspaper.component';
import { VendorModuleComponent } from './vendor-module.component';
import { VendorModuleModule } from './vendor-module.module';

const routes: Routes = [
  {
    path: '',
    component: VendorModuleComponent,
    children: [
      {
        path: '',
        component: ManageNewspaperComponent
      },
      {
        path: '',
        redirectTo: 'vendor/module'
      },
      {
        path: 'newspaper',
        component: ManageNewspaperComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorModuleRoutingModule { }
