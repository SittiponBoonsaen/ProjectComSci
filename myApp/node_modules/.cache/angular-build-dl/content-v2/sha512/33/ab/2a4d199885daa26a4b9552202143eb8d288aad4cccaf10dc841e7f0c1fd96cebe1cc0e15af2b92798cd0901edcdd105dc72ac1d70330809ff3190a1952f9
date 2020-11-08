(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-managestore-managestore-module"],{

/***/ "3q6T":
/*!**********************************************************************!*\
  !*** ./src/app/partofpage/managestore/managestore-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ManagestorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagestorePageRoutingModule", function() { return ManagestorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _managestore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managestore.page */ "fSdC");




const routes = [
    {
        path: '',
        component: _managestore_page__WEBPACK_IMPORTED_MODULE_3__["ManagestorePage"]
    },
    {
        path: 'addstore',
        loadChildren: () => __webpack_require__.e(/*! import() | partofpage-addstore-addstore-module */ "partofpage-addstore-addstore-module").then(__webpack_require__.bind(null, /*! ../../partofpage/addstore/addstore.module */ "u/bj")).then(m => m.AddstorePageModule)
    },
    {
        path: 'editstore',
        loadChildren: () => __webpack_require__.e(/*! import() | partofpage-editstore-editstore-module */ "partofpage-editstore-editstore-module").then(__webpack_require__.bind(null, /*! ../../partofpage/editstore/editstore.module */ "UiBP")).then(m => m.EditstorePageModule)
    },
    {
        path: 'managefield',
        loadChildren: () => __webpack_require__.e(/*! import() | partofpage-managefield-managefield-module */ "partofpage-managefield-managefield-module").then(__webpack_require__.bind(null, /*! ../../partofpage/managefield/managefield.module */ "WpsQ")).then(m => m.ManagefieldPageModule)
    },
];
let ManagestorePageRoutingModule = class ManagestorePageRoutingModule {
};
ManagestorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManagestorePageRoutingModule);



/***/ }),

/***/ "Two8":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/managestore/managestore.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\r\n\r\n<link href=\"https://fonts.googleapis.com/css2?family=Sriracha&display=swap\" rel=\"stylesheet\">\r\n<ion-header class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\r\n  <ion-toolbar class=\"background\">\r\n    <ion-buttons>\r\n      <ion-back-button style=\"font-family: 'Sriracha', cursive;\" style=\"font-family: 'Sriracha', cursive;\" defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"font-family: 'Sriracha', cursive;\">จัดการร้าน</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\r\n  <p-table [value]=\"products\">\r\n    <ng-template pTemplate=\"caption\">\r\n      <div class=\"p-d-flex p-ai-center p-jc-between\" style=\"font-family: 'Sriracha', cursive;\">\r\n        ข้อมูลร้าน\r\n      </div>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\">\r\n      <tr style=\"font-family: 'Sriracha', cursive;\">\r\n        <th>Image</th>\r\n        <th>Name</th>\r\n        <th>#</th>\r\n<!--        <th>Telephone</th>-->\r\n<!--        <th>Address</th>-->\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-product>\r\n      <tr style=\"font-family: 'Sriracha', cursive;\">\r\n        <td><img src=\"data:image/png;base64,{{product.picture_store}}\" [alt]=\"product.name_store\" width=\"100\" class=\"p-shadow-4\"  /></td>\r\n        <td>{{product.name_store}}</td>\r\n<!--        <td>{{product.telephone_store}}</td>-->\r\n<!--        <td>{{product.address_store}}</td>-->\r\n\r\n        <td>\r\n            <ion-icon name=\"search-outline\" style=\"width: 25px;height: 25px;\" (click)=\"gotomanagefiled(product.id_store)\"></ion-icon>\r\n            <ion-icon name=\"construct-outline\" class=\"p-button-rounded p-button-warning\" style=\"width: 25px;height: 25px;\" (click)=\"gotoEdit()\"></ion-icon>\r\n        </td>\r\n\r\n<!--        <td><p-rating [ngModel]=\"product.rating\" [readonly]=\"true\" [cancel]=\"false\"></p-rating></td>-->\r\n<!--        <td><span [class]=\"'product-badge status-' + product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span></td>-->\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"summary\">\r\n      <div class=\"p-d-flex p-ai-center p-jc-between\" style=\"font-family: 'Sriracha', cursive;\">\r\n        In total there are {{products ? products.length : 0 }} products.\r\n      </div>\r\n    </ng-template>\r\n  </p-table>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon (click)=\"goToAddstore()\" name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "fSdC":
/*!************************************************************!*\
  !*** ./src/app/partofpage/managestore/managestore.page.ts ***!
  \************************************************************/
