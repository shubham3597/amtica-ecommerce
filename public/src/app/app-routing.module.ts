import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootAdminComponent } from './root-admin/root-admin.component';
import { HomeComponent } from './home/home.component';
import { AddCategoryComponent } from './root-admin/add-category/add-category.component';
import { RootAdminHomeComponent } from './root-admin/root-admin-home/root-admin-home.component';
import { ListCategoriesComponent } from './root-admin/list-categories/list-categories.component';
import { RootCategoryComponent } from './root-admin/root-category/root-category.component';
import { ProductComponent } from './root-admin/product/product.component';
import { AddProductComponent } from './root-admin/add-product/add-product.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'root-admin', component: RootAdminHomeComponent},
  { path:'root-admin/add-category', component: AddCategoryComponent },
  { path:'root-admin/list-categories', component: ListCategoriesComponent },
  { path:'root-admin/category/:id', component: RootCategoryComponent },
  { path:'product/:productid', component:ProductComponent },
  { path:'root-admin/add-product', component:AddProductComponent, data:{} }

]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
