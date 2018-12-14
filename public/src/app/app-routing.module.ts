import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootAdminComponent } from './root-admin/root-admin.component';
import { HomeComponent } from './home/home.component';
import { AddCategoryComponent } from './root-admin/add-category/add-category.component';
import { RootAdminHomeComponent } from './root-admin/root-admin-home/root-admin-home.component';
import { ListCategoriesComponent } from './root-admin/list-categories/list-categories.component';
import { RootCategoryComponent } from './root-admin/root-category/root-category.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'root-admin', component: RootAdminHomeComponent},
  {path:'root-admin/add-category', component: AddCategoryComponent},
  {path:'root-admin/list-categories', component: ListCategoriesComponent},
  {path:'root-admin/category/:id', component: RootCategoryComponent}

]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
