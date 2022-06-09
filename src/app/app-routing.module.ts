import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { ProductFormsComponent } from './pages/admin/products/product-forms/product-forms.component';
import { ProductManagerComponent } from './pages/admin/products/product-manager/product-manager.component';
import { UserManagerComponent } from './pages/admin/user/user-manager/user-manager.component';
import { AdminLayoutComponent } from './pages/layouts/admin/admin-layout/admin-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'student',
      //   pathMatch: 'full'
      // },
      {
        path: 'user', canActivate:[AdminGuard],
        children: [
          {
            path: '',
            component: UserManagerComponent
          }
        ] 
      },
      
      {
        path: 'product', canActivate:[AdminGuard], 
        children: [
          {
            path: '',
            component: ProductManagerComponent
          },
          {
            path: 'add',
            component: ProductFormsComponent
          },
          {
            path: ':id/edit',
            component: ProductFormsComponent
          }
        ]
      },
]
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
