import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RootCategoryService {

  BASE_API_URL = environment.BASE_API_URL;

  constructor(private _http: HttpClient) { }

  addCategory(categoryData){
    return this._http.post(this.BASE_API_URL+'/categories', categoryData);
  }

  getCategory(categoryId){
    return this._http.get(this.BASE_API_URL+'/categories/'+categoryId);
  }

  getRootCategories(){
    return this._http.get(this.BASE_API_URL+'/categories');
  }

  deleteCategories(categoryId){
    return this._http.delete(this.BASE_API_URL+'/categories/'+categoryId);
  }

  updateCategory(categoryId, categoryData){
    return this._http.put(this.BASE_API_URL+'/categories/'+categoryId, categoryData);
  }

  addProduct(product){
    return this._http.post(this.BASE_API_URL+'/products', product);
  }

  getProduct(productId){
    return this._http.get(this.BASE_API_URL+'/products/'+productId);
  }

  getProducts(){
    return this._http.get(this.BASE_API_URL+'/products');
  }

  updateProduct(productId, productData){
    return this._http.put(this.BASE_API_URL+'/products/add-feature/'+productId, productData);
  }

  updateImage(productId, fileToUpload:File){
    const formData: FormData = new FormData();
    formData.append('itemPicture', fileToUpload, fileToUpload.name);
    console.log(formData);
    return this._http.put(this.BASE_API_URL+'/products/updateImage/'+productId, formData);
  }
}
