import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RootCategoryService } from '../../../shared/services/root-category.service';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  otherDetails=[1];
  detailsForm: FormGroup;

  constructor(private rootservice: RootCategoryService,  private ngxService: NgxUiLoaderService ) { }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
    this.initCreateCategoryForm();
  }

  addDetails(){
    var lastDetail = this.otherDetails[this.otherDetails.length-1];
    if(this.detailsForm.controls['detail'+lastDetail].value == null || this.detailsForm.controls['detail'+lastDetail+'desc'].value == null){
      //swal('Oops!', 'Please Fill up the last option before adding another option', 'error');
      console.log('Please Fill up the last detail before adding another option');
    }

    else{
      var newLastDetail = lastDetail+1;
      this.otherDetails.push(newLastDetail);
      this.detailsForm.addControl('detail'+ newLastDetail, new FormControl(null, Validators.required));
      this.detailsForm.addControl('detail'+ newLastDetail+'desc', new FormControl(null, Validators.required));
      console.log('Details Array', this.otherDetails);
      console.log('Details Form', this.detailsForm.controls);
    }

  }

  removeLastDetail(){
    var lastDetail = this.otherDetails[this.otherDetails.length-1];
    this.otherDetails.pop();
    this.detailsForm.removeControl('detail'+lastDetail);
    this.detailsForm.removeControl('detail'+lastDetail+'desc');
    console.log('Details Array', this.otherDetails);
    console.log('Details Form', this.detailsForm.controls);
  }

  initCreateCategoryForm() {
    
    this.detailsForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      detail1: new FormControl(null),
      detail1desc: new FormControl(null)
    });
  }

  async createCategory(){
    const category ={
      categoryName:this.detailsForm.controls.name.value,
      categoryDescription:this.detailsForm.controls.description.value,
      otherDetails:[{
      }]
    };
    for(var i = 0; i < this.otherDetails.length; i++){
      category.otherDetails[i]={
        "detailName":this.detailsForm.controls['detail'+(i+1)].value,
        "detailDescription":this.detailsForm.controls['detail'+(i+1)+'desc'].value
      }
    }
    console.log('Category Form Data', category);

   await this.rootservice.addRootCategory(category)
    .subscribe((res)=>{
      console.log('Category Added', res);
      Swal({
        type: 'success',
        title: category.categoryName+' has been added!',
        showConfirmButton: false,
        timer: 1500
      })
    }, (err)=>{
      console.log('There\s some error while adding the category', err);
      Swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong, please try again later!',
      })
    });
    this.detailsForm.reset();
  }

}
