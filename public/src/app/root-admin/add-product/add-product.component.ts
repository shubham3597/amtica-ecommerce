import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RootCategoryService } from '../../../shared/services/root-category.service';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
import { ActivatedRoute, Route } from '@angular/router';
import {
Router, Event, NavigationStart, RoutesRecognized,
RouteConfigLoadStart, RouteConfigLoadEnd,
NavigationEnd, NavigationCancel, NavigationError
} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productsForm: FormGroup;
  otherDetails = [1];
  category = [];

  constructor(private rootservice: RootCategoryService, private router: Router,  private ngxService: NgxUiLoaderService, private _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.queryParams
    .subscribe((res)=>{
      console.log('Sub Category', res);
      this.category.push(res['subCategory']);
    })
  }

  ngOnInit() {
    this.initCreateProductForm();
  }

  initCreateProductForm() {
    
    this.productsForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      detail1: new FormControl(null),
      detail1desc: new FormControl(null)
    });
  }

  addDetails(){
    var lastDetail = this.otherDetails[this.otherDetails.length-1];
    if(this.productsForm.controls['detail'+lastDetail].value == null){
      //swal('Oops!', 'Please Fill up the last option before adding another option', 'error');
      console.log('Please Fill up the last detail before adding another option');
    }

    else{
      var newLastDetail = lastDetail+1;
      this.otherDetails.push(newLastDetail);
      this.productsForm.addControl('detail'+ newLastDetail, new FormControl(null, Validators.required));
     // this.productsForm.addControl('detail'+ newLastDetail+'desc', new FormControl(null, Validators.required));
      console.log('Details Array', this.otherDetails);
      console.log('Details Form', this.productsForm.controls);
    }

  }

  removeLastDetail(){
    var lastDetail = this.otherDetails[this.otherDetails.length-1];
    this.otherDetails.pop();
    this.productsForm.removeControl('detail'+lastDetail);
   // this.productsForm.removeControl('detail'+lastDetail+'desc');
    console.log('Details Array', this.otherDetails);
    console.log('Details Form', this.productsForm.controls);
  }

  async createProduct(){
    const product ={
      name:this.productsForm.controls.name.value,
      description:this.productsForm.controls.description.value,
      itemPicture:'default.png',
      category:this.category,
      otherDetails:[{
      }]
    };
    for(var i = 0; i < this.otherDetails.length; i++){
      product.otherDetails[i]={
        "detailName":this.productsForm.controls['detail'+(i+1)].value,
       // "detailDescription":this.productsForm.controls['detail'+(i+1)+'desc'].value
      }
    }
    console.log('Category Form Data', product);

   await this.rootservice.addProduct(product)
    .subscribe((res)=>{
      console.log('Product Added', res);

      const categoryData = {
        products:[{
          _id:res['product']._id
        }]
      }
      Swal({
        type: 'success',
        title: product.name+' has been added!',
        showConfirmButton: false,
        timer: 1500
      }).then((res) =>{
        this.router.navigate(['root-admin', 'category', this.category[0] ])  
      })

     /* this.rootservice.updateCategory(this.category[0], categoryData)
      .subscribe((res) =>{
        console.log('Product added to the category', res);

      }, (err)=>{
        console.log('Error while adding the product to category', err);
      })*/
    }, (err)=>{
      console.log('There\s some error while adding the category', err);
      Swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong, please try again later!',
      })
    });
    this.productsForm.reset();
  }


}
