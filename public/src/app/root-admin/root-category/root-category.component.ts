import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RootCategoryService } from 'src/shared/services/root-category.service';
import { ActivatedRoute, Route } from '@angular/router';
import {
Router, Event, NavigationStart, RoutesRecognized,
RouteConfigLoadStart, RouteConfigLoadEnd,
NavigationEnd, NavigationCancel, NavigationError
} from '@angular/router';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
selector: 'app-root-category',
templateUrl: './root-category.component.html',
styleUrls: ['./root-category.component.scss']
})
export class RootCategoryComponent implements OnInit {

categoryId;
categoryData = {
  categoryName: '',
  type: '',
  categoryDescription: '',
  subCategories: []
};
subCategoriesData = new Array();

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

ngOnInit() {

  this.subCategoriesData = [];

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

async getCategory(categoryId) {
  await this.rootService.getCategory(categoryId)
    .subscribe((res) => {
      this.categoryData = res['category'];
      console.log('Category Fetched', res);
      this.getAllSubcategories();
      console.log('Subcategories Fetched', this.subCategoriesData);
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
      '<input id="input2" class="swal2-input">',
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
