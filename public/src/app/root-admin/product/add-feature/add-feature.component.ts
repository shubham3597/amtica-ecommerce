import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router, ActivatedRoute } from '@angular/router';
import { RootCategoryService } from '../../../../shared/services/root-category.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit {
  productId: any;

  questionForm: FormGroup;
  type: string = '';
  inputOptions = [1];
  displayType: string = 'None';

  constructor(private rootservice: RootCategoryService, private router: Router, private ngxService: NgxUiLoaderService, private _activatedRoute: ActivatedRoute) {
    //this.productId = this._activatedRoute.snapshot.paramMap.get('productId');
    this._activatedRoute.queryParams
    .subscribe((res)=>{
      console.log('Product', res);
      this.productId = res['productId'];
     
    })
   }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id
 
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 500);
    this.initCreatequestionForm();
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

  async addFeature(){
    const product ={
      otherDetails:[]
    };
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

     await this.rootservice.updateProduct(this.productId, product)
     .subscribe((res)=>{
       console.log('Feature Added', res);
       Swal({
        type: 'success',
        title: res['product'].name+' has been added!',
        showConfirmButton: false,
        timer: 1500
      }).then((res) =>{
        this.router.navigate(['product', this.productId ])  
      })
     }, (err)=>{
       console.log('Error while adding the feature', err);
     })

  }
  



}
