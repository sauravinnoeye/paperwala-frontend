import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '/login', component: LoginComponent },
  { path: 'paperwala-frontend/signup', component: SignupComponent },
  {
    path: 'admin/module',
    loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule),
    canActivate: [AuthGuard]
},
{
  path: 'vendor/module',
  loadChildren: () => import('./vendor-module/vendor-module.module').then(m => m.VendorModuleModule),
  canActivate: [AuthGuard]
},
{
  path: 'user/module',
  loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule),
  canActivate: [AuthGuard]
},
{ path: '**',canActivate: [AuthGuard], redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
