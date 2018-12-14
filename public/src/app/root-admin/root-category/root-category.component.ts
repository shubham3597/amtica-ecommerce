import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
import { RootCategoryService } from 'src/shared/services/root-category.service';
import { ActivatedRoute } from '@angular/router';
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
    categoryName:'',
    type:'',
    categoryDescription:''
  };
  subCategoryData = new Array();

  constructor(private ngxService: NgxUiLoaderService, private rootService: RootCategoryService, private _activatedRoute: ActivatedRoute) {
    this.categoryId = this._activatedRoute.snapshot.paramMap.get('id');
    this._activatedRoute.params
    .subscribe((res)=>{
      //console.log(this._activatedRoute);
      this.ngOnInit();
    });
   }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
    this.getCategory(this.categoryId);
  }

  async getCategory(categoryId){
    await this.rootService.getCategory(categoryId)
    .subscribe((res) =>{
      this.categoryData = res['category'];
      console.log('Category Fetched', res);
    }, (err) =>{
      console.log('Error while fetching Category', err);
    })
  }

  async addSubCategory(){
    const subCategoryData = new Object();

    const {value: formValues} = await Swal({
      title: 'Sub Category for '+this.categoryData['categoryName'],
      html:
        '<label For=\'input1\'> Category Name</label>'+
        '<input id="input1" class="swal2-input">' +
        '<label For=\'input2\'> Category Description</label>'+
        '<input id="input2" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('input1')['value'],
          document.getElementById('input2')['value']
        
        ]
      }
    })
    
    if (formValues) {
      subCategoryData['categoryName'] =formValues[0];
      subCategoryData['categoryDescription'] =formValues[1];
      subCategoryData['type']='sub';
      subCategoryData['parentCategories']= [{

      }];
      
    }
    console.log('Sub Category Form Data', subCategoryData);
    this.rootService.addCategory(subCategoryData)
    .subscribe((res)=>{
      console.log('Sub Category Added', res);
      //UPDATING THE SUB CATEGORY TO PUSH PARENT CATEGORY ID INTO IT
      const updateSubCategoryData= {
        parentCategories:[{ _id:this.categoryId
        }]
      }
      this.rootService.updateCategory(res['category']._id,updateSubCategoryData )
      .subscribe((res)=>{
        console.log('Sub Category has been Updaed as well with Parent ID', res);

      //UPDATING THE PARENT CATEGORY TO PUSH SUB CATEGORY ID INTO IT
      if(!this.categoryData['subCategories'].includes(res['category']._id)){
        this.categoryData['subCategories'].push({_id:res['category']._id});
        this.rootService.updateCategory(this.categoryId,this.categoryData)
        .subscribe((res) =>{
          
          console.log('Root Category has been updated!', res);       
      Swal({
        type: 'success',
        title: subCategoryData['categoryName']+' has been added!',
        showConfirmButton: false,
        timer: 1500
      });
        }, (err) =>{
          console.log('Error while updating the root category', err);
        })
      }
      }, (err)=>{
        console.log('Error While Updating Sub Category',err);
      });

    }, (err)=>{
      console.log('Error while adding the sub category', err);
    })


    
  }

}
