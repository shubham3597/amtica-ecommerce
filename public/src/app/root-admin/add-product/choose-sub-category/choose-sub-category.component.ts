import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RootCategoryService } from 'src/shared/services/root-category.service';
import { ActivatedRoute, Route, NavigationExtras } from '@angular/router';
import {
Router, Event, NavigationStart, RoutesRecognized,
RouteConfigLoadStart, RouteConfigLoadEnd,
NavigationEnd, NavigationCancel, NavigationError
} from '@angular/router';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-choose-sub-category',
  templateUrl: './choose-sub-category.component.html',
  styleUrls: ['./choose-sub-category.component.scss']
})
export class ChooseSubCategoryComponent implements OnInit {


  categoryId;
  categoryData = {
    categoryName: '',
    type: '',
    categoryDescription: '',
    subCategories: [],
    _id:''
  };
  subCategoriesData = new Array();
  product = new Array();

  parentCategory = {
    categoryName:'',
    _id:''
  };

  category = new Array();
  categoryList= new Array();
  firstCategory = '';
  
  constructor(private ngxService: NgxUiLoaderService,
    private router: Router, private rootService: RootCategoryService, private _activatedRoute: ActivatedRoute) {
    this.categoryId = this._activatedRoute.snapshot.paramMap.get('id');
  
    // !--ROUTER EVENTS--! //
   /* this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Navigation started.
        console.log(event.url);
  
      }
      else if (event instanceof RoutesRecognized) {
        // Router parses the URL and the routes are recognized.
      }
      else if (event instanceof RouteConfigLoadStart) {
        // Before the Router lazyloads a route configuration.
      }
      else if (event instanceof RouteConfigLoadEnd) {
        // Route has been lazy loaded.
      }
      else if (event instanceof NavigationEnd) {
        // Navigation Ended Successfully.
        console.log(event.url);
  
      }
      else if (event instanceof NavigationCancel) {
        // Navigation is canceled as the Route-Guard returned false during navigation.
      }
      else if (event instanceof NavigationError) {
        // Navigation fails due to an unexpected error.
        console.log(event.error);
      }
    });*/
  }
  
  reloadPage() {
    window.location.reload();
  }
  
