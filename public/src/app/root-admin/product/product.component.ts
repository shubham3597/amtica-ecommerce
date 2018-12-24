import { Component, OnInit } from '@angular/core';
import { RootCategoryService } from '../../../shared/services/root-category.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
import Swal from 'sweetalert2';
import { ActivatedRoute, Route, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product = {
    active:'',
    category:[],
    createdDate:'',
    description:'',
    itemPicture:'',
    name:'',
    otherDetails:[],
    _id:''
  }

  categoryData = {
    categoryName: '',
    type: '',
    categoryDescription: '',
    subCategories: [],
    _id:''
  };

  productId;
  imageFile: File;

  constructor(private rootservice: RootCategoryService, private ngxService: NgxUiLoaderService,
    private rootService: RootCategoryService, private _activatedRoute: ActivatedRoute) { 
    this.productId = this._activatedRoute.snapshot.paramMap.get('productid');
  }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
    this.getProduct(this.productId);
  }

  async getProduct(productId){
    await this.rootService.getProduct(productId)
    .subscribe((res) => {
      this.product = res['product'];
      console.log('Product Fetched', res);
      this.rootService.getCategory(this.product['category'][0])
      .subscribe((res)=>{
        console.log('Category Fetched', res['category']['categoryName']);

      })
    }, (err) => {
      console.log('Error while fetching Product', err);
    })
  }

  OnSelectedFile(event){
    this.imageFile = <File>event.target.files[0];
    console.log('Image File', this.imageFile);
    const file = new Object();
    file['itemPicture'] = this.imageFile;
    console.log(file);
    this.rootService.updateImage(this.productId, this.imageFile)
    .subscribe((res)=>{
      console.log('Image Updated', res);
    },(err)=>{
      console.log('Error while uploading image', err)
    })
  }

}
