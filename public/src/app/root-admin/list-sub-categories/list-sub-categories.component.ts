import { Component, OnInit } from '@angular/core';
import { RootCategoryService } from '../../../shared/services/root-category.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-sub-categories',
  templateUrl: './list-sub-categories.component.html',
  styleUrls: ['./list-sub-categories.component.scss']
})
export class ListSubCategoriesComponent implements OnInit {

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
    const swalWithBootstrapButtons = Swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons({
      title: 'Are you sure?',
      text: "You will delete all the subcategories and products too!",
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
          this.rootservice.deleteCategories(categoryId)
          .subscribe((res) =>{
            console.log('Category Deleted', res);
            if(res['categoryRemoved']['subCategories'].length != 0){
              for(var i = 0; i < res['categoryRemoved']['subCategories'].length; i ++){
                this.rootservice.deleteCategories(res['categoryRemoved']['subCategories'][i])
                .subscribe((res)=>{
                  console.log('Sub-category has been deleted as well', res);
                }, (err) =>{
                  console.log('Error while removing the subcategories', err)
                })
              }
            }
            Swal({
              type: 'success',
              title: 'Category and all it\'s subcategories have been deleted!',
              showConfirmButton: false,
              timer: 1500
            }).then((res) => {
              this.ngOnInit();
            });
          }, (err) =>{
            console.log('Error while deleting the category', err);
          });  
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

  async updateCategory(categoryId, categoryName, categoryDescription){
    const categoryData = new Object();
    console.log(categoryDescription);
  
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
      categoryData['categoryName'] = formValues[0];
      categoryData['categoryDescription'] = formValues[1];
      
    console.log('Category Form Data', categoryData);
        this.rootservice.updateCategory(categoryId, categoryData)
        .subscribe((res)=>{
          console.log('Category Updated', res);
          Swal({
            type: 'success',
            title: 'Category has been updated!',
            showConfirmButton: false,
            timer: 1500
          }).then((res) => {
            this.ngOnInit();
          });
        }, (err)=>{
          console.log('Error while updating the category', err);
        })
    }
  }


}
