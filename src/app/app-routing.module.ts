import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductaddComponent } from './pages/admin/products/productadd/productadd.component';
import { ProductmanagerComponent } from './pages/admin/products/productmanager/productmanager.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { 
    path: 'admin/product',
    component: ProductmanagerComponent,
    children: [
      {
        path: 'add',
        component: ProductaddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
