(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-search-search-module"],{

/***/ "57Nf":
/*!**********************************************!*\
  !*** ./src/app/tabs/search/search.module.ts ***!
  \**********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "epAm");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "sc+L");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");








let SearchPageModule = class SearchPageModule {
};
SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "PuxA":
/*!**********************************************!*\
  !*** ./src/app/tabs/search/search.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "e575":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/search/search.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"https://unpkg.com/ionicons@5.1.2/dist/ionicons.js\"></script>\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>search</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar (ionChange)=\"searchmethod($event)\" showCancelButton=\"focus\" cancelButtonText=\"ยกเลิก\"></ion-searchbar>\r\n    <ion-item>\r\n      <div class=\"ion-text-wrap\" style=\"margin-left: 200px\" >\r\n        <ion-label><a (click)=\"searchAdvanced()\">ค้นหาขั้นสูง</a></ion-label>\r\n      </div>\r\n  </ion-item>\r\n\r\n  <ion-list *ngIf=\"isItemAvailable\" >\r\n    <ion-item (click)=\"clickstore(data.id_store)\" *ngFor=\"let data of datasearch | filtro: textsearch: 'name_store'\">\r\n      {{ data.name_store }}</ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "epAm":
/*!******************************************************!*\
  !*** ./src/app/tabs/search/search-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "sc+L");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    },
    {
        path: 'search-advanced',
        loadChildren: () => __webpack_require__.e(/*! import() | partofpage-search-advanced-search-advanced-module */ "partofpage-search-advanced-search-advanced-module").then(__webpack_require__.bind(null, /*! ../../partofpage/search-advanced/search-advanced.module */ "pEFe")).then(m => m.SearchAdvancedPageModule)
    },
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "sc+L":
/*!********************************************!*\
  !*** ./src/app/tabs/search/search.page.ts ***!
  \********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search.page.html */ "e575");
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.page.scss */ "PuxA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../datapass.service */ "woWk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







let SearchPage = class SearchPage {
    constructor(router, datapass, Http) {
        this.router = router;
        this.datapass = datapass;
        this.Http = Http;
        this.datasearch = [];
        this.textsearch = '';
        this.isItemAvailable = false;
    }
    ngOnInit() {
        this.datasearch = this.datapass.datastore;
    }
    searchAdvanced() {
        const navigate = this.router.navigate(['/home/tabs/search/search-advanced']);
    }
    searchmethod(event) {
        if (event.detail.value !== '') {
            this.isItemAvailable = true;
            this.textsearch = event.detail.value;
        }
        else {
            this.isItemAvailable = false;
        }
    }
    clickstore(id_store) {
        let dataJSON = {
            'id_store': id_store,
        };
        this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/getingfield', JSON.stringify(dataJSON))
            .subscribe(datafield => {
            this.datapass.datafield = datafield;
            this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/getstoreformID', JSON.stringify(dataJSON))
                .subscribe(datastore => {
                this.datapass.getingfieldfromstore = datastore;
                let navigate = this.router.navigate(['/home/tabs/myhome/myhome-field']);
            });
        });
    }
};
SearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_5__["DatapassService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=tabs-search-search-module-es2015.js.map