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
import { AddSubCategoryComponent } from './root-admin/add-sub-category/add-sub-category.component';
import { ListSubCategoriesComponent } from './root-admin/list-sub-categories/list-sub-categories.component';
import { ChooseCategoryComponent } from './root-admin/add-product/choose-category/choose-category.component';
ChooseCategoryComponent


const routes: Routes = [
  { path: '', redirectTo: '/root-admin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'root-admin', component: RootAdminHomeComponent},
  { path:'root-admin/add-category', component: AddCategoryComponent },
  { path:'root-admin/list-categories', component: ListCategoriesComponent },
  { path:'root-admin/category/:id', component: RootCategoryComponent },
  { path:'product/:productid', component:ProductComponent },
  { path:'root-admin/add-product', component:AddProductComponent, data:{} },
  { path:'root-admin/product/choose-category', component:ChooseCategoryComponent },
  { path:'root-admin/add-sub-category', component: AddSubCategoryComponent },
  { path:'root-admin/list-sub-categories', component: ListSubCategoriesComponent },

]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
