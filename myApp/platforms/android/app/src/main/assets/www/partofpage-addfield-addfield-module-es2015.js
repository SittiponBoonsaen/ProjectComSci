(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-addfield-addfield-module"],{

/***/ "2Buf":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/addfield/addfield.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>addfield</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "2aih":
/*!********************************************************!*\
  !*** ./src/app/partofpage/addfield/addfield.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvYWRkZmllbGQvYWRkZmllbGQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "IfaH":
/*!********************************************************!*\
  !*** ./src/app/partofpage/addfield/addfield.module.ts ***!
  \********************************************************/
/*! exports provided: AddfieldPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfieldPageModule", function() { return AddfieldPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addfield_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addfield-routing.module */ "t38z");
/* harmony import */ var _addfield_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addfield.page */ "X4gS");







let AddfieldPageModule = class AddfieldPageModule {
};
AddfieldPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addfield_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddfieldPageRoutingModule"]
        ],
        declarations: [_addfield_page__WEBPACK_IMPORTED_MODULE_6__["AddfieldPage"]]
    })
], AddfieldPageModule);



/***/ }),

/***/ "X4gS":
/*!******************************************************!*\
  !*** ./src/app/partofpage/addfield/addfield.page.ts ***!
  \******************************************************/
/*! exports provided: AddfieldPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfieldPage", function() { return AddfieldPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addfield_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addfield.page.html */ "2Buf");
/* harmony import */ var _addfield_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addfield.page.scss */ "2aih");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddfieldPage = class AddfieldPage {
    constructor() { }
    ngOnInit() {
    }
};
AddfieldPage.ctorParameters = () => [];
AddfieldPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addfield',
        template: _raw_loader_addfield_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addfield_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddfieldPage);



/***/ }),

/***/ "t38z":
/*!****************************************************************!*\
  !*** ./src/app/partofpage/addfield/addfield-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AddfieldPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfieldPageRoutingModule", function() { return AddfieldPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addfield_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addfield.page */ "X4gS");




const routes = [
    {
        path: '',
        component: _addfield_page__WEBPACK_IMPORTED_MODULE_3__["AddfieldPage"]
    }
];
let AddfieldPageRoutingModule = class AddfieldPageRoutingModule {
};
AddfieldPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddfieldPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=partofpage-addfield-addfield-module-es2015.js.map