import { Component, OnInit } from '@angular/core';
import { RootCategoryService } from '../../../shared/services/root-category.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  categories=[];

  constructor(private rootservice: RootCategoryService, private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
    this.getAllCategories();

  }

  async getAllCategories(){
    await this.rootservice.getRootCategories()
    .subscribe((res) =>{
      this.categories=res['categories'];
      console.log('All Categories', res);
    }, (err)=>{
      console.log('Error while fetching the categories', err);
    })
  }

  async deleteCategory(categoryId){
    await this.rootservice.deleteCategories(categoryId)
    .subscribe((res) =>{
      console.log('Category Deleted', res);
      this.getAllCategories();
    }, (err) =>{
      console.log('Error while deleting the category', err);
    });
    
    
  }

}
