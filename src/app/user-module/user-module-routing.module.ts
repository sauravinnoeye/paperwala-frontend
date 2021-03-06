import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpiredSubscriptionComponent } from './expired-subscription/expired-subscription.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { UserModuleComponent } from './user-module.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';

const routes: Routes = [{
  path: '',
  component: UserModuleComponent,
  children: [
    {
      path: '',
      component: ViewVendorComponent
    },
    {
      path: '',
      redirectTo: 'user/module'
    },
    {
      path: 'vendor',
      component: ViewVendorComponent
    },
    {
      path: 'my/subscription',
      component: MySubscriptionComponent
    },
    {
      path: 'expired/subscription',
      component: ExpiredSubscriptionComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
