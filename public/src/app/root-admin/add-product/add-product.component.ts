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
  category = new Array();
  categoryList= new Array();
  firstCategory = '';
  imageFile: File = null;

  questionForm: FormGroup;
  type: string = '';
  inputOptions = [1];
  displayType: string = 'None';

  constructor(private rootservice: RootCategoryService, private router: Router,  private ngxService: NgxUiLoaderService, private _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.queryParams
    .subscribe((res)=>{
      console.log('Sub Category', res);
      this.firstCategory = res['subCategory'];
     
    })
  }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
    this.initCreateProductForm();
    this.category.push(this.firstCategory);
    this.getCategories().then((res)=>{
      this.categoryList.reverse();
      console.log(this.categoryList);
    });

    this.initCreatequestionForm();

    
  }

  getAllCategories(categoryId){
    this.rootservice.getCategory(categoryId)
    .subscribe((category)=>{
      console.log(category['category']);
      this.category.push(category['category']['parentCategories'][0]);
      console.log(this.category.length);
    })
  }

  async getCategories(){

    if(this.category.length > 0){
       await this.rootservice.getCategory(this.category[0])
        .subscribe((res)=>{
          console.log(res);
              this.category.push(res['category']['parentCategories'][0]);
              this.categoryList.push(res['category']);
              this.rootservice.getCategory(this.category[1])
              .subscribe((cat1)=>{
                console.log(cat1);
                this.category.push(cat1['category']['parentCategories'][0]);
                this.categoryList.push(cat1['category']);
                if(this.category.length>2 && this.category[2]!=null){
                this.rootservice.getCategory(this.category[2])
                .subscribe((cat2)=>{
                  console.log(cat2);
                  this.category.push(cat2['category']['parentCategories'][0]);
                  this.categoryList.push(cat2['category']);
                  if(this.category.length>3 && this.category[3]!=null){
                  this.rootservice.getCategory(this.category[3])
                  .subscribe((cat3)=>{
                    console.log(cat3)
                    this.category.push(cat3['category']['parentCategories'][0]);
                    this.categoryList.push(cat3['category']);
                    if(this.category.length > 4 && this.category[4]!=null){
                    this.rootservice.getCategory(this.category[4])
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

  OnSelectedFile(event){
    this.imageFile = <File>event.target.files[0];
    console.log('Image File', this.imageFile);
  }

  initCreateProductForm() {
    
    this.productsForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      detail1: new FormControl(null),
      file : new FormControl(null),
      detail1desc: new FormControl(null),
      content: new FormControl(null),
      type: new FormControl(this.type),
      fillInAnswer: new FormControl(null),
      correctAnswers: new FormControl(null),
      option1: new FormControl(null)
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
      category:[],
      otherDetails:[]
    };

    product.category.push(this.firstCategory);
    console.log('Category Form Data', product);
    
    if(this.questionForm.controls['content'].value == null || this.questionForm.controls['type'].value == null){
      // swal('Oops!', 'Please Fill up all the fields', 'error');
     }
 
     if(this.type == 'single'){
      //this.initCreateQuestionOnlyOneForm();
      console.log('Single Form', this.questionForm.value);
     // console.log('Total Options', this.inputOptions);
      var options = new Array();
 
      for(var i = 0; i < this.inputOptions.length; i++){
       options.push(this.questionForm.value['option'+(i+1)]);
      }
      const formData ={
        featureContent: this.questionForm.value.content,
        featureType: this.type,
        featureOptions: options,
      //  answer: answers
      }

      product.otherDetails.push(formData);
      console.log('Product Data Single type', product);
      
      //console.log('Form Data', formData);
      //console.log('Form Option Data', options);

      this.questionForm.reset();
      this.inputOptions = [1];
   
     }
     else if(this.type == 'multiple'){
      // this.initCreateQuestionMultipleForm();
       console.log('Multiple Form', this.questionForm.value);
       var options = new Array();
 
       for(var i = 0; i < this.inputOptions.length; i++){
        options.push(this.questionForm.value['option'+(i+1)]);
       }

       const formData ={
        featureContent: this.questionForm.value.content,
        featureType: this.type,
        featureOptions: options,
      //  answer: answers
      }

      product.otherDetails.push(formData);
      console.log('Product Data Multiple type', product);
       
     //  console.log('Form Data', formData);
      // console.log('Form Option Data', options);

       this.questionForm.reset();
       this.inputOptions = [1];
 
     }
     else if(this.type == 'fill'){
     // this.initCreateQuestionWithFillForm();
     
      console.log('Fill in the Blank Form', this.questionForm.value);
 
 
      var answers = new Array();
     
       answers = this.questionForm.value.fillInAnswer.split(',');
 
      const formData ={
        featureContent: this.questionForm.value.content,
        featureType: this.type,
       // options: options,
        featureFillIn: answers[0].toString(),
       // answer: []
      }

      product.otherDetails.push(formData);
      console.log('Product Data Fill In type', product);
      
      //console.log('Form Data', formData);
      //console.log('Form Answer Data', answers);
      this.questionForm.reset();
      this.inputOptions = [1];
      
     }
     else if(this.type == 'one_or_more'){
      // this.initCreateQuestionMultipleForm();
       console.log('One or More Form', this.questionForm.value);
       var options = new Array();
 
       for(var i = 0; i < this.inputOptions.length; i++){
        options.push(this.questionForm.value['option'+(i+1)]);
       }
       const formData ={
        featureContent: this.questionForm.value.content,
        featureType: this.type,
        featureOptions: options,
      //  answer: answers
      }

      product.otherDetails.push(formData);
      console.log('Product Data One or More type', product);
       
      // console.log('Form Data', formData);
      //console.log('Form Option Data', options);

       this.questionForm.reset();
       this.inputOptions = [1];
       
     }
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

  //QUESTIONNAIRE APP

  
  addOptions(){
    var lastOption = this.inputOptions[this.inputOptions.length-1];
    if(this.questionForm.controls['option'+lastOption].value == null){
    //  swal('Oops!', 'Please Fill up the last option before adding another option', 'error');
    }

    else {
      var newLastOption = (lastOption + 1);
      this.inputOptions.push(newLastOption);
      this.questionForm.addControl('option'+ newLastOption, new FormControl(null, Validators.required));
      //console.log('New Options', this.inputOptions);
      //console.log('Form Controls', this.questionForm.controls);
    }

  }

  removeLastOption(){
    var lastOption = this.inputOptions[this.inputOptions.length-1];
    this.inputOptions.pop();
    this.questionForm.removeControl('option'+lastOption);
    // console.log('New Options', this.inputOptions);
    //console.log('Form Controls', this.questionForm.controls);
  }

  initCreatequestionForm() {
    this.questionForm = new FormGroup({

      content: new FormControl(null),
      type: new FormControl(this.type),
      fillInAnswer: new FormControl(null),
      correctAnswers: new FormControl(null),
      option1: new FormControl(null)

    });
  }


  changeRadioSingle(){ 
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('Single Type');
    notFillInOptions.style.display = 'block';
    fillIn.style.display ='none';
    this.type = 'single';
    this.displayType = 'Single Type';
  //  console.log('Type', this.type);
  }

  changeRadioMultiple(){
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('Multiple Type');
    notFillInOptions.style.display = 'block';
    fillIn.style.display ='none';
    this.type = 'multiple';
    this.displayType = 'Multiple Type';
  //  console.log('Type', this.type);

  }

  changeRadioFill(){
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('Fill In the Blanks Type');
    notFillInOptions.style.display = 'none';
    fillIn.style.display ='block';
    this.type = 'fill';
    this.displayType = 'Fill in the Blanks Type';
  //  console.log('Type', this.type);
  }

  changeRadioOneOrMore(){
    const notFillInOptions = document.getElementById('notFillIn');
    const fillIn = document.getElementById('fillIn');
    console.log('One or More Type Type');
    notFillInOptions.style.display = 'block';
    fillIn.style.display ='none';
    this.type = 'one_or_more';
    this.displayType = 'One or More than One Correct';
   // console.log('Type', this.type);
  
  }
  

}