/*! exports provided: ManagestorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagestorePage", function() { return ManagestorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_managestore_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./managestore.page.html */ "Two8");
/* harmony import */ var _managestore_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managestore.page.scss */ "hFVc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datapass.service */ "woWk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let ManagestorePage = class ManagestorePage {
    constructor(datapassService, Http, router, loadingController) {
        this.datapassService = datapassService;
        this.Http = Http;
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'รอสักครู่...',
            });
            this.dataUsername = this.datapassService.userIDLogin;
            let ownerid;
            for (ownerid of this.dataUsername) {
            }
            const dataJSON = {
                owner_store: ownerid.id_member,
            };
            this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/getOwnerstore', JSON.stringify(dataJSON))
                .subscribe(datastore => {
                this.loading.dismiss();
                this.datapassService.datastoreowner = datastore;
                this.products = datastore;
                this.datapassService.managedatastore = this.products;
                console.log(datastore);
            });
            this.loading.present();
        });
    }
    goToAddstore() {
        const navigate = this.router.navigate(['/home/tabs/account/managestore/addstore']);
    }
    gotoEdit() {
        const navigate = this.router.navigate(['/home/tabs/account/managestore/editstore']);
    }
    gotomanagefiled(idstore) {
        this.datapassService.idstoreformmanagestore = idstore;
        console.log(this.datapassService.idstoreformmanagestore);
        const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield']);
    }
};
ManagestorePage.ctorParameters = () => [
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_4__["DatapassService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
ManagestorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-managestore',
        template: _raw_loader_managestore_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_managestore_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManagestorePage);



/***/ }),

/***/ "hFVc":
/*!**************************************************************!*\
  !*** ./src/app/partofpage/managestore/managestore.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* DOES NOT WORK - not specific enough */\n.popover-content {\n  background: #222;\n}\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .popover-content {\n  background: #222;\n}\n.my-custom-class {\n  --background: #222;\n}\n.background {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9tYW5hZ2VzdG9yZS9tYW5hZ2VzdG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQSx1RUFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNBO0VBQ0Usa0JBQUE7QUFFRjtBQUFBO0VBQ0UscUJBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvbWFuYWdlc3RvcmUvbWFuYWdlc3RvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuLnBvcG92ZXItY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gIC0tYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "lype":
/*!**************************************************************!*\
  !*** ./src/app/partofpage/managestore/managestore.module.ts ***!
  \**************************************************************/
/*! exports provided: ManagestorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagestorePageModule", function() { return ManagestorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _managestore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managestore-routing.module */ "3q6T");
/* harmony import */ var _managestore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./managestore.page */ "fSdC");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");










let ManagestorePageModule = class ManagestorePageModule {
};
ManagestorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _managestore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagestorePageRoutingModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_ripple__WEBPACK_IMPORTED_MODULE_9__["RippleModule"]
        ],
        declarations: [_managestore_page__WEBPACK_IMPORTED_MODULE_6__["ManagestorePage"]]
    })
], ManagestorePageModule);



/***/ })

}]);
//# sourceMappingURL=partofpage-managestore-managestore-module-es2015.js.map