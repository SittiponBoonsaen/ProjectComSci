(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-search-advanced-search-advanced-module"],{

/***/ "Av5k":
/*!********************************************************************!*\
  !*** ./src/app/partofpage/search-advanced/search-advanced.page.ts ***!
  \********************************************************************/
/*! exports provided: SearchAdvancedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAdvancedPage", function() { return SearchAdvancedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_advanced_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-advanced.page.html */ "T3HK");
/* harmony import */ var _search_advanced_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-advanced.page.scss */ "HPm5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../datapass.service */ "woWk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let SearchAdvancedPage = class SearchAdvancedPage {
    constructor(Http, datapass, loadingController) {
        this.Http = Http;
        this.datapass = datapass;
        this.loadingController = loadingController;
        this.timeMin = 300;
        this.timeMax = 2000;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'รอสักครู่...',
            });
            console.log(select);
            let dataJSON = {
                'PATIENT_ID': select,
            };
            this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/amphures', JSON.stringify(dataJSON))
                .subscribe(data => {
                this.selectedamphures = data;
                this.loading.dismiss();
                console.log(this.selectedamphures);
            });
            this.loading.present();
        });
    }
    selectedamphuresmethod(mySelectamphures) {
        console.log(mySelectamphures);
    }
};
SearchAdvancedPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_5__["DatapassService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
SearchAdvancedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-advanced',
        template: _raw_loader_search_advanced_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_advanced_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchAdvancedPage);



/***/ }),

/***/ "HPm5":
/*!**********************************************************************!*\
  !*** ./src/app/partofpage/search-advanced/search-advanced.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9zZWFyY2gtYWR2YW5jZWQvc2VhcmNoLWFkdmFuY2VkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXJ0b2ZwYWdlL3NlYXJjaC1hZHZhbmNlZC9zZWFyY2gtYWR2YW5jZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "T3HK":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/search-advanced/search-advanced.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css2?family=Sriracha&display=swap\" rel=\"stylesheet\">\r\n<ion-header class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\r\n  <ion-toolbar class=\"background\">\r\n        <ion-buttons >\r\n          <ion-back-button style=\"font-family: 'Sriracha', cursive;\" defaultHref=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"primary\" >\r\n          <ion-button color=\"secondary\" style=\"font-family: 'Sriracha', cursive;\">\r\n            Done\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"font-family: 'Sriracha', cursive;\">ค้นหาขั้นสูง</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\r\n\r\n\r\n  <ion-range dualKnobs=\"true\" [min]=timeMin [max]=timeMax step=\"3\"\r\n              [(ngModel)]=\"time\" (ionChange)=\"setBadge(time)\" ></ion-range>\r\n  <div >\r\n    <ion-item  class=\"background\">\r\n      <ion-text style=\"font-family: 'Sriracha', cursive;\" color=\"primary\">{{this.timeMin2}} - </ion-text>\r\n      <ion-text style=\"font-family: 'Sriracha', cursive;\" color=\"primary\">{{ this.timeMax2}} บาท /ชั่วโมง</ion-text>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <ion-item  class=\"background\">\r\n    <ion-label style=\"font-family: 'Sriracha', cursive;\">Select: province</ion-label>\r\n    <ion-select style=\"font-family: 'Sriracha', cursive;\"  class=\"custom-options\" [(ngModel)]=\"mySelectprovince\" (ionChange)=\"selectedprovincemethod(mySelectprovince)\">\r\n      <ion-select-option  *ngFor=\"let province of this.selectedprovince \" style=\"font-family: 'Sriracha', cursive;\"\r\n                          value=\"{{province.id}}\"> {{province.name_th}} </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item  class=\"background\">\r\n    <ion-label style=\"font-family: 'Sriracha', cursive;\" >Select: amphures</ion-label>\r\n    <ion-select style=\"font-family: 'Sriracha', cursive;\" class=\"custom-options\" [(ngModel)]=\"mySelectamphures\" (ionChange)=\"selectedamphuresmethod(mySelectamphures)\">\r\n      <ion-select-option  *ngFor=\"let amphures of this.selectedamphures \" style=\"font-family: 'Sriracha', cursive;\"\r\n                          value=\"{{amphures.id}}\"> {{amphures.name_th}} </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n<!--  <ion-item>-->\r\n<!--    <ion-label>Time</ion-label>-->\r\n<!--    <ion-datetime cancelText=\"cancel\" doneText=\"done\" displayFormat=\"DD : MMMM\"></ion-datetime>-->\r\n<!--  </ion-item>-->\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "gBki":
/*!******************************************************************************!*\
  !*** ./src/app/partofpage/search-advanced/search-advanced-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SearchAdvancedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAdvancedPageRoutingModule", function() { return SearchAdvancedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_advanced_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-advanced.page */ "Av5k");




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

/***/ "pEFe":
/*!**********************************************************************!*\
  !*** ./src/app/partofpage/search-advanced/search-advanced.module.ts ***!
  \**********************************************************************/
/*! exports provided: SearchAdvancedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAdvancedPageModule", function() { return SearchAdvancedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_advanced_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-advanced-routing.module */ "gBki");
/* harmony import */ var _search_advanced_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-advanced.page */ "Av5k");







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



/***/ })

}]);
//# sourceMappingURL=partofpage-search-advanced-search-advanced-module-es2015.js.map