  navigateToAddProduct(subCategory){
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "subCategory": subCategory
      }
    };
    this.router.navigate(['root-admin', 'add-product'], navigationExtras);
    console.log(navigationExtras);
  }
  
  ngOnInit() {
  
    this.subCategoriesData = [];
    this.category.push(this.categoryId);
  
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
    this.ngxService.start(); // start foreground loading with 'default' id
  
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
    this.getCategory(this.categoryId);

    this.getCategories().then((res)=>{
      this.categoryList.reverse();
      console.log(this.categoryList);
    });
    
  
  }

  async getCategories(){

    if(this.category.length > 0){
       await this.rootService.getCategory(this.category[0])
        .subscribe((res)=>{
          console.log(res);
              this.category.push(res['category']['parentCategories'][0]);
              this.categoryList.push(res['category']);
              this.rootService.getCategory(this.category[1])
              .subscribe((cat1)=>{
                console.log(cat1);
                this.category.push(cat1['category']['parentCategories'][0]);
                this.categoryList.push(cat1['category']);
                if(this.category.length>2 && this.category[2]!=null){
                this.rootService.getCategory(this.category[2])
                .subscribe((cat2)=>{
                  console.log(cat2);
                  this.category.push(cat2['category']['parentCategories'][0]);
                  this.categoryList.push(cat2['category']);
                  if(this.category.length>3 && this.category[3]!=null){
                  this.rootService.getCategory(this.category[3])
                  .subscribe((cat3)=>{
                    console.log(cat3)
                    this.category.push(cat3['category']['parentCategories'][0]);
                    this.categoryList.push(cat3['category']);
                    if(this.category.length > 4 && this.category[4]!=null){
                    this.rootService.getCategory(this.category[4])
                    .subscribe((cat4)=>{
                      console.log(cat4);
                      this.categoryList.push(cat4['category']);
                      this.category.push(cat4['category']['parentCategories'][0]);
                    });
                  }
                  });
                }
                });
              }
            });
            
      
        }, (err)=>{
          console.log('Error while fetching categories', err);
        });
   
    }


  }
  
  async getAllSubcategories() {
    var count = -1;
    if (this.categoryData['subCategories'].length > 0) {
      for (var i = 0; i < this.categoryData['subCategories'].length; i++) {
  
        await this.rootService.getCategory(this.categoryData['subCategories'][i])
          .subscribe((res) => {
           // console.log('Category Name: ',res['category']['categoryName'],'\nCategory Status: ',res['category']['active']);
            if(res['category']['active'] == true){
              this.subCategoriesData.push(res['category']);
            }
              
          }, (err) => {
            console.log('Error Occured while fetching Sub Categories', err);
          })
      }
    }
  
  }
  
  async getProducts(){
    if(this.categoryData['products'].length > 0){
      for (var i = 0; i < this.categoryData['products'].length; i++) {
  
        await this.rootService.getProduct(this.categoryData['products'][i])
          .subscribe((res) => {
           // console.log('Category Name: ',res['category']['categoryName'],'\nCategory Status: ',res['category']['active']);
            if(res['product']['active'] == true){
              this.product.push(res['product']);
            }
              
          }, (err) => {
            console.log('Error Occured while fetching Products', err);
          })
      }
      
    }
  }
  
  async getCategory(categoryId) {
    await this.rootService.getCategory(categoryId)
      .subscribe((res) => {
        this.categoryData = res['category'];
        this.rootService.getCategory(res['category']['parentCategories'][0])
        .subscribe((cat)=>{
          console.log('Parent Category', cat);
          this.parentCategory = cat['category'];
        })
        console.log('Category Fetched', res);
        this.getAllSubcategories();
        this.getProducts();
        console.log('Subcategories Fetched', this.subCategoriesData);
        console.log('Products', this.product);
      }, (err) => {
        console.log('Error while fetching Category', err);
      })
  }
  
  async addSubCategory() {
    const subCategoryData = new Object();
  
    const { value: formValues } = await Swal({
      title: 'Sub Category for ' + this.categoryData['categoryName'],
      html:
        '<label For=\'input1\'> Category Name</label>' +
        '<input id="input1" class="swal2-input">' +
        '<label For=\'input2\'> Category Description</label>' +
        '<textarea id="input2" class="swal2-input"></textarea>',
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      preConfirm: () => {
        return [
          document.getElementById('input1')['value'],
          document.getElementById('input2')['value']
  
        ]
      }
    })
    if (formValues) {
      subCategoryData['categoryName'] = formValues[0];
      subCategoryData['categoryDescription'] = formValues[1];
      subCategoryData['type'] = 'sub';
      subCategoryData['parentCategories'] = [{
  
      }];
      
    console.log('Sub Category Form Data', subCategoryData);
    this.rootService.addCategory(subCategoryData)
      .subscribe((res) => {
        console.log('Sub Category Added', res);
        //UPDATING THE SUB CATEGORY TO PUSH PARENT CATEGORY ID INTO IT
        const updateSubCategoryData = {
          parentCategories: [{
            _id: this.categoryId
          }]
        }
        this.rootService.updateCategory(res['category']._id, updateSubCategoryData)
          .subscribe((res) => {
            console.log('Sub Category has been Updaed as well with Parent ID', res);
  
            //UPDATING THE PARENT CATEGORY TO PUSH SUB CATEGORY ID INTO IT
            if (!this.categoryData['subCategories'].includes(res['category']._id)) {
              this.categoryData['subCategories'].push({ _id: res['category']._id });
              this.rootService.updateCategory(this.categoryId, this.categoryData)
                .subscribe((res) => {
  
                  console.log('Root Category has been updated!', res);
                  Swal({
                    type: 'success',
                    title: subCategoryData['categoryName'] + ' has been added!',
                    showConfirmButton: false,
                    timer: 1500
                  }).then((res) => {
                    this.subCategoriesData = [];
                    this.ngOnInit();
                  });
  
                }, (err) => {
                  console.log('Error while updating the root category', err);
                })
            }
          }, (err) => {
            console.log('Error While Updating Sub Category', err);
          });
  
      }, (err) => {
        console.log('Error while adding the sub category', err);
      })
  
    }
  }
  
  async updateCategory(categoryId, categoryName, categoryDescription){
    const subCategoryData = new Object();
  
    const { value: formValues } = await Swal({
      title: 'Update Category - ' + categoryName,
      html:
        '<label For=\'input1\'> Category Name</label>' +
        '<input id="input1" class="swal2-input" value='+categoryName+'>' +
        '<label For=\'input2\'> Category Description</label>' +
        '<textarea id="input2" class="swal2-input">'+categoryDescription+'</textarea>',
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      preConfirm: () => {
        return [
          document.getElementById('input1')['value'],
          document.getElementById('input2')['value']
  
        ]
      }
    })
    if (formValues) {
      subCategoryData['categoryName'] = formValues[0];
      subCategoryData['categoryDescription'] = formValues[1];
      
    console.log('Sub Category Form Data', subCategoryData);
        this.rootService.updateCategory(categoryId, subCategoryData)
        .subscribe((res)=>{
          console.log('Category Updated', res);
          Swal({
            type: 'success',
            title: 'Category has been updated!',
            showConfirmButton: false,
            timer: 1500
          }).then((res) => {
            this.subCategoriesData = [];
            this.ngOnInit();
          });
        }, (err)=>{
          console.log('Error while updating the category', err);
        })
    }
  }
  
  async deleteCategory(categoryId){
    const swalWithBootstrapButtons = Swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      const categoryData ={
        active: 'false'
      }
      if (result.value) {
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ).then((thenRes)=>{
          this.rootService.updateCategory(categoryId, categoryData)
          .subscribe((res)=>{
            console.log('Category marked with status as not active', res);
          }, (err)=>{
            console.log('Error while marking as inactive', err)
          });  
          this.subCategoriesData = [];
          this.ngOnInit();
        });
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          'Cancelled',
          'Category was not deleted :)',
          'error'
        )
      }
    });
  
  }
  
}
