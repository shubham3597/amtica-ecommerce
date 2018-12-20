import { Component, OnInit } from '@angular/core';
import { RootCategoryService } from '../../../../shared/services/root-category.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products=[];

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
    await this.rootservice.getProducts()
    .subscribe((res) =>{
      this.products=res['products'];
      console.log('All Products', res);
    }, (err)=>{
      console.log('Error while fetching the products', err);
    })
  }

}
