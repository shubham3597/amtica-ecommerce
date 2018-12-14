import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RootCategoryService {

  BASE_API_URL = environment.BASE_API_URL;

  constructor(private _http: HttpClient) { }

  addRootCategory(categoryData){
    return this._http.post(this.BASE_API_URL+'/categories', categoryData);
  }

  getRootCategories(){
    return this._http.get(this.BASE_API_URL+'/categories');
  }

  deleteCategories(categoryId){
    return this._http.delete(this.BASE_API_URL+'/categories/'+categoryId);
  }
}
