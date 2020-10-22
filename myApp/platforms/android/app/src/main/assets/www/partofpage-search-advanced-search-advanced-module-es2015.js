(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-search-advanced-search-advanced-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/search-advanced/search-advanced.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/search-advanced/search-advanced.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n        <ion-buttons>\r\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"primary\" >\r\n          <ion-button color=\"secondary\">\r\n            Done\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>ค้นหาขั้นสูง</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-range dualKnobs=\"true\" [min]=timeMin [max]=timeMax step=\"3\"\r\n              [(ngModel)]=\"time\" (ionChange)=\"setBadge(time)\" ></ion-range>\r\n  <div >\r\n    <ion-item>\r\n      <ion-text color=\"primary\">{{this.timeMin2}} - </ion-text>\r\n      <ion-text color=\"primary\">{{this.timeMax2}}บาท</ion-text>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <ion-item>\r\n    <ion-label>Select: province</ion-label>\r\n    <ion-select class=\"custom-options\" [(ngModel)]=\"mySelectprovince\" (ionChange)=\"selectedprovincemethod(mySelectprovince)\">\r\n      <ion-select-option  *ngFor=\"let province of this.selectedprovince \"\r\n                          value=\"{{province.id}}\"> {{province.name_th}} </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Select: amphures</ion-label>\r\n    <ion-select class=\"custom-options\" [(ngModel)]=\"mySelectamphures\" (ionChange)=\"selectedamphuresmethod(mySelectamphures)\">\r\n      <ion-select-option  *ngFor=\"let amphures of this.selectedamphures \"\r\n                          value=\"{{amphures.id}}\"> {{amphures.name_th}} </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n<!--  <ion-item>-->\r\n<!--    <ion-label>Time</ion-label>-->\r\n<!--    <ion-datetime cancelText=\"cancel\" doneText=\"done\" displayFormat=\"DD : MMMM\"></ion-datetime>-->\r\n<!--  </ion-item>-->\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/partofpage/search-advanced/search-advanced-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/partofpage/search-advanced/search-advanced-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SearchAdvancedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAdvancedPageRoutingModule", function() { return SearchAdvancedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_advanced_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-advanced.page */ "./src/app/partofpage/search-advanced/search-advanced.page.ts");




const routes = [
    {
        path: '',
        component: _search_advanced_page__WEBPACK_IMPORTED_MODULE_3__["SearchAdvancedPage"]
    }
];
let SearchAdvancedPageRoutingModule = class SearchAdvancedPageRoutingModule {
};
SearchAdvancedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchAdvancedPageRoutingModule);



/***/ }),

/***/ "./src/app/partofpage/search-advanced/search-advanced.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/partofpage/search-advanced/search-advanced.module.ts ***!
  \**********************************************************************/
/*! exports provided: SearchAdvancedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAdvancedPageModule", function() { return SearchAdvancedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_advanced_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-advanced-routing.module */ "./src/app/partofpage/search-advanced/search-advanced-routing.module.ts");
/* harmony import */ var _search_advanced_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-advanced.page */ "./src/app/partofpage/search-advanced/search-advanced.page.ts");







let SearchAdvancedPageModule = class SearchAdvancedPageModule {
};
SearchAdvancedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_advanced_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchAdvancedPageRoutingModule"]
        ],
        declarations: [_search_advanced_page__WEBPACK_IMPORTED_MODULE_6__["SearchAdvancedPage"]]
    })
], SearchAdvancedPageModule);



/***/ }),

/***/ "./src/app/partofpage/search-advanced/search-advanced.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/partofpage/search-advanced/search-advanced.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2Uvc2VhcmNoLWFkdmFuY2VkL3NlYXJjaC1hZHZhbmNlZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/partofpage/search-advanced/search-advanced.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/partofpage/search-advanced/search-advanced.page.ts ***!
  \********************************************************************/
/*! exports provided: SearchAdvancedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAdvancedPage", function() { return SearchAdvancedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../datapass.service */ "./src/app/datapass.service.ts");




let SearchAdvancedPage = class SearchAdvancedPage {
    constructor(Http, datapass) {
        this.Http = Http;
        this.datapass = datapass;
        this.timeMin = 100;
        this.timeMax = 200;
        this.timeMin2 = this.timeMin;
        this.timeMax2 = this.timeMax;
        this.selectedprovince = this.datapass.selectedprovince;
    }
    ngOnInit() {
    }
    setBadge(time) {
        this.timeMin2 = time.lower;
        this.timeMax2 = time.upper;
        console.log(this.timeMin2);
        console.log(this.timeMax2);
    }
    selectedprovincemethod(select) {
        console.log(select);
        let dataJSON = {
            'PATIENT_ID': select,
        };
        this.Http.post('http://localhost:5000/apiFinal/amphures', JSON.stringify(dataJSON))
            .subscribe(data => {
            this.selectedamphures = data;
            console.log(this.selectedamphures);
        });
    }
    selectedamphuresmethod(mySelectamphures) {
        console.log(mySelectamphures);
    }
};
SearchAdvancedPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_3__["DatapassService"] }
];
SearchAdvancedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-advanced',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-advanced.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/search-advanced/search-advanced.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-advanced.page.scss */ "./src/app/partofpage/search-advanced/search-advanced.page.scss")).default]
    })
], SearchAdvancedPage);



/***/ })

}]);
//# sourceMappingURL=partofpage-search-advanced-search-advanced-module-es2015.js.map