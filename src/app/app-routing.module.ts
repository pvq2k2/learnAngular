import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './pages/admin/products/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/products/product-edit/product-edit.component';
import { ProductManagerComponent } from './pages/admin/products/product-manager/product-manager.component';
import { AdminLayoutComponent } from './pages/layouts/admin/admin-layout/admin-layout.component';

const routes: Routes = [
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
        path: 'product',
        children: [
          {
            path: '',
            component: ProductManagerComponent
          },
          {
            path: 'add',
            component: ProductAddComponent
          },
          {
            path: ':id/edit',
            component: ProductEditComponent
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
