(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _root_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-admin/add-category/add-category.component */ "./src/app/root-admin/add-category/add-category.component.ts");
/* harmony import */ var _root_admin_root_admin_home_root_admin_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-admin/root-admin-home/root-admin-home.component */ "./src/app/root-admin/root-admin-home/root-admin-home.component.ts");
/* harmony import */ var _root_admin_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root-admin/list-categories/list-categories.component */ "./src/app/root-admin/list-categories/list-categories.component.ts");
/* harmony import */ var _root_admin_root_category_root_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root-admin/root-category/root-category.component */ "./src/app/root-admin/root-category/root-category.component.ts");
/* harmony import */ var _root_admin_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./root-admin/product/product.component */ "./src/app/root-admin/product/product.component.ts");
/* harmony import */ var _root_admin_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root-admin/add-product/add-product.component */ "./src/app/root-admin/add-product/add-product.component.ts");
/* harmony import */ var _root_admin_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./root-admin/add-sub-category/add-sub-category.component */ "./src/app/root-admin/add-sub-category/add-sub-category.component.ts");
/* harmony import */ var _root_admin_list_sub_categories_list_sub_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./root-admin/list-sub-categories/list-sub-categories.component */ "./src/app/root-admin/list-sub-categories/list-sub-categories.component.ts");
/* harmony import */ var _root_admin_add_product_choose_category_choose_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./root-admin/add-product/choose-category/choose-category.component */ "./src/app/root-admin/add-product/choose-category/choose-category.component.ts");
/* harmony import */ var _root_admin_product_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./root-admin/product/list-products/list-products.component */ "./src/app/root-admin/product/list-products/list-products.component.ts");
/* harmony import */ var _root_admin_add_product_choose_sub_category_choose_sub_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./root-admin/add-product/choose-sub-category/choose-sub-category.component */ "./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/root-admin', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'root-admin', component: _root_admin_root_admin_home_root_admin_home_component__WEBPACK_IMPORTED_MODULE_4__["RootAdminHomeComponent"] },
    { path: 'root-admin/add-category', component: _root_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"] },
    { path: 'root-admin/list-categories', component: _root_admin_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_5__["ListCategoriesComponent"] },
    { path: 'root-admin/category/:id', component: _root_admin_root_category_root_category_component__WEBPACK_IMPORTED_MODULE_6__["RootCategoryComponent"] },
    { path: 'product/:productid', component: _root_admin_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: 'root-admin/add-product', component: _root_admin_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"], data: {} },
    { path: 'root-admin/product/choose-category', component: _root_admin_add_product_choose_category_choose_category_component__WEBPACK_IMPORTED_MODULE_11__["ChooseCategoryComponent"] },
    { path: 'root-admin/product/category/:id', component: _root_admin_add_product_choose_sub_category_choose_sub_category_component__WEBPACK_IMPORTED_MODULE_13__["ChooseSubCategoryComponent"] },
    { path: 'root-admin/add-sub-category', component: _root_admin_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_9__["AddSubCategoryComponent"] },
    { path: 'root-admin/list-sub-categories', component: _root_admin_list_sub_categories_list_sub_categories_component__WEBPACK_IMPORTED_MODULE_10__["ListSubCategoriesComponent"] },
    { path: 'root-admin/list-products', component: _root_admin_product_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_12__["ListProductsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n    <ngx-ui-loader></ngx-ui-loader>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _root_admin_root_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./root-admin/root-admin.component */ "./src/app/root-admin/root-admin.component.ts");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _root_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./root-admin/add-category/add-category.component */ "./src/app/root-admin/add-category/add-category.component.ts");
/* harmony import */ var _root_admin_root_admin_home_root_admin_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./root-admin/root-admin-home/root-admin-home.component */ "./src/app/root-admin/root-admin-home/root-admin-home.component.ts");
/* harmony import */ var _root_admin_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./root-admin/list-categories/list-categories.component */ "./src/app/root-admin/list-categories/list-categories.component.ts");
/* harmony import */ var _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var _root_admin_root_category_root_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./root-admin/root-category/root-category.component */ "./src/app/root-admin/root-category/root-category.component.ts");
/* harmony import */ var _root_admin_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./root-admin/add-sub-category/add-sub-category.component */ "./src/app/root-admin/add-sub-category/add-sub-category.component.ts");
/* harmony import */ var _root_admin_product_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./root-admin/product/product.component */ "./src/app/root-admin/product/product.component.ts");
/* harmony import */ var _root_admin_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./root-admin/add-product/add-product.component */ "./src/app/root-admin/add-product/add-product.component.ts");
/* harmony import */ var _root_admin_list_sub_categories_list_sub_categories_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./root-admin/list-sub-categories/list-sub-categories.component */ "./src/app/root-admin/list-sub-categories/list-sub-categories.component.ts");
/* harmony import */ var _root_admin_add_product_choose_category_choose_category_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./root-admin/add-product/choose-category/choose-category.component */ "./src/app/root-admin/add-product/choose-category/choose-category.component.ts");
/* harmony import */ var _root_admin_product_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./root-admin/product/list-products/list-products.component */ "./src/app/root-admin/product/list-products/list-products.component.ts");
/* harmony import */ var _root_admin_add_product_choose_sub_category_choose_sub_category_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./root-admin/add-product/choose-sub-category/choose-sub-category.component */ "./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var ngxUiLoaderConfig = {
    "bgsColor": "#005fd5",
    "bgsOpacity": 0.9,
    "bgsPosition": "center-center",
    "bgsSize": 100,
    "bgsType": "three-bounce",
    "blur": 15,
    "fgsColor": "#FFF",
    "fgsPosition": "center-center",
    "fgsSize": 100,
    "fgsType": "wandering-cubes",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "overlayColor": "#002f6a",
    "pbColor": "#fff",
    "pbDirection": "ltr",
    "pbThickness": 5,
    "hasProgressBar": true,
    "text": "Please hold on...",
    "textColor": "#FFF",
    "textPosition": "center-center",
    "threshold": 500 // progress bar thickness
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _root_admin_root_admin_component__WEBPACK_IMPORTED_MODULE_9__["RootAdminComponent"],
                _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _root_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_12__["AddCategoryComponent"],
                _root_admin_root_admin_home_root_admin_home_component__WEBPACK_IMPORTED_MODULE_13__["RootAdminHomeComponent"],
                _root_admin_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_14__["ListCategoriesComponent"],
                _root_admin_root_category_root_category_component__WEBPACK_IMPORTED_MODULE_16__["RootCategoryComponent"],
                _root_admin_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_17__["AddSubCategoryComponent"],
                _root_admin_product_product_component__WEBPACK_IMPORTED_MODULE_18__["ProductComponent"],
                _root_admin_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__["AddProductComponent"],
                _root_admin_list_sub_categories_list_sub_categories_component__WEBPACK_IMPORTED_MODULE_20__["ListSubCategoriesComponent"],
                _root_admin_add_product_choose_category_choose_category_component__WEBPACK_IMPORTED_MODULE_21__["ChooseCategoryComponent"],
                _root_admin_product_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_22__["ListProductsComponent"],
                _root_admin_add_product_choose_sub_category_choose_sub_category_component__WEBPACK_IMPORTED_MODULE_23__["ChooseSubCategoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_15__["RootCategoryService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The sidebar -->\n<div class=\"sidebar\">\n  <h2>Root Admin</h2>\n  <a routerLink=\"/root-admin\" >Root Admin Home</a>\n  <a type=\"button\" class=\"btn btn-primary dropdown-btn\" style=\"background-color: #005fd5;\">Root Category\n    <i class=\"fa fa-caret-down\"></i>\n  </a>\n  <div class=\"dropdown-container\">\n    <a [routerLink]=\"['/root-admin/add-category']\" routerLinkActive=\"active\">Add a Root-Category</a>\n    <a [routerLink]=\"['/root-admin/list-categories']\" routerLinkActive=\"active\">All Root-Categories</a>\n  </div>\n\n  <a type=\"button\" class=\"btn btn-primary dropdown-btn\" style=\"background-color: #005fd5;\">Sub Category\n    <i class=\"fa fa-caret-down\"></i></a>\n  <div class=\"dropdown-container\">\n    <a [routerLink]=\"['/root-admin/add-sub-category']\" routerLinkActive=\"active\">Add a Sub-Category</a>\n    <a [routerLink]=\"['/root-admin/list-sub-categories']\" routerLinkActive=\"active\">All Sub-Categories</a>\n  </div>\n\n  <a type=\"button\" class=\"btn btn-primary dropdown-btn\" style=\"background-color: #005fd5;\">Product\n    <i class=\"fa fa-caret-down\"></i></a>\n  <div class=\"dropdown-container\">\n    <a [routerLink]=\"['/root-admin/product/choose-category']\" routerLinkActive=\"active\">Add a Product</a>\n    <a [routerLink]=\"['/root-admin/list-products']\" routerLinkActive=\"active\">All Products</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The side navigation menu */\n.sidebar {\n  margin: 0;\n  padding: 0;\n  width: 250px;\n  background-color: #005fd5;\n  color: white;\n  position: fixed;\n  height: 100%;\n  overflow: auto; }\n.sidebar h2 {\n  padding: 14px;\n  font-weight: bold;\n  color: white; }\n/* Sidebar links */\n.sidebar a {\n  display: block;\n  color: white;\n  padding: 16px;\n  text-decoration: none; }\n/* Active/current link */\n.sidebar a.active {\n  background-color: #002f6a;\n  color: white; }\n/* Links on mouse-over */\n.sidebar a:hover:not(.active) {\n  background-color: #002f6a;\n  color: white; }\n/* Page content. The value of the margin-left property should match the value of the sidebar's width property */\ndiv.content {\n  margin-left: 200px;\n  padding: 1px 16px;\n  height: 1000px; }\n/* On screens that are less than 700px wide, make the sidebar into a topbar */\n@media screen and (max-width: 700px) {\n  .sidebar {\n    width: 100%;\n    height: auto;\n    position: relative; }\n  .sidebar a {\n    float: left; }\n  div.content {\n    margin-left: 0; } }\n/* On screens that are less than 400px, display the bar vertically, instead of horizontally */\n@media screen and (max-width: 400px) {\n  .sidebar a {\n    text-align: center;\n    float: none; } }\n.dropdown-btn {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  color: white;\n  display: block;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  outline: none; }\n.dropdown-btn:hover {\n  color: #a1b2c7; }\n.dropdown-container {\n  display: none;\n  background-color: #002f6a;\n  padding-left: 8px; }\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.dropDownToggle();
    };
    NavbarComponent.prototype.dropDownToggle = function () {
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                }
                else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/common/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/common/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/add-category/add-category.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/root-admin/add-category/add-category.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main\">\n<div class=\"row  main-heading\">\n  <div class=\"col-md-12\" style=\"text-align:center;\">\n    <h1 style=\"font-weight:inherit; font-size: 40px;\">Add a new Root Category</h1>\n    <div class=\"col-sm-12\">\n    Define a new category here\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"mt-4 col-md-12\">\n\n  </div>\n\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n    </div>\n    <div class=\"col-md-8\">\n      <form [formGroup]=\"detailsForm\">\n        <div class=\"row\">\n          <div class=\"col-md-6\" style=\"text-align: center; margin-right: 0em;\">\n              <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; background-color: #005fd5;\">\n                <h4 style=\"color:white;\">Category Name</h4></label>\n              \n          </div>\n          <div class=\"col-md-6\" style=\"text-align:center; margin-left: 0rem;\">\n              <input formControlName=\"name\" name=\"name\" id=\"name\" class=\"form-control\" style=\"height: 50px;\">\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"mt-4 col-md-12\">\n          \n            </div>\n          \n          </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\" style=\"text-align: center; margin-right: 0em;\">\n                <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; margin-block-end: 0; background-color: #005fd5;\">\n                  <h4 style=\"color:white;\">Category Description</h4></label>\n                  <textarea formControlName=\"description\" name=\"description\" id=\"description\" class=\"form-control\" style=\" margin: 0;\"></textarea>\n                \n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"mt-4 col-md-12\">\n            \n              </div>\n            \n            </div>\n            <!--<div class=\"row\">\n                <div class=\"col-md-12\" style=\"text-align: center; margin-right: 0em;\">\n                    <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; margin-block-end: 0; background-color: #020122;\">\n                      <h4 style=\"color:white;\">Add Other Details(Optional)</h4></label>\n                      <div class=\"row container\" *ngFor=\"let detail of otherDetails; let i = index;\" style=\"margin-top: 1rem;\">\n                          <div class=\"col-md-6\" style=\"text-align: center; margin-right: 0em;\">\n                              <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; background-color: #020122;\">\n                                <h4 style=\"color:white;\">Detail Name</h4></label>\n                              \n                          </div>\n                          <div class=\"col-md-6\" style=\"text-align:center; margin-left: 0rem;\">\n                              <input formControlName=\"detail{{detail}}\" name=\"detail{{detail}}\" id=\"detail{{detail}}\" class=\"form-control\" style=\"height: 50px;\">\n                          </div>\n\n                          <div class=\"col-md-6\" style=\"text-align: center; margin-right: 0em;\">\n                              <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; background-color: #020122;\">\n                                <h4 style=\"color:white;\">Detail Description</h4></label>\n                              \n                          </div>\n                          <div class=\"col-md-6\" style=\"text-align:center; margin-left: 0rem;\">\n                              <input formControlName=\"detail{{detail}}desc\" name=\"detail{{detail}}desc\" id=\"detail{{detail}}desc\" class=\"form-control\" style=\"height: 50px;\">\n                          </div>\n\n                        </div>\n                        <div class=\"row container\" style=\"margin-top: 1rem;\"> \n                          <div class=\"col-md-4\">\n                              <button class=\"btn btn-md btn-success\" (click)=\"addDetails();\">Add more details</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-md btn-danger\" *ngIf=\"this.otherDetails.length>1\" (click)=\"removeLastDetail();\">Remove Last Detail</button>\n                              </div>\n                            \n                            \n                        </div>\n\n                    \n                </div>\n              </div>-->\n            <div class=\"row\">\n                <div class=\"mt-4 col-md-12\">\n              \n                </div>\n              \n              </div>\n          <div class=\"row\">\n              <div class=\"col-md-12\" style=\"text-align: center;\">\n                  <button class=\"btn form-control btn-lg btn-dark submit-button\" (click)=\"createCategory();\">Submit</button>\n                  \n              </div>\n              <div class=\"row\">\n                <div class=\"mt-4 col-md-12\">\n              \n                </div>\n              \n              </div>\n              <div class=\"col-md-12\" style=\"text-align: center;\">\n                <button class=\"btn btn-lg form-control btn-warning back-button\" routerLink=\"/root-admin\" >Back</button>\n                \n            </div>\n             \n            </div>\n          \n      </form>\n    </div>\n    <div class=\"col-md-2\">\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/root-admin/add-category/add-category.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/root-admin/add-category/add-category.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #020122;\n  cursor: pointer;\n  margin: 1rem 1rem 1rem 1rem; }\n\n.square:hover {\n  background-color: #FF521B;\n  color: #005fd5; }\n\n.buttons {\n  width: 50%;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0; }\n\n.submit-button {\n  height: 50px;\n  background-color: #005fd5;\n  opacity: 0.9; }\n\n.submit-button:hover {\n  opacity: 1.0; }\n\n.back-button {\n  height: 50px; }\n\n.back-button:hover {\n  opacity: 1.0; }\n"

