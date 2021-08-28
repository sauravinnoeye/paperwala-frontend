import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveSubscriptionComponent } from './active-subscription/active-subscription.component';
import { ExpiredSubscriptionComponent } from './expired-subscription/expired-subscription.component';
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
      {
        path: 'active/subscription',
        component: ActiveSubscriptionComponent
      },
      {
        path: 'expired/subscription',
        component: ExpiredSubscriptionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorModuleRoutingModule { }
