import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModuleComponent } from './user-module.component';

const routes: Routes = [{
  path: '',
  component: UserModuleComponent,
  children: [
      {
          path: '',
          redirectTo: 'vendor/module'
      },
      // {
      //     path: 'newspaper',
      //     component: ManageNewspaperComponent
      // },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
