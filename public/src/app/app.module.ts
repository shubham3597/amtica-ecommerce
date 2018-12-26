import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from  'ngx-ui-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootAdminComponent } from './root-admin/root-admin.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddCategoryComponent } from './root-admin/add-category/add-category.component';
import { RootAdminHomeComponent } from './root-admin/root-admin-home/root-admin-home.component';
import { ListCategoriesComponent } from './root-admin/list-categories/list-categories.component';

import { RootCategoryService } from '../shared/services/root-category.service';
import { RootCategoryComponent } from './root-admin/root-category/root-category.component';
import { AddSubCategoryComponent } from './root-admin/add-sub-category/add-sub-category.component';
import { ProductComponent } from './root-admin/product/product.component';
import { AddProductComponent } from './root-admin/add-product/add-product.component';
import { ListSubCategoriesComponent } from './root-admin/list-sub-categories/list-sub-categories.component';
import { ChooseCategoryComponent } from './root-admin/add-product/choose-category/choose-category.component';
import { ListProductsComponent } from './root-admin/product/list-products/list-products.component';
import { ChooseSubCategoryComponent } from './root-admin/add-product/choose-sub-category/choose-sub-category.component';
import { AddFeatureComponent } from './root-admin/product/add-feature/add-feature.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {

  "bgsColor": "#005fd5",
  "bgsOpacity": 0.9,
  "bgsPosition": "center-center",
  "bgsSize": 100,
  "bgsType": "three-bounce",
  "blur": 15,
  "fgsColor": "#FFF",
  "fgsPosition": "center-center",
  "fgsSize": 100,
  "fgsType": "wandering-cubes",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "overlayColor": "#002f6a",
  "pbColor": "#fff",
  "pbDirection": "ltr",
  "pbThickness": 5,
  "hasProgressBar": true,
  "text": "Please hold on...",
  "textColor": "#FFF",
  "textPosition": "center-center",
  "threshold": 500 // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    RootAdminComponent,
    NavbarComponent,
    HomeComponent,
    AddCategoryComponent,
    RootAdminHomeComponent,
    ListCategoriesComponent,
    RootCategoryComponent,
    AddSubCategoryComponent,
    ProductComponent,
    AddProductComponent,
    ListSubCategoriesComponent,
    ChooseCategoryComponent,
    ListProductsComponent,
    ChooseSubCategoryComponent,
    AddFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [RootCategoryService, {provide:LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