/***/ }),

/***/ "./src/app/root-admin/add-category/add-category.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/root-admin/add-category/add-category.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(rootservice, ngxService) {
        this.rootservice = rootservice;
        this.ngxService = ngxService;
        this.otherDetails = [1];
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.initCreateCategoryForm();
    };
    AddCategoryComponent.prototype.addDetails = function () {
        var lastDetail = this.otherDetails[this.otherDetails.length - 1];
        if (this.detailsForm.controls['detail' + lastDetail].value == null || this.detailsForm.controls['detail' + lastDetail + 'desc'].value == null) {
            //swal('Oops!', 'Please Fill up the last option before adding another option', 'error');
            console.log('Please Fill up the last detail before adding another option');
        }
        else {
            var newLastDetail = lastDetail + 1;
            this.otherDetails.push(newLastDetail);
            this.detailsForm.addControl('detail' + newLastDetail, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            this.detailsForm.addControl('detail' + newLastDetail + 'desc', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            console.log('Details Array', this.otherDetails);
            console.log('Details Form', this.detailsForm.controls);
        }
    };
    AddCategoryComponent.prototype.removeLastDetail = function () {
        var lastDetail = this.otherDetails[this.otherDetails.length - 1];
        this.otherDetails.pop();
        this.detailsForm.removeControl('detail' + lastDetail);
        this.detailsForm.removeControl('detail' + lastDetail + 'desc');
        console.log('Details Array', this.otherDetails);
        console.log('Details Form', this.detailsForm.controls);
    };
    AddCategoryComponent.prototype.initCreateCategoryForm = function () {
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            detail1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            detail1desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    AddCategoryComponent.prototype.createCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var category, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        category = {
                            categoryName: this.detailsForm.controls.name.value,
                            categoryDescription: this.detailsForm.controls.description.value,
                            type: 'root',
                            otherDetails: [{}]
                        };
                        for (i = 0; i < this.otherDetails.length; i++) {
                            category.otherDetails[i] = {
                                "detailName": this.detailsForm.controls['detail' + (i + 1)].value,
                                "detailDescription": this.detailsForm.controls['detail' + (i + 1) + 'desc'].value
                            };
                        }
                        console.log('Category Form Data', category);
                        return [4 /*yield*/, this.rootservice.addCategory(category)
                                .subscribe(function (res) {
                                console.log('Category Added', res);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: category.categoryName + ' has been added!',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }, function (err) {
                                console.log('There\s some error while adding the category', err);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong, please try again later!',
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.detailsForm.reset();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/root-admin/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/root-admin/add-category/add-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_2__["RootCategoryService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/add-product/add-product.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/root-admin/add-product/add-product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main\">\n<div class=\"row  main-heading\">\n  <div class=\"col-md-12\" style=\"text-align:center;\">\n    <h1 style=\"font-weight:inherit; font-size: 40px;\">Add a new Product</h1>\n    <div class=\"col-sm-12\">\n    Define a new product here\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"mt-4 col-md-12\">\n\n  </div>\n\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n    </div>\n    <div class=\"col-md-8\">\n      <form [formGroup]=\"productsForm\">\n        <div class=\"row\">\n          <div class=\"col-md-6\" style=\"text-align: center; margin-right: 0em;\">\n              <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; background-color: #005fd5;\">\n                <h4 style=\"color:white;\">Product Name</h4></label>\n              \n          </div>\n          <div class=\"col-md-6\" style=\"text-align:center; margin-left: 0rem;\">\n              <input formControlName=\"name\" name=\"name\" id=\"name\" class=\"form-control\" style=\"height: 50px;\">\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"mt-4 col-md-12\">\n          \n            </div>\n          \n          </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\" style=\"text-align: center; margin-right: 0em;\">\n                <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; margin-block-end: 0; background-color: #005fd5;\">\n                  <h4 style=\"color:white;\">Product Description</h4></label>\n                  <textarea formControlName=\"description\" name=\"description\" id=\"description\" class=\"form-control\" style=\" margin: 0;\"></textarea>\n                \n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"mt-4 col-md-12\">\n            \n              </div>\n            \n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\" style=\"text-align: center; margin-right: 0em;\">\n                    <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; margin-block-end: 0; background-color:#005fd5;\">\n                      <h4 style=\"color:white;\">Add Other Features (Optional)</h4></label>\n                      <div class=\"row container\" *ngFor=\"let detail of otherDetails; let i = index;\" style=\"margin-top: 1rem;\">\n                          <div class=\"col-md-6\" style=\"text-align: center; margin-right: 0em;\">\n\n                              <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; background-color: #005fd5;\">\n                                <h4 style=\"color:white;\">Feature Name</h4></label>\n                              \n                          </div>\n                          <div class=\"col-md-6\" style=\"text-align:center; margin-left: 0rem;\">\n                              <input formControlName=\"detail{{detail}}\" name=\"detail{{detail}}\" id=\"detail{{detail}}\" class=\"form-control\" style=\"height: 50px;\">\n                          </div>\n\n                          <!--<div class=\"col-md-6\" style=\"text-align: center; margin-right: 0em;\">\n                              <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; background-color: #020122;\">\n                                <h4 style=\"color:white;\">Detail Description</h4></label>\n                              \n                          </div>\n                          <div class=\"col-md-6\" style=\"text-align:center; margin-left: 0rem;\">\n                              <input formControlName=\"detail{{detail}}desc\" name=\"detail{{detail}}desc\" id=\"detail{{detail}}desc\" class=\"form-control\" style=\"height: 50px;\">\n                          </div>-->\n\n                        </div>\n                        <div class=\"row container\" style=\"margin-top: 1rem;\"> \n                          <div class=\"col-md-4\">\n                              <button class=\"btn btn-md btn-success\" (click)=\"addDetails();\">Add more features</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-md btn-danger\" *ngIf=\"this.otherDetails.length>1\" (click)=\"removeLastDetail();\">Remove Last Feature</button>\n                              </div>\n                            \n                            \n                        </div>\n\n                    \n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"mt-4 col-md-12\">\n              \n                </div>\n              \n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\" style=\"text-align: center; margin-right: 0em;\">\n                    <label class=\" btn btn-sm form-control\" style=\" height: 50px; font-weight: bold; background-color: #005fd5;\">\n                      <h4 style=\"color:white;\">Product Image</h4></label>\n                    \n                </div>\n                <div class=\"col-md-6\" style=\"text-align:center; margin-left: 0rem;\">\n                    <input formControlName=\"file\" name=\"file\" id=\"file\" type=\"file\" style=\"height: 50px;\" (change)=\"OnSelectedFile($event)\">\n                </div>\n              </div>\n            <div class=\"row\">\n                <div class=\"mt-4 col-md-12\">\n              \n                </div>\n              \n              </div>\n          <div class=\"row\">\n              <div class=\"col-md-12\" style=\"text-align: center;\">\n                  <button class=\"btn form-control btn-lg btn-dark submit-button\" (click)=\"createProduct();\">Submit</button>\n                  \n              </div>\n              <div class=\"row\">\n                <div class=\"mt-4 col-md-12\">\n              \n                </div>\n              \n              </div>\n              <div class=\"col-md-12\" style=\"text-align: center;\">\n                <button class=\"btn btn-lg btn-warning form-control back-button\" routerLink=\"/root-admin\" >Back to Home</button>\n                \n            </div>\n             \n            </div>\n          \n      </form>\n    </div>\n    <div class=\"col-md-2\">\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/root-admin/add-product/add-product.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/root-admin/add-product/add-product.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #020122;\n  cursor: pointer;\n  margin: 1rem 1rem 1rem 1rem; }\n\n.square:hover {\n  background-color: #FF521B;\n  color: #005fd5; }\n\n.buttons {\n  width: 50%;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0; }\n\n.submit-button {\n  height: 50px;\n  background-color: #005fd5;\n  opacity: 0.9; }\n\n.submit-button:hover {\n  opacity: 1.0; }\n\n.back-button {\n  height: 50px; }\n\n.back-button:hover {\n  opacity: 1.0; }\n"

/***/ }),

/***/ "./src/app/root-admin/add-product/add-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/root-admin/add-product/add-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(rootservice, router, ngxService, _activatedRoute) {
        var _this = this;
        this.rootservice = rootservice;
        this.router = router;
        this.ngxService = ngxService;
        this._activatedRoute = _activatedRoute;
        this.otherDetails = [1];
        this.category = [];
        this.imageFile = null;
        this._activatedRoute.queryParams
            .subscribe(function (res) {
            console.log('Sub Category', res);
            _this.category.push(res['subCategory']);
        });
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.initCreateProductForm();
    };
    AddProductComponent.prototype.OnSelectedFile = function (event) {
        this.imageFile = event.target.files[0];
    };
    AddProductComponent.prototype.initCreateProductForm = function () {
        this.productsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            detail1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            detail1desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    AddProductComponent.prototype.addDetails = function () {
        var lastDetail = this.otherDetails[this.otherDetails.length - 1];
        if (this.productsForm.controls['detail' + lastDetail].value == null) {
            //swal('Oops!', 'Please Fill up the last option before adding another option', 'error');
            console.log('Please Fill up the last detail before adding another option');
        }
        else {
            var newLastDetail = lastDetail + 1;
            this.otherDetails.push(newLastDetail);
            this.productsForm.addControl('detail' + newLastDetail, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            // this.productsForm.addControl('detail'+ newLastDetail+'desc', new FormControl(null, Validators.required));
            console.log('Details Array', this.otherDetails);
            console.log('Details Form', this.productsForm.controls);
        }
    };
    AddProductComponent.prototype.removeLastDetail = function () {
        var lastDetail = this.otherDetails[this.otherDetails.length - 1];
        this.otherDetails.pop();
        this.productsForm.removeControl('detail' + lastDetail);
        // this.productsForm.removeControl('detail'+lastDetail+'desc');
        console.log('Details Array', this.otherDetails);
        console.log('Details Form', this.productsForm.controls);
    };
    AddProductComponent.prototype.createProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var product, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        product = {
                            name: this.productsForm.controls.name.value,
                            description: this.productsForm.controls.description.value,
                            itemPicture: 'default.png',
                            category: this.category,
                            otherDetails: [{}]
                        };
                        for (i = 0; i < this.otherDetails.length; i++) {
                            product.otherDetails[i] = {
                                "detailName": this.productsForm.controls['detail' + (i + 1)].value,
                            };
                        }
                        console.log('Category Form Data', product);
                        return [4 /*yield*/, this.rootservice.addProduct(product)
                                .subscribe(function (res) {
                                console.log('Product Added', res);
                                var categoryData = {
                                    products: [{
                                            _id: res['product']._id
                                        }]
                                };
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: product.name + ' has been added!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.router.navigate(['root-admin', 'category', _this.category[0]]);
                                });
                                /* this.rootservice.updateCategory(this.category[0], categoryData)
                                 .subscribe((res) =>{
                                   console.log('Product added to the category', res);
                           
                                 }, (err)=>{
                                   console.log('Error while adding the product to category', err);
                                 })*/
                            }, function (err) {
                                console.log('There\s some error while adding the category', err);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong, please try again later!',
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.productsForm.reset();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/root-admin/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.scss */ "./src/app/root-admin/add-product/add-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_2__["RootCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/add-product/choose-category/choose-category.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/root-admin/add-product/choose-category/choose-category.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-root-admin></app-root-admin>\n<div class=\"main\">\n  <div class=\"row main-heading\">\n    <div class=\"col-md-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 40px;\">Choose Root category</h1>\n      <div class=\"col-sm-12\">\n        Click any of the root categories, to add your product.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n\n    </div>\n\n  </div>\n  <div class=\"row\" style=\"margin-bottom: 5px;\" *ngFor=\"let category of categories; let i = index;\">\n    <!---<div class=\"col-md-4 col-sm-12 col-xs-12\" *ngIf=\"category?.type == 'sub'\" >\n        <i class=\"fas fa-edit\" (click)=\"updateCategory(category?._id, category?.categoryName, category?.categoryDescription)\" style=\"font-size:30px; color: black; cursor: pointer; float: right; color: #005fd5; margin: 0 auto;\"></i>\n    </div>-->\n      \n      <div class=\"col-md-4 col-sm-12 col-xs-12 square\" [routerLink]=\"['/root-admin/product/category',category?._id]\" routerLinkActive=\"router-link-active\" style=\"cursor: pointer;\" *ngIf=\"category?.type == 'root'\">\n          <h3 style=\"color:white;\">{{category?.categoryName}} </h3>\n          \n          <div class=\"row container\">\n            <p style=\"color:white;\">{{category?.categoryDescription}}</p>\n          </div>\n          \n      </div>\n      <!---<div class=\"col-md-4 col-sm-12 col-xs-12\" *ngIf=\"category?.type == 'sub'\">\n          <i class=\"fas fa-archive\" (click)=\"deleteCategory(category?._id)\" style=\"font-size:30px; color:#005fd5;float: none; margin: 0 auto; cursor: pointer;\"></i>\n      </div>-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/root-admin/add-product/choose-category/choose-category.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/root-admin/add-product/choose-category/choose-category.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  float: none;\n  margin: 0 auto;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #005fd5; }\n\n.square:hover {\n  background-color: #002f6a; }\n\n.buttons {\n  width: 50%;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0; }\n"

/***/ }),

/***/ "./src/app/root-admin/add-product/choose-category/choose-category.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/root-admin/add-product/choose-category/choose-category.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChooseCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCategoryComponent", function() { return ChooseCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ChooseCategoryComponent = /** @class */ (function () {
    function ChooseCategoryComponent(rootservice, router, ngxService) {
        this.rootservice = rootservice;
        this.router = router;
        this.ngxService = ngxService;
        this.categories = [];
    }
    ChooseCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.getAllCategories();
    };
    ChooseCategoryComponent.prototype.navigateToCategory = function (subCategory) {
        var navigationExtras = {
            queryParams: {
                "subCategory": subCategory
            }
        };
        this.router.navigate(['root-admin', 'category'], navigationExtras);
        console.log(navigationExtras);
    };
    ChooseCategoryComponent.prototype.getAllCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootservice.getRootCategories()
                            .subscribe(function (res) {
                            _this.categories = res['categories'];
                            console.log('All Categories', res);
                        }, function (err) {
                            console.log('Error while fetching the categories', err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChooseCategoryComponent.prototype.deleteCategory = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var swalWithBootstrapButtons;
            return __generator(this, function (_a) {
                swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons({
                    title: 'Are you sure?',
                    text: "You will delete all the subcategories and products too!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then(function (result) {
                    var categoryData = {
                        active: 'false'
                    };
                    if (result.value) {
                        swalWithBootstrapButtons('Deleted!', 'Your file has been deleted.', 'success').then(function (thenRes) {
                            _this.rootservice.deleteCategories(categoryId)
                                .subscribe(function (res) {
                                console.log('Category Deleted', res);
                                if (res['categoryRemoved']['subCategories'].length != 0) {
                                    for (var i = 0; i < res['categoryRemoved']['subCategories'].length; i++) {
                                        _this.rootservice.deleteCategories(res['categoryRemoved']['subCategories'][i])
                                            .subscribe(function (res) {
                                            console.log('Sub-category has been deleted as well', res);
                                        }, function (err) {
                                            console.log('Error while removing the subcategories', err);
                                        });
                                    }
                                }
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: 'Category and all it\'s subcategories have been deleted!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while deleting the category', err);
                            });
                        });
                    }
                    else if (
                    // Read more about handling dismissals
                    result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                        swalWithBootstrapButtons('Cancelled', 'Category was not deleted :)', 'error');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ChooseCategoryComponent.prototype.updateCategory = function (categoryId, categoryName, categoryDescription) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var categoryData, formValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryData = new Object();
                        console.log(categoryDescription);
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                title: 'Update Category - ' + categoryName,
                                html: '<label For=\'input1\'> Category Name</label>' +
                                    '<input id="input1" class="swal2-input" value=' + categoryName + '>' +
                                    '<label For=\'input2\'> Category Description</label>' +
                                    '<textarea id="input2" class="swal2-input">' + categoryDescription + '</textarea>',
                                focusConfirm: false,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                                preConfirm: function () {
                                    return [
                                        document.getElementById('input1')['value'],
                                        document.getElementById('input2')['value']
                                    ];
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            categoryData['categoryName'] = formValues[0];
                            categoryData['categoryDescription'] = formValues[1];
                            console.log('Category Form Data', categoryData);
                            this.rootservice.updateCategory(categoryId, categoryData)
                                .subscribe(function (res) {
                                console.log('Category Updated', res);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: 'Category has been updated!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while updating the category', err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ChooseCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-category',
            template: __webpack_require__(/*! ./choose-category.component.html */ "./src/app/root-admin/add-product/choose-category/choose-category.component.html"),
            styles: [__webpack_require__(/*! ./choose-category.component.scss */ "./src/app/root-admin/add-product/choose-category/choose-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__["RootCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
    ], ChooseCategoryComponent);
    return ChooseCategoryComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main\">\n        <div class=\"container\">\n                <div class=\"row main-heading\">\n                  <div class=\"col-lg-12\" style=\"text-align:center;\">\n                    <h1 style=\"font-weight:inherit; font-size: 55px;\">{{this.categoryData?.categoryName}} Category</h1>\n                    <div class=\"col-sm-12\" *ngIf=\"this.categoryData?.type == 'root'\">\n                    This is a {{this.categoryData?.type}} Category, therefore please select sub category\n                    </div>\n                    <div class=\"col-sm-12\" *ngIf=\"this.categoryData?.type == 'sub'\">\n                      This is a {{this.categoryData?.type}} Category.\n                      </div>\n                      <div class=\"col-sm-12\" *ngIf=\"this.categoryData?.type == 'sub'\">\n                        Either select a sub category(if exist) or add a product here.\n                        </div>\n                  </div>\n                </div>\n                <div class=\"row container\"> \n                        <label class=\"btn-warning btn-lg\" style=\"background-color:#002f6a ;\"> <div class=\"col-md-12\">\n                            \n                            <h3 style=\"font-weight:bold; font-size: 40px; color: white;\">About</h3>\n                    </div> \n                </label>\n                    <div class=\"col-md-12 container\" style=\"outline: 3px solid #020122; \"> \n                    \n                      <p style=\"font-weight: inherit; color: black;\">{{this.categoryData?.categoryDescription}}</p>\n                     \n                      </div>\n                    </div>\n                    <div *ngIf=\"this.categoryData?.type == 'sub'\">\n                    <div class=\"row main-heading\">\n                      <div class=\"col-lg-12\" style=\"text-align:center;\">\n                        <label class=\"btn-warning btn-lg\" style=\"background-color: #F18F01;\">\n                    <h3 style=\"font-weight: inherit; color: black;\">Parent Category</h3></label>\n                    </div>\n                  </div>\n                  <div class=\"row text-center\">\n                    <div class=\"col-md-12\" >\n                      <div class=\"row\">\n                      <div class=\"col-md-3 col-sm-12 col-xs-12 square\" [routerLink]=\"['/root-admin/product/category',parentCategory?._id]\">\n                          <h3 style=\"color:white;\">{{parentCategory?.categoryName}}</h3>\n\n                      </div> \n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n                <div class=\"row main-heading\">\n                        <div class=\"col-lg-12\" style=\"text-align:center;\">\n                          <label class=\"btn-warning btn-lg\" style=\"background-color: #F18F01;\">\n                      <h3 style=\"font-weight: inherit; color: black;\">Subcategories</h3></label>\n                      </div>\n                    </div>\n                    <div class=\"row text-center\">\n\n                          <div class=\"col-md-12\" >\n                            <div class=\"row\">\n                            <div class=\"col-md-3 col-sm-12 col-xs-12 square\" *ngFor=\"let subcategory of subCategoriesData; let i = index;\" [routerLink]=\"['/root-admin/product/category',subcategory?._id]\">\n                                <h3 style=\"color:white;\">{{subcategory?.categoryName}}</h3>\n\n                            </div> \n                            </div>\n                          </div>\n                          </div>\n\n                          <div class=\"row main-heading\" *ngIf=\"this.categoryData?.type == 'sub'\">\n                              <div class=\"col-lg-12\" style=\"text-align:center;\">\n                                <label class=\"btn-warning btn-lg\" style=\"background-color: #F18F01;\">\n                            <h3 style=\"font-weight: inherit; color: black;\">Products</h3></label>\n                            </div>\n                          </div>\n                        <div class=\"row  text-center\" *ngIf=\"this.categoryData?.type == 'sub'\" (click)=\"navigateToAddProduct(this.categoryId)\" routerLinkActive=\"router-link-active\">\n                            <div class=\"col-md-3 col-sm-12 col-xs-12 square\">\n                                <i class=\"fas fa-plus\" style=\"font-size:48px; color: white;\" ></i>\n                                <div class=\"mt-4 col-md-12\">\n                            \n                                </div>\n                                <h5 style=\"font-weight: inherit; color: white;\" > Add Product</h5>\n                            </div>  \n\n                            <div class=\"col-md-12\" >\n                                <div class=\"row\">\n                                <div class=\"col-md-3 col-sm-12 col-xs-12 square\" *ngFor=\"let product of product; let i = index;\">\n                                    <h3 style=\"color:white;\">{{product?.name}}</h3>\n    \n                                </div> \n\n                                </div>\n                              </div>\n                        </div>\n \n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #005fd5;\n  cursor: pointer;\n  margin: 1rem 1rem 1rem 1rem; }\n\n.square-description {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  padding: 1rem 1rem 1rem 1rem;\n  margin: 1rem 1rem 1rem 1rem; }\n\n.square:hover {\n  background-color: #002f6a;\n  color: #020122; }\n"

/***/ }),

/***/ "./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChooseSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseSubCategoryComponent", function() { return ChooseSubCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var src_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ChooseSubCategoryComponent = /** @class */ (function () {
    function ChooseSubCategoryComponent(ngxService, router, rootService, _activatedRoute) {
        this.ngxService = ngxService;
        this.router = router;
        this.rootService = rootService;
        this._activatedRoute = _activatedRoute;
        this.categoryData = {
            categoryName: '',
            type: '',
            categoryDescription: '',
            subCategories: [],
            _id: ''
        };
        this.subCategoriesData = new Array();
        this.product = new Array();
        this.parentCategory = {
            categoryName: '',
            _id: ''
        };
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
    ChooseSubCategoryComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    ChooseSubCategoryComponent.prototype.navigateToAddProduct = function (subCategory) {
        var navigationExtras = {
            queryParams: {
                "subCategory": subCategory
            }
        };
        this.router.navigate(['root-admin', 'add-product'], navigationExtras);
        console.log(navigationExtras);
    };
    ChooseSubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subCategoriesData = [];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.getCategory(this.categoryId);
    };
    ChooseSubCategoryComponent.prototype.getAllSubcategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var count, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        count = -1;
                        if (!(this.categoryData['subCategories'].length > 0)) return [3 /*break*/, 4];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.categoryData['subCategories'].length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rootService.getCategory(this.categoryData['subCategories'][i])
                                .subscribe(function (res) {
                                // console.log('Category Name: ',res['category']['categoryName'],'\nCategory Status: ',res['category']['active']);
                                if (res['category']['active'] == true) {
                                    _this.subCategoriesData.push(res['category']);
                                }
                            }, function (err) {
                                console.log('Error Occured while fetching Sub Categories', err);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ChooseSubCategoryComponent.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.categoryData['products'].length > 0)) return [3 /*break*/, 4];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.categoryData['products'].length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rootService.getProduct(this.categoryData['products'][i])
                                .subscribe(function (res) {
                                // console.log('Category Name: ',res['category']['categoryName'],'\nCategory Status: ',res['category']['active']);
                                if (res['product']['active'] == true) {
                                    _this.product.push(res['product']);
                                }
                            }, function (err) {
                                console.log('Error Occured while fetching Products', err);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ChooseSubCategoryComponent.prototype.getCategory = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootService.getCategory(categoryId)
                            .subscribe(function (res) {
                            _this.categoryData = res['category'];
                            _this.rootService.getCategory(res['category']['parentCategories'][0])
                                .subscribe(function (cat) {
                                console.log('Parent Category', cat);
                                _this.parentCategory = cat['category'];
                            });
                            console.log('Category Fetched', res);
                            _this.getAllSubcategories();
                            _this.getProducts();
                            console.log('Subcategories Fetched', _this.subCategoriesData);
                            console.log('Products', _this.product);
                        }, function (err) {
                            console.log('Error while fetching Category', err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChooseSubCategoryComponent.prototype.addSubCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var subCategoryData, formValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subCategoryData = new Object();
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                                title: 'Sub Category for ' + this.categoryData['categoryName'],
                                html: '<label For=\'input1\'> Category Name</label>' +
                                    '<input id="input1" class="swal2-input">' +
                                    '<label For=\'input2\'> Category Description</label>' +
                                    '<textarea id="input2" class="swal2-input"></textarea>',
                                focusConfirm: false,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                                preConfirm: function () {
                                    return [
                                        document.getElementById('input1')['value'],
                                        document.getElementById('input2')['value']
                                    ];
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            subCategoryData['categoryName'] = formValues[0];
                            subCategoryData['categoryDescription'] = formValues[1];
                            subCategoryData['type'] = 'sub';
                            subCategoryData['parentCategories'] = [{}];
                            console.log('Sub Category Form Data', subCategoryData);
                            this.rootService.addCategory(subCategoryData)
                                .subscribe(function (res) {
                                console.log('Sub Category Added', res);
                                //UPDATING THE SUB CATEGORY TO PUSH PARENT CATEGORY ID INTO IT
                                var updateSubCategoryData = {
                                    parentCategories: [{
                                            _id: _this.categoryId
                                        }]
                                };
                                _this.rootService.updateCategory(res['category']._id, updateSubCategoryData)
                                    .subscribe(function (res) {
                                    console.log('Sub Category has been Updaed as well with Parent ID', res);
                                    //UPDATING THE PARENT CATEGORY TO PUSH SUB CATEGORY ID INTO IT
                                    if (!_this.categoryData['subCategories'].includes(res['category']._id)) {
                                        _this.categoryData['subCategories'].push({ _id: res['category']._id });
                                        _this.rootService.updateCategory(_this.categoryId, _this.categoryData)
                                            .subscribe(function (res) {
                                            console.log('Root Category has been updated!', res);
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                                                type: 'success',
                                                title: subCategoryData['categoryName'] + ' has been added!',
                                                showConfirmButton: false,
                                                timer: 1500
                                            }).then(function (res) {
                                                _this.subCategoriesData = [];
                                                _this.ngOnInit();
                                            });
                                        }, function (err) {
                                            console.log('Error while updating the root category', err);
                                        });
                                    }
                                }, function (err) {
                                    console.log('Error While Updating Sub Category', err);
                                });
                            }, function (err) {
                                console.log('Error while adding the sub category', err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ChooseSubCategoryComponent.prototype.updateCategory = function (categoryId, categoryName, categoryDescription) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var subCategoryData, formValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subCategoryData = new Object();
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                                title: 'Update Category - ' + categoryName,
                                html: '<label For=\'input1\'> Category Name</label>' +
                                    '<input id="input1" class="swal2-input" value=' + categoryName + '>' +
                                    '<label For=\'input2\'> Category Description</label>' +
                                    '<textarea id="input2" class="swal2-input">' + categoryDescription + '</textarea>',
                                focusConfirm: false,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                                preConfirm: function () {
                                    return [
                                        document.getElementById('input1')['value'],
                                        document.getElementById('input2')['value']
                                    ];
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            subCategoryData['categoryName'] = formValues[0];
                            subCategoryData['categoryDescription'] = formValues[1];
                            console.log('Sub Category Form Data', subCategoryData);
                            this.rootService.updateCategory(categoryId, subCategoryData)
                                .subscribe(function (res) {
                                console.log('Category Updated', res);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                                    type: 'success',
                                    title: 'Category has been updated!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.subCategoriesData = [];
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while updating the category', err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ChooseSubCategoryComponent.prototype.deleteCategory = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var swalWithBootstrapButtons;
            return __generator(this, function (_a) {
                swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then(function (result) {
                    var categoryData = {
                        active: 'false'
                    };
                    if (result.value) {
                        swalWithBootstrapButtons('Deleted!', 'Your file has been deleted.', 'success').then(function (thenRes) {
                            _this.rootService.updateCategory(categoryId, categoryData)
                                .subscribe(function (res) {
                                console.log('Category marked with status as not active', res);
                            }, function (err) {
                                console.log('Error while marking as inactive', err);
                            });
                            _this.subCategoriesData = [];
                            _this.ngOnInit();
                        });
                    }
                    else if (
                    // Read more about handling dismissals
                    result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                        swalWithBootstrapButtons('Cancelled', 'Category was not deleted :)', 'error');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ChooseSubCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-sub-category',
            template: __webpack_require__(/*! ./choose-sub-category.component.html */ "./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.html"),
            styles: [__webpack_require__(/*! ./choose-sub-category.component.scss */ "./src/app/root-admin/add-product/choose-sub-category/choose-sub-category.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["NgxUiLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_2__["RootCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ChooseSubCategoryComponent);
    return ChooseSubCategoryComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/add-sub-category/add-sub-category.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/root-admin/add-sub-category/add-sub-category.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-root-admin></app-root-admin>\n<div class=\"main\">\n  <div class=\"row main-heading\">\n    <div class=\"col-md-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 40px;\">Add a new Sub Category</h1>\n      <div class=\"col-sm-12\">\n        Please select a root-category from the following for your sub-category.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n\n    </div>\n\n  </div>\n  <div class=\"row\" style=\"margin-bottom: 5px;\" *ngFor=\"let category of categories; let i = index;\">\n      \n      <div class=\"col-md-4 col-sm-12 col-xs-12 square\" [routerLink]=\"['/root-admin/category',category?._id]\" style=\"cursor: pointer;\" *ngIf=\"category?.type == 'root'\">\n          <h3 style=\"color:white;\">{{category?.categoryName}} </h3>\n          \n          <div class=\"row container\">\n            <p style=\"color:white;\">{{category?.categoryDescription}}</p>\n          </div>\n          \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/root-admin/add-sub-category/add-sub-category.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/root-admin/add-sub-category/add-sub-category.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  float: none;\n  margin: 0 auto;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #005fd5; }\n\n.square:hover {\n  background-color: #002f6a; }\n\n.buttons {\n  width: 50%;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0; }\n"

/***/ }),

/***/ "./src/app/root-admin/add-sub-category/add-sub-category.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/root-admin/add-sub-category/add-sub-category.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubCategoryComponent", function() { return AddSubCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AddSubCategoryComponent = /** @class */ (function () {
    function AddSubCategoryComponent(rootservice, ngxService) {
        this.rootservice = rootservice;
        this.ngxService = ngxService;
        this.categories = [];
    }
    AddSubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.getAllCategories();
    };
    AddSubCategoryComponent.prototype.getAllCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootservice.getRootCategories()
                            .subscribe(function (res) {
                            _this.categories = res['categories'];
                            console.log('All Categories', res);
                        }, function (err) {
                            console.log('Error while fetching the categories', err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddSubCategoryComponent.prototype.deleteCategory = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var swalWithBootstrapButtons;
            return __generator(this, function (_a) {
                swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons({
                    title: 'Are you sure?',
                    text: "You will delete all the subcategories and products too!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then(function (result) {
                    var categoryData = {
                        active: 'false'
                    };
                    if (result.value) {
                        swalWithBootstrapButtons('Deleted!', 'Your file has been deleted.', 'success').then(function (thenRes) {
                            _this.rootservice.deleteCategories(categoryId)
                                .subscribe(function (res) {
                                console.log('Category Deleted', res);
                                if (res['categoryRemoved']['subCategories'].length != 0) {
                                    for (var i = 0; i < res['categoryRemoved']['subCategories'].length; i++) {
                                        _this.rootservice.deleteCategories(res['categoryRemoved']['subCategories'][i])
                                            .subscribe(function (res) {
                                            console.log('Sub-category has been deleted as well', res);
                                        }, function (err) {
                                            console.log('Error while removing the subcategories', err);
                                        });
                                    }
                                }
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: 'Category and all it\'s subcategories have been deleted!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while deleting the category', err);
                            });
                        });
                    }
                    else if (
                    // Read more about handling dismissals
                    result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                        swalWithBootstrapButtons('Cancelled', 'Category was not deleted :)', 'error');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    AddSubCategoryComponent.prototype.updateCategory = function (categoryId, categoryName, categoryDescription) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var categoryData, formValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryData = new Object();
                        console.log(categoryDescription);
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                title: 'Update Category - ' + categoryName,
                                html: '<label For=\'input1\'> Category Name</label>' +
                                    '<input id="input1" class="swal2-input" value=' + categoryName + '>' +
                                    '<label For=\'input2\'> Category Description</label>' +
                                    '<textarea id="input2" class="swal2-input">' + categoryDescription + '</textarea>',
                                focusConfirm: false,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                                preConfirm: function () {
                                    return [
                                        document.getElementById('input1')['value'],
                                        document.getElementById('input2')['value']
                                    ];
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            categoryData['categoryName'] = formValues[0];
                            categoryData['categoryDescription'] = formValues[1];
                            console.log('Category Form Data', categoryData);
                            this.rootservice.updateCategory(categoryId, categoryData)
                                .subscribe(function (res) {
                                console.log('Category Updated', res);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: 'Category has been updated!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while updating the category', err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddSubCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-sub-category',
            template: __webpack_require__(/*! ./add-sub-category.component.html */ "./src/app/root-admin/add-sub-category/add-sub-category.component.html"),
            styles: [__webpack_require__(/*! ./add-sub-category.component.scss */ "./src/app/root-admin/add-sub-category/add-sub-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__["RootCategoryService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
    ], AddSubCategoryComponent);
    return AddSubCategoryComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/list-categories/list-categories.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/root-admin/list-categories/list-categories.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-root-admin></app-root-admin>\r\n<div class=\"main\">\r\n  <div class=\"row main-heading\">\r\n    <div class=\"col-md-12\" style=\"text-align:center;\">\r\n      <h1 style=\"font-weight:inherit; font-size: 40px;\">All Root Categories</h1>\r\n      <div class=\"col-sm-12\">\r\n        Here you'll have all root categories, that you have defined\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"mt-4 col-md-12\">\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\" style=\"margin-bottom: 5px;\" *ngFor=\"let category of categories; let i = index;\">\r\n    <div class=\"col-md-4 col-sm-12 col-xs-12\" *ngIf=\"category?.type == 'root'\" >\r\n        <i class=\"fas fa-edit\" (click)=\"updateCategory(category?._id, category?.categoryName, category?.categoryDescription)\" style=\"font-size:30px; color: black; cursor: pointer; float: right; color: #005fd5; margin: 0 auto;\"></i>\r\n    </div>\r\n      \r\n      <div class=\"col-md-4 col-sm-12 col-xs-12 square\" [routerLink]=\"['/root-admin/category',category?._id]\" style=\"cursor: pointer;\" *ngIf=\"category?.type == 'root'\">\r\n          <h3 style=\"color:white;\">{{category?.categoryName}} </h3>\r\n          \r\n          <div class=\"row container\">\r\n            <p style=\"color:white;\">{{category?.categoryDescription}}</p>\r\n          </div>\r\n          \r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12 col-xs-12\" *ngIf=\"category?.type == 'root'\">\r\n          <i class=\"fas fa-archive\" (click)=\"deleteCategory(category?._id)\" style=\"font-size:30px; color:#005fd5;float: none; margin: 0 auto; cursor: pointer;\"></i>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/root-admin/list-categories/list-categories.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/root-admin/list-categories/list-categories.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  float: none;\n  margin: 0 auto;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #005fd5; }\n\n.square:hover {\n  background-color: #002f6a; }\n\n.buttons {\n  width: 50%;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0; }\n"

/***/ }),

/***/ "./src/app/root-admin/list-categories/list-categories.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/root-admin/list-categories/list-categories.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoriesComponent", function() { return ListCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ListCategoriesComponent = /** @class */ (function () {
    function ListCategoriesComponent(rootservice, ngxService) {
        this.rootservice = rootservice;
        this.ngxService = ngxService;
        this.categories = [];
    }
    ListCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.getAllCategories();
    };
    ListCategoriesComponent.prototype.getAllCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootservice.getRootCategories()
                            .subscribe(function (res) {
                            _this.categories = res['categories'];
                            console.log('All Categories', res);
                        }, function (err) {
                            console.log('Error while fetching the categories', err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListCategoriesComponent.prototype.deleteCategory = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var swalWithBootstrapButtons;
            return __generator(this, function (_a) {
                swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons({
                    title: 'Are you sure?',
                    text: "You will delete all the subcategories and products too!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then(function (result) {
                    var categoryData = {
                        active: 'false'
                    };
                    if (result.value) {
                        swalWithBootstrapButtons('Deleted!', 'Your file has been deleted.', 'success').then(function (thenRes) {
                            _this.rootservice.deleteCategories(categoryId)
                                .subscribe(function (res) {
                                console.log('Category Deleted', res);
                                if (res['categoryRemoved']['subCategories'].length != 0) {
                                    for (var i = 0; i < res['categoryRemoved']['subCategories'].length; i++) {
                                        _this.rootservice.deleteCategories(res['categoryRemoved']['subCategories'][i])
                                            .subscribe(function (res) {
                                            console.log('Sub-category has been deleted as well', res);
                                        }, function (err) {
                                            console.log('Error while removing the subcategories', err);
                                        });
                                    }
                                }
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: 'Category and all it\'s subcategories have been deleted!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while deleting the category', err);
                            });
                        });
                    }
                    else if (
                    // Read more about handling dismissals
                    result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                        swalWithBootstrapButtons('Cancelled', 'Category was not deleted :)', 'error');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ListCategoriesComponent.prototype.updateCategory = function (categoryId, categoryName, categoryDescription) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var categoryData, formValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryData = new Object();
                        console.log(categoryDescription);
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                title: 'Update Category - ' + categoryName,
                                html: '<label For=\'input1\'> Category Name</label>' +
                                    '<input id="input1" class="swal2-input" value=' + categoryName + '>' +
                                    '<label For=\'input2\'> Category Description</label>' +
                                    '<textarea id="input2" class="swal2-input">' + categoryDescription + '</textarea>',
                                focusConfirm: false,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                                preConfirm: function () {
                                    return [
                                        document.getElementById('input1')['value'],
                                        document.getElementById('input2')['value']
                                    ];
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            categoryData['categoryName'] = formValues[0];
                            categoryData['categoryDescription'] = formValues[1];
                            console.log('Category Form Data', categoryData);
                            this.rootservice.updateCategory(categoryId, categoryData)
                                .subscribe(function (res) {
                                console.log('Category Updated', res);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: 'Category has been updated!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while updating the category', err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ListCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-categories',
            template: __webpack_require__(/*! ./list-categories.component.html */ "./src/app/root-admin/list-categories/list-categories.component.html"),
            styles: [__webpack_require__(/*! ./list-categories.component.scss */ "./src/app/root-admin/list-categories/list-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__["RootCategoryService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
    ], ListCategoriesComponent);
    return ListCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/list-sub-categories/list-sub-categories.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/root-admin/list-sub-categories/list-sub-categories.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-root-admin></app-root-admin>\n<div class=\"main\">\n  <div class=\"row main-heading\">\n    <div class=\"col-md-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 40px;\">All Sub Categories</h1>\n      <div class=\"col-sm-12\">\n        Here you'll have all the sub-categories, that you have defined.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n\n    </div>\n\n  </div>\n  <div class=\"row\" style=\"margin-bottom: 5px;\" *ngFor=\"let category of categories; let i = index;\">\n    <!---<div class=\"col-md-4 col-sm-12 col-xs-12\" *ngIf=\"category?.type == 'sub'\" >\n        <i class=\"fas fa-edit\" (click)=\"updateCategory(category?._id, category?.categoryName, category?.categoryDescription)\" style=\"font-size:30px; color: black; cursor: pointer; float: right; color: #005fd5; margin: 0 auto;\"></i>\n    </div>-->\n      \n      <div class=\"col-md-4 col-sm-12 col-xs-12 square\" [routerLink]=\"['/root-admin/category',category?._id]\" style=\"cursor: pointer;\" *ngIf=\"category?.type == 'sub'\">\n          <h3 style=\"color:white;\">{{category?.categoryName}} </h3>\n          \n          <div class=\"row container\">\n            <p style=\"color:white;\">{{category?.categoryDescription}}</p>\n          </div>\n          \n      </div>\n      <!---<div class=\"col-md-4 col-sm-12 col-xs-12\" *ngIf=\"category?.type == 'sub'\">\n          <i class=\"fas fa-archive\" (click)=\"deleteCategory(category?._id)\" style=\"font-size:30px; color:#005fd5;float: none; margin: 0 auto; cursor: pointer;\"></i>\n      </div>-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/root-admin/list-sub-categories/list-sub-categories.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/root-admin/list-sub-categories/list-sub-categories.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  float: none;\n  margin: 0 auto;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #005fd5; }\n\n.square:hover {\n  background-color: #002f6a; }\n\n.buttons {\n  width: 50%;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0; }\n"

/***/ }),

/***/ "./src/app/root-admin/list-sub-categories/list-sub-categories.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/root-admin/list-sub-categories/list-sub-categories.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListSubCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubCategoriesComponent", function() { return ListSubCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ListSubCategoriesComponent = /** @class */ (function () {
    function ListSubCategoriesComponent(rootservice, ngxService) {
        this.rootservice = rootservice;
        this.ngxService = ngxService;
        this.categories = [];
    }
    ListSubCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.getAllCategories();
    };
    ListSubCategoriesComponent.prototype.getAllCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootservice.getRootCategories()
                            .subscribe(function (res) {
                            _this.categories = res['categories'];
                            console.log('All Categories', res);
                        }, function (err) {
                            console.log('Error while fetching the categories', err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListSubCategoriesComponent.prototype.deleteCategory = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var swalWithBootstrapButtons;
            return __generator(this, function (_a) {
                swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons({
                    title: 'Are you sure?',
                    text: "You will delete all the subcategories and products too!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then(function (result) {
                    var categoryData = {
                        active: 'false'
                    };
                    if (result.value) {
                        swalWithBootstrapButtons('Deleted!', 'Your file has been deleted.', 'success').then(function (thenRes) {
                            _this.rootservice.deleteCategories(categoryId)
                                .subscribe(function (res) {
                                console.log('Category Deleted', res);
                                if (res['categoryRemoved']['subCategories'].length != 0) {
                                    for (var i = 0; i < res['categoryRemoved']['subCategories'].length; i++) {
                                        _this.rootservice.deleteCategories(res['categoryRemoved']['subCategories'][i])
                                            .subscribe(function (res) {
                                            console.log('Sub-category has been deleted as well', res);
                                        }, function (err) {
                                            console.log('Error while removing the subcategories', err);
                                        });
                                    }
                                }
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: 'Category and all it\'s subcategories have been deleted!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while deleting the category', err);
                            });
                        });
                    }
                    else if (
                    // Read more about handling dismissals
                    result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                        swalWithBootstrapButtons('Cancelled', 'Category was not deleted :)', 'error');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ListSubCategoriesComponent.prototype.updateCategory = function (categoryId, categoryName, categoryDescription) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var categoryData, formValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryData = new Object();
                        console.log(categoryDescription);
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                title: 'Update Category - ' + categoryName,
                                html: '<label For=\'input1\'> Category Name</label>' +
                                    '<input id="input1" class="swal2-input" value=' + categoryName + '>' +
                                    '<label For=\'input2\'> Category Description</label>' +
                                    '<textarea id="input2" class="swal2-input">' + categoryDescription + '</textarea>',
                                focusConfirm: false,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                                preConfirm: function () {
                                    return [
                                        document.getElementById('input1')['value'],
                                        document.getElementById('input2')['value']
                                    ];
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            categoryData['categoryName'] = formValues[0];
                            categoryData['categoryDescription'] = formValues[1];
                            console.log('Category Form Data', categoryData);
                            this.rootservice.updateCategory(categoryId, categoryData)
                                .subscribe(function (res) {
                                console.log('Category Updated', res);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                    type: 'success',
                                    title: 'Category has been updated!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while updating the category', err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ListSubCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-sub-categories',
            template: __webpack_require__(/*! ./list-sub-categories.component.html */ "./src/app/root-admin/list-sub-categories/list-sub-categories.component.html"),
            styles: [__webpack_require__(/*! ./list-sub-categories.component.scss */ "./src/app/root-admin/list-sub-categories/list-sub-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__["RootCategoryService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
    ], ListSubCategoriesComponent);
    return ListSubCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/product/list-products/list-products.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/root-admin/product/list-products/list-products.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-root-admin></app-root-admin>\n<div class=\"main\">\n  <div class=\"row main-heading\">\n    <div class=\"col-md-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 40px;\">All Products</h1>\n      <div class=\"col-sm-12\">\n        Here you'll have all the products, that you have defined.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <!---<div class=\"col-md-4 col-sm-12 col-xs-12\" *ngIf=\"category?.type == 'sub'\" >\n        <i class=\"fas fa-edit\" (click)=\"updateCategory(category?._id, category?.categoryName, category?.categoryDescription)\" style=\"font-size:30px; color: black; cursor: pointer; float: right; color: #005fd5; margin: 0 auto;\"></i>\n    </div>-->\n      \n      <div class=\"col-md-3 col-sm-12 col-xs-12 square\"  *ngFor=\"let product of products; let i = index;\" [routerLink]=\"['/product',product?._id]\" style=\"cursor: pointer; margin: 0.2rem;\">\n          <h3 style=\"color:white;\">{{product?.name}} </h3>\n          \n          <div class=\"row container\">\n            <p style=\"color:white;\">{{product?.description}}</p>\n          </div>\n          \n      </div>\n      <!---<div class=\"col-md-4 col-sm-12 col-xs-12\" *ngIf=\"category?.type == 'sub'\">\n          <i class=\"fas fa-archive\" (click)=\"deleteCategory(category?._id)\" style=\"font-size:30px; color:#005fd5;float: none; margin: 0 auto; cursor: pointer;\"></i>\n      </div>-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/root-admin/product/list-products/list-products.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/root-admin/product/list-products/list-products.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  float: none;\n  margin: 0 auto;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #005fd5; }\n\n.square:hover {\n  background-color: #002f6a; }\n\n.buttons {\n  width: 50%;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0; }\n"

/***/ }),

/***/ "./src/app/root-admin/product/list-products/list-products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/root-admin/product/list-products/list-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductsComponent", function() { return ListProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ListProductsComponent = /** @class */ (function () {
    function ListProductsComponent(rootservice, ngxService) {
        this.rootservice = rootservice;
        this.ngxService = ngxService;
        this.products = [];
    }
    ListProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.getAllCategories();
    };
    ListProductsComponent.prototype.getAllCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootservice.getProducts()
                            .subscribe(function (res) {
                            _this.products = res['products'];
                            console.log('All Products', res);
                        }, function (err) {
                            console.log('Error while fetching the products', err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-products',
            template: __webpack_require__(/*! ./list-products.component.html */ "./src/app/root-admin/product/list-products/list-products.component.html"),
            styles: [__webpack_require__(/*! ./list-products.component.scss */ "./src/app/root-admin/product/list-products/list-products.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__["RootCategoryService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
    ], ListProductsComponent);
    return ListProductsComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/root-admin/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main\">\n        <div class=\"container\">\n                <div class=\"row main-heading\">\n                  <div class=\"col-lg-12\" style=\"text-align:center;\">\n                    <h1 style=\"font-weight:inherit; font-size: 55px;\">{{this.product?.name}}</h1>\n                    <div class=\"col-sm-12\">\n                    This is a product\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row container\"> \n                        <label class=\"btn-warning btn-lg\" style=\"background-color:#002f6a ;\"> <div class=\"col-md-12\">\n                            \n                            <h3 style=\"font-weight:bold; font-size: 40px; color: white;\">About</h3>\n                    </div> \n                </label>\n                    <div class=\"col-md-12 container\" style=\"outline: 3px solid #020122; \"> \n                    \n                      <p style=\"font-weight: inherit; color: black;\">{{this.product?.description}}</p>\n                     \n                      </div>\n                    </div>\n                \n                <div class=\"row main-heading\">\n                        <div class=\"col-lg-12\" style=\"text-align:center;\">\n                          <label class=\"btn-warning btn-lg\" style=\"background-color: #F18F01;\">\n                      <h3 style=\"font-weight: inherit; color: black;\">Features</h3></label>\n                      </div>\n                    </div>\n                    <div class=\"row text-center\">\n                            <div class=\"col-md-3 col-sm-12 col-xs-12 square\">\n                              <i class=\"fas fa-plus\" style=\"font-size:48px; color: white;\" ></i>\n                              <div class=\"mt-4 col-md-12\">\n                          \n                              </div>\n                              <h5 style=\"font-weight: inherit; color: white;\"> Add Features</h5>\n                          </div>\n\n                          <div class=\"col-md-12\">\n                            <div class=\"row\">\n                            <div class=\"col-md-3 col-sm-12 col-xs-12 square\" *ngFor=\"let feature of product?.otherDetails; let i = index;\">\n                                <h3 style=\"color:white;\">{{feature?.detailName}}</h3>\n\n                            </div> \n                            </div>\n                          </div>\n                          </div>\n\n                          <div class=\"row main-heading\" *ngIf=\"this.categoryData?.type == 'sub'\">\n                              <div class=\"col-lg-12\" style=\"text-align:center;\">\n                                <label class=\"btn-warning btn-lg\" style=\"background-color: #F18F01;\">\n                            <h3 style=\"font-weight: inherit; color: black;\">Products</h3></label>\n                            </div>\n                          </div>\n                        <div class=\"row  text-center\" *ngIf=\"this.categoryData?.type == 'sub'\" (click)=\"navigateToAddProduct(this.categoryId)\" routerLinkActive=\"router-link-active\">\n                            <div class=\"col-md-3 col-sm-12 col-xs-12 square\">\n                                <i class=\"fas fa-plus\" style=\"font-size:48px; color: white;\" ></i>\n                                <div class=\"mt-4 col-md-12\">\n                            \n                                </div>\n                                <h5 style=\"font-weight: inherit; color: white;\" > Add Product</h5>\n                            </div>  \n\n                            <div class=\"col-md-12\" *ngFor=\"let product of product; let i = index;\">\n                                <div class=\"row\">\n                                <div class=\"col-md-3 col-sm-12 col-xs-12 square\">\n                                    <h3 style=\"color:white;\">{{product?.name}}</h3>\n    \n                                </div> \n                                <div class=\"col-md-8 square-description\" style=\"outline: 3px solid #020122; \"> \n                        \n                                    <p style=\"font-weight: inherit; color: black;\">{{this.product?.description}}</p>\n                                    <i class=\"fas fa-edit\" style=\"font-size:24px; color: teal; float: left; cursor: pointer;\"></i>\n                                    <i class=\"fas fa-eye\" routerLink=\"/product/{{this.product?._id}}\" routerLinkActive=\"router-link-active\"  routerLinkActive=\"router-link-active\"  style=\"font-size:24px; color: black; cursor: pointer;float: none; margin: 0 auto;\"></i>\n                                    <i class=\"fas fa-archive\" style=\"font-size:24px; color: darkred;float: right; cursor: pointer;\"></i>\n                                   \n                                    </div>\n                                </div>\n                              </div>\n                        </div>\n \n    </div>"

/***/ }),

/***/ "./src/app/root-admin/product/product.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/root-admin/product/product.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #005fd5;\n  cursor: pointer;\n  margin: 1rem 1rem 1rem 1rem; }\n\n.square-description {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  padding: 1rem 1rem 1rem 1rem;\n  margin: 1rem 1rem 1rem 1rem; }\n\n.square:hover {\n  background-color: #002f6a;\n  color: #020122; }\n"

/***/ }),

/***/ "./src/app/root-admin/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/root-admin/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(rootservice, ngxService, rootService, _activatedRoute) {
        this.rootservice = rootservice;
        this.ngxService = ngxService;
        this.rootService = rootService;
        this._activatedRoute = _activatedRoute;
        this.product = {
            active: '',
            category: [],
            createdDate: '',
            description: '',
            itemPicture: '',
            name: '',
            otherDetails: [],
            _id: ''
        };
        this.categoryData = {
            categoryName: '',
            type: '',
            categoryDescription: '',
            subCategories: [],
            _id: ''
        };
        this.productId = this._activatedRoute.snapshot.paramMap.get('productid');
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.getProduct(this.productId);
    };
    ProductComponent.prototype.getProduct = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootService.getProduct(productId)
                            .subscribe(function (res) {
                            _this.product = res['product'];
                            console.log('Product Fetched', res);
                            _this.rootService.getCategory(_this.product['category'][0])
                                .subscribe(function (res) {
                                console.log('Category Fetched', res['category']['categoryName']);
                            });
                        }, function (err) {
                            console.log('Error while fetching Product', err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/root-admin/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/root-admin/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__["RootCategoryService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"],
            _shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_1__["RootCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/root-admin-home/root-admin-home.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/root-admin/root-admin-home/root-admin-home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-root-admin></app-root-admin>\n<div class=\"main\">\n<div class=\"container\">\n  <div class=\"row main-heading\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Welcome Shubham</h1>\n      <div class=\"col-sm-12\">\n      You are the Root Admin of this Application\n      </div>\n    </div>\n  </div>\n\n<div class=\"row main-heading\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <label class=\"btn-warning btn-lg\" style=\"background-color: #F18F01;\">\n  <h3 style=\"font-weight: inherit; color: black;\">What are you upto today?</h3></label>\n  </div>\n</div>\n\n<div class=\"row main-heading\">\n  <label class=\"btn-warning btn-lg\" style=\"background-color:#002f6a ;\"> \n    <div class=\"col-md-12\">\n                            \n    <h3 style=\"font-weight:bold; font-size: 30px; color: white;\">Categories</h3>\n</div>\n</label> \n</div>\n\n<div class=\"row text-center\">\n    <div class=\"col-md-5 square\"  routerLink=\"/root-admin/add-category\">\n      <i class=\"fas fa-plus\" style=\"font-size:48px; color: white;\" ></i>\n      <div class=\"mt-4 col-md-12\">\n  \n      </div>\n      <h5 style=\"font-weight: inherit; color: white;\"> Add a new Root-Category</h5>\n  </div>\n  \n<div class=\"col-md-5 square\"  routerLink=\"/root-admin/list-categories\">\n    <i class=\"fas fa-file\" style=\"font-size:48px; color: white;\"></i>\n    <div class=\"mt-4 col-md-12\">\n\n    </div>\n    <h5 style=\"font-weight: inherit; color: white;\">List all root-categories</h5>\n</div>\n</div>\n<div class=\"row text-center\">\n  <div class=\"col-md-5 square\"  routerLink=\"/root-admin/add-sub-category\">\n    <i class=\"fas fa-plus\" style=\"font-size:48px; color: white;\" ></i>\n    <div class=\"mt-4 col-md-12\">\n\n    </div>\n    <h5 style=\"font-weight: inherit; color: white;\"> Add a new Sub-Category</h5>\n</div>\n\n<div class=\"col-md-5 square\"  routerLink=\"/root-admin/list-sub-categories\">\n  <i class=\"fas fa-file\" style=\"font-size:48px; color: white;\"></i>\n  <div class=\"mt-4 col-md-12\">\n\n  </div>\n  <h5 style=\"font-weight: inherit; color: white;\">List all sub-Categories</h5>\n</div>\n</div>\n<div class=\"row main-heading\">\n  <label class=\"btn-warning btn-lg\" style=\"background-color:#002f6a ;\"> \n    <div class=\"col-md-12\">\n                            \n    <h3 style=\"font-weight:bold; font-size: 30px; color: white;\">Products</h3>\n</div>\n</label> \n</div>\n<div class=\"row text-center\">\n  <div class=\"col-md-5 square\"  routerLink=\"/root-admin/product/choose-category\">\n    <i class=\"fas fa-plus\" style=\"font-size:48px; color: white;\" ></i>\n    <div class=\"mt-4 col-md-12\">\n\n    </div>\n    <h5 style=\"font-weight: inherit; color: white;\"> Add a new product</h5>\n</div>\n\n<div class=\"col-md-5 square\"  routerLink=\"/root-admin/list-products\">\n  <i class=\"fas fa-file\" style=\"font-size:48px; color: white;\"></i>\n  <div class=\"mt-4 col-md-12\">\n\n  </div>\n  <h5 style=\"font-weight: inherit; color: white;\">List all Products</h5>\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/root-admin/root-admin-home/root-admin-home.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/root-admin/root-admin-home/root-admin-home.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #005fd5;\n  cursor: pointer;\n  margin: 1rem 1rem 1rem 1rem; }\n\n.square:hover {\n  background-color: #002f6a;\n  color: #020122; }\n"

/***/ }),

/***/ "./src/app/root-admin/root-admin-home/root-admin-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/root-admin/root-admin-home/root-admin-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: RootAdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootAdminHomeComponent", function() { return RootAdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootAdminHomeComponent = /** @class */ (function () {
    function RootAdminHomeComponent(ngxService) {
        this.ngxService = ngxService;
    }
    RootAdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    };
    RootAdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root-admin-home',
            template: __webpack_require__(/*! ./root-admin-home.component.html */ "./src/app/root-admin/root-admin-home/root-admin-home.component.html"),
            styles: [__webpack_require__(/*! ./root-admin-home.component.scss */ "./src/app/root-admin/root-admin-home/root-admin-home.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["NgxUiLoaderService"]])
    ], RootAdminHomeComponent);
    return RootAdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/root-admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/root-admin/root-admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n"

/***/ }),

/***/ "./src/app/root-admin/root-admin.component.scss":
/*!******************************************************!*\
  !*** ./src/app/root-admin/root-admin.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/root-admin/root-admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/root-admin/root-admin.component.ts ***!
  \****************************************************/
/*! exports provided: RootAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootAdminComponent", function() { return RootAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootAdminComponent = /** @class */ (function () {
    function RootAdminComponent() {
    }
    RootAdminComponent.prototype.ngOnInit = function () {
    };
    RootAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root-admin',
            template: __webpack_require__(/*! ./root-admin.component.html */ "./src/app/root-admin/root-admin.component.html"),
            styles: [__webpack_require__(/*! ./root-admin.component.scss */ "./src/app/root-admin/root-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RootAdminComponent);
    return RootAdminComponent;
}());



/***/ }),

/***/ "./src/app/root-admin/root-category/root-category.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/root-admin/root-category/root-category.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"main\">\r\n        <div class=\"container\">\r\n                <div class=\"row main-heading\">\r\n                  <div class=\"col-lg-12\" style=\"text-align:center;\">\r\n                    <h1 style=\"font-weight:inherit; font-size: 55px;\">{{this.categoryData?.categoryName}} Category</h1>\r\n                    <div class=\"col-sm-12\">\r\n                    This is a {{this.categoryData?.type}} Category\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row container\"> \r\n                        <label class=\"btn-warning btn-lg\" style=\"background-color:#002f6a ;\"> <div class=\"col-md-12\">\r\n                            \r\n                            <h3 style=\"font-weight:bold; font-size: 40px; color: white;\">About</h3>\r\n                    </div> \r\n                </label>\r\n                    <div class=\"col-md-12 container\" style=\"outline: 3px solid #020122; \"> \r\n                    \r\n                      <p style=\"font-weight: inherit; color: black;\">{{this.categoryData?.categoryDescription}}</p>\r\n                     \r\n                      </div>\r\n                    </div>\r\n                \r\n                <div class=\"row main-heading\">\r\n                        <div class=\"col-lg-12\" style=\"text-align:center;\">\r\n                          <label class=\"btn-warning btn-lg\" style=\"background-color: #F18F01;\">\r\n                      <h3 style=\"font-weight: inherit; color: black;\">Subcategories</h3></label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row text-center\">\r\n                            <div class=\"col-md-3 col-sm-12 col-xs-12 square\"  (click)=\"addSubCategory();\">\r\n                              <i class=\"fas fa-plus\" style=\"font-size:48px; color: white;\" ></i>\r\n                              <div class=\"mt-4 col-md-12\">\r\n                          \r\n                              </div>\r\n                              <h5 style=\"font-weight: inherit; color: white;\"> Add sub-category</h5>\r\n                          </div>\r\n\r\n                          <div class=\"col-md-12\" *ngFor=\"let subcategory of subCategoriesData; let i = index;\">\r\n                            <div class=\"row\">\r\n                            <div class=\"col-md-3 col-sm-12 col-xs-12 square\" [routerLink]=\"['/root-admin/category',subcategory?._id]\">\r\n                                <h3 style=\"color:white;\">{{subcategory?.categoryName}}</h3>\r\n\r\n                            </div> \r\n                            <div class=\"col-md-8 square-description\" style=\"outline: 3px solid #020122; \"> \r\n                    \r\n                                <p style=\"font-weight: inherit; color: black;\">{{this.subcategory?.categoryDescription}}</p>\r\n                                <i class=\"fas fa-edit\" (click)=\"updateCategory(subcategory?._id, subcategory?.categoryName, subcategory?.categoryDescription)\" style=\"font-size:24px; color: #005fd5; float: left; cursor: pointer;\"></i>\r\n                                <i class=\"fas fa-eye\" [routerLink]=\"['/root-admin/category',subcategory?._id]\" routerLinkActive=\"router-link-active\"  style=\"font-size:24px; color: #005fd5; cursor: pointer;float: none; margin: 0 auto;\"></i>\r\n                                <i class=\"fas fa-archive\" (click)=\"deleteCategory(subcategory?._id)\" style=\"font-size:24px; color: #005fd5;float: right; cursor: pointer;\"></i>\r\n                               \r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                          </div>\r\n\r\n                          <div class=\"row main-heading\" *ngIf=\"this.categoryData?.type == 'sub'\">\r\n                              <div class=\"col-lg-12\" style=\"text-align:center;\">\r\n                                <label class=\"btn-warning btn-lg\" style=\"background-color: #F18F01;\">\r\n                            <h3 style=\"font-weight: inherit; color: black;\">Products</h3></label>\r\n                            </div>\r\n                          </div>\r\n                        <div class=\"row  text-center\" *ngIf=\"this.categoryData?.type == 'sub'\" (click)=\"navigateToAddProduct(this.categoryId)\" routerLinkActive=\"router-link-active\">\r\n                            <div class=\"col-md-3 col-sm-12 col-xs-12 square\">\r\n                                <i class=\"fas fa-plus\" style=\"font-size:48px; color: white;\" ></i>\r\n                                <div class=\"mt-4 col-md-12\">\r\n                            \r\n                                </div>\r\n                                <h5 style=\"font-weight: inherit; color: white;\" > Add Product</h5>\r\n                            </div>  \r\n\r\n                            <div class=\"col-md-12\" *ngFor=\"let product of product; let i = index;\">\r\n                                <div class=\"row\">\r\n                                <div class=\"col-md-3 col-sm-12 col-xs-12 square\" routerLink=\"/product/{{this.product?._id}}\">\r\n                                    <h3 style=\"color:white;\">{{product?.name}}</h3>\r\n    \r\n                                </div> \r\n                                <div class=\"col-md-8 square-description\" style=\"outline: 3px solid #020122; \"> \r\n                        \r\n                                    <p style=\"font-weight: inherit; color: black;\">{{this.product?.description}}</p>\r\n                                    <i class=\"fas fa-edit\" style=\"font-size:24px; color: teal; float: left; cursor: pointer;\"></i>\r\n                                    <i class=\"fas fa-eye\" routerLink=\"/product/{{this.product?._id}}\" routerLinkActive=\"router-link-active\"  routerLinkActive=\"router-link-active\"  style=\"font-size:24px; color: black; cursor: pointer;float: none; margin: 0 auto;\"></i>\r\n                                    <i class=\"fas fa-archive\" style=\"font-size:24px; color: darkred;float: right; cursor: pointer;\"></i>\r\n                                   \r\n                                    </div>\r\n                                </div>\r\n                              </div>\r\n                        </div>\r\n \r\n    </div>"

/***/ }),

/***/ "./src/app/root-admin/root-category/root-category.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/root-admin/root-category/root-category.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-heading {\n  padding: 1rem;\n  font-weight: bold; }\n\n.square {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  padding: 1rem 1rem 1rem 1rem;\n  background-color: #005fd5;\n  cursor: pointer;\n  margin: 1rem 1rem 1rem 1rem; }\n\n.square-description {\n  height: 150px;\n  width: 150px;\n  font-weight: bold;\n  padding: 1rem 1rem 1rem 1rem;\n  margin: 1rem 1rem 1rem 1rem; }\n\n.square:hover {\n  background-color: #002f6a;\n  color: #020122; }\n"

/***/ }),

/***/ "./src/app/root-admin/root-category/root-category.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/root-admin/root-category/root-category.component.ts ***!
  \*********************************************************************/
/*! exports provided: RootCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootCategoryComponent", function() { return RootCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var src_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/services/root-category.service */ "./src/shared/services/root-category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RootCategoryComponent = /** @class */ (function () {
    function RootCategoryComponent(ngxService, router, rootService, _activatedRoute) {
        this.ngxService = ngxService;
        this.router = router;
        this.rootService = rootService;
        this._activatedRoute = _activatedRoute;
        this.categoryData = {
            categoryName: '',
            type: '',
            categoryDescription: '',
            subCategories: [],
            _id: ''
        };
        this.subCategoriesData = new Array();
        this.product = new Array();
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
    RootCategoryComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    RootCategoryComponent.prototype.navigateToAddProduct = function (subCategory) {
        var navigationExtras = {
            queryParams: {
                "subCategory": subCategory
            }
        };
        this.router.navigate(['root-admin', 'add-product'], navigationExtras);
        console.log(navigationExtras);
    };
    RootCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subCategoriesData = [];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(function () {
            _this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        this.getCategory(this.categoryId);
    };
    RootCategoryComponent.prototype.getAllSubcategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var count, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        count = -1;
                        if (!(this.categoryData['subCategories'].length > 0)) return [3 /*break*/, 4];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.categoryData['subCategories'].length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rootService.getCategory(this.categoryData['subCategories'][i])
                                .subscribe(function (res) {
                                // console.log('Category Name: ',res['category']['categoryName'],'\nCategory Status: ',res['category']['active']);
                                if (res['category']['active'] == true) {
                                    _this.subCategoriesData.push(res['category']);
                                }
                            }, function (err) {
                                console.log('Error Occured while fetching Sub Categories', err);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RootCategoryComponent.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.categoryData['products'].length > 0)) return [3 /*break*/, 4];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.categoryData['products'].length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rootService.getProduct(this.categoryData['products'][i])
                                .subscribe(function (res) {
                                // console.log('Category Name: ',res['category']['categoryName'],'\nCategory Status: ',res['category']['active']);
                                if (res['product']['active'] == true) {
                                    _this.product.push(res['product']);
                                }
                            }, function (err) {
                                console.log('Error Occured while fetching Products', err);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RootCategoryComponent.prototype.getCategory = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootService.getCategory(categoryId)
                            .subscribe(function (res) {
                            _this.categoryData = res['category'];
                            console.log('Category Fetched', res);
                            _this.getAllSubcategories();
                            _this.getProducts();
                            console.log('Subcategories Fetched', _this.subCategoriesData);
                            console.log('Products', _this.product);
                        }, function (err) {
                            console.log('Error while fetching Category', err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RootCategoryComponent.prototype.addSubCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var subCategoryData, formValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subCategoryData = new Object();
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                                title: 'Sub Category for ' + this.categoryData['categoryName'],
                                html: '<label For=\'input1\'> Category Name</label>' +
                                    '<input id="input1" class="swal2-input">' +
                                    '<label For=\'input2\'> Category Description</label>' +
                                    '<textarea id="input2" class="swal2-input"></textarea>',
                                focusConfirm: false,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                                preConfirm: function () {
                                    return [
                                        document.getElementById('input1')['value'],
                                        document.getElementById('input2')['value']
                                    ];
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            subCategoryData['categoryName'] = formValues[0];
                            subCategoryData['categoryDescription'] = formValues[1];
                            subCategoryData['type'] = 'sub';
                            subCategoryData['parentCategories'] = [{}];
                            console.log('Sub Category Form Data', subCategoryData);
                            this.rootService.addCategory(subCategoryData)
                                .subscribe(function (res) {
                                console.log('Sub Category Added', res);
                                //UPDATING THE SUB CATEGORY TO PUSH PARENT CATEGORY ID INTO IT
                                var updateSubCategoryData = {
                                    parentCategories: [{
                                            _id: _this.categoryId
                                        }]
                                };
                                _this.rootService.updateCategory(res['category']._id, updateSubCategoryData)
                                    .subscribe(function (res) {
                                    console.log('Sub Category has been Updaed as well with Parent ID', res);
                                    //UPDATING THE PARENT CATEGORY TO PUSH SUB CATEGORY ID INTO IT
                                    if (!_this.categoryData['subCategories'].includes(res['category']._id)) {
                                        _this.categoryData['subCategories'].push({ _id: res['category']._id });
                                        _this.rootService.updateCategory(_this.categoryId, _this.categoryData)
                                            .subscribe(function (res) {
                                            console.log('Root Category has been updated!', res);
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                                                type: 'success',
                                                title: subCategoryData['categoryName'] + ' has been added!',
                                                showConfirmButton: false,
                                                timer: 1500
                                            }).then(function (res) {
                                                _this.subCategoriesData = [];
                                                _this.ngOnInit();
                                            });
                                        }, function (err) {
                                            console.log('Error while updating the root category', err);
                                        });
                                    }
                                }, function (err) {
                                    console.log('Error While Updating Sub Category', err);
                                });
                            }, function (err) {
                                console.log('Error while adding the sub category', err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RootCategoryComponent.prototype.updateCategory = function (categoryId, categoryName, categoryDescription) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var subCategoryData, formValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subCategoryData = new Object();
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                                title: 'Update Category - ' + categoryName,
                                html: '<label For=\'input1\'> Category Name</label>' +
                                    '<input id="input1" class="swal2-input" value=' + categoryName + '>' +
                                    '<label For=\'input2\'> Category Description</label>' +
                                    '<textarea id="input2" class="swal2-input">' + categoryDescription + '</textarea>',
                                focusConfirm: false,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                                preConfirm: function () {
                                    return [
                                        document.getElementById('input1')['value'],
                                        document.getElementById('input2')['value']
                                    ];
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            subCategoryData['categoryName'] = formValues[0];
                            subCategoryData['categoryDescription'] = formValues[1];
                            console.log('Sub Category Form Data', subCategoryData);
                            this.rootService.updateCategory(categoryId, subCategoryData)
                                .subscribe(function (res) {
                                console.log('Category Updated', res);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                                    type: 'success',
                                    title: 'Category has been updated!',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(function (res) {
                                    _this.subCategoriesData = [];
                                    _this.ngOnInit();
                                });
                            }, function (err) {
                                console.log('Error while updating the category', err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RootCategoryComponent.prototype.deleteCategory = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var swalWithBootstrapButtons;
            return __generator(this, function (_a) {
                swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then(function (result) {
                    var categoryData = {
                        active: 'false'
                    };
                    if (result.value) {
                        swalWithBootstrapButtons('Deleted!', 'Your file has been deleted.', 'success').then(function (thenRes) {
                            _this.rootService.updateCategory(categoryId, categoryData)
                                .subscribe(function (res) {
                                console.log('Category marked with status as not active', res);
                            }, function (err) {
                                console.log('Error while marking as inactive', err);
                            });
                            _this.subCategoriesData = [];
                            _this.ngOnInit();
                        });
                    }
                    else if (
                    // Read more about handling dismissals
                    result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                        swalWithBootstrapButtons('Cancelled', 'Category was not deleted :)', 'error');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    RootCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root-category',
            template: __webpack_require__(/*! ./root-category.component.html */ "./src/app/root-admin/root-category/root-category.component.html"),
            styles: [__webpack_require__(/*! ./root-category.component.scss */ "./src/app/root-admin/root-category/root-category.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["NgxUiLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_shared_services_root_category_service__WEBPACK_IMPORTED_MODULE_2__["RootCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RootCategoryComponent);
    return RootCategoryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    BASE_API_URL: 'http://localhost:8080/api',
    BASE_URL: 'http://localhost:8080/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/shared/services/root-category.service.ts":
/*!******************************************************!*\
  !*** ./src/shared/services/root-category.service.ts ***!
  \******************************************************/
/*! exports provided: RootCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootCategoryService", function() { return RootCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RootCategoryService = /** @class */ (function () {
    function RootCategoryService(_http) {
        this._http = _http;
        this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_API_URL;
    }
    RootCategoryService.prototype.addCategory = function (categoryData) {
        return this._http.post(this.BASE_API_URL + '/categories', categoryData);
    };
    RootCategoryService.prototype.getCategory = function (categoryId) {
        return this._http.get(this.BASE_API_URL + '/categories/' + categoryId);
    };
    RootCategoryService.prototype.getRootCategories = function () {
        return this._http.get(this.BASE_API_URL + '/categories');
    };
    RootCategoryService.prototype.deleteCategories = function (categoryId) {
        return this._http.delete(this.BASE_API_URL + '/categories/' + categoryId);
    };
    RootCategoryService.prototype.updateCategory = function (categoryId, categoryData) {
        return this._http.put(this.BASE_API_URL + '/categories/' + categoryId, categoryData);
    };
    RootCategoryService.prototype.addProduct = function (product) {
        return this._http.post(this.BASE_API_URL + '/products', product);
    };
    RootCategoryService.prototype.getProduct = function (productId) {
        return this._http.get(this.BASE_API_URL + '/products/' + productId);
    };
    RootCategoryService.prototype.getProducts = function () {
        return this._http.get(this.BASE_API_URL + '/products');
    };
    RootCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RootCategoryService);
    return RootCategoryService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\amtica\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map