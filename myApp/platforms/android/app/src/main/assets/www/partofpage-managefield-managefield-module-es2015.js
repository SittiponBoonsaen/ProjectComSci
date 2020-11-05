(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-managefield-managefield-module"],{

/***/ "QK4W":
/*!************************************************************!*\
  !*** ./src/app/partofpage/managefield/managefield.page.ts ***!
  \************************************************************/
/*! exports provided: ManagefieldPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagefieldPage", function() { return ManagefieldPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_managefield_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./managefield.page.html */ "urqI");
/* harmony import */ var _managefield_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managefield.page.scss */ "sm3i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datapass.service */ "woWk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let ManagefieldPage = class ManagefieldPage {
    constructor(datapassService, Http, router, alertController, loadingController) {
        this.datapassService = datapassService;
        this.Http = Http;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'รอสักครู่...',
            });
            this.idstore = this.datapassService.idstoreformmanagestore;
            const dataJSON = {
                id_store: this.idstore,
            };
            this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/getingfield', JSON.stringify(dataJSON))
                .subscribe(datastore => {
                this.datafield = datastore;
                this.loading.dismiss();
                console.log(this.datafield);
            });
            this.loading.present();
        });
    }
    goToAddfield() {
        const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield/addfield']);
    }
    gotoEdit() {
        const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield/editfield']);
    }
    gotoDelete() {
        const dataJSON = {
            "id_field": this.id_Field,
        };
        console.log(dataJSON);
        this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/field/delete', JSON.stringify(dataJSON))
            .subscribe(data => {
            console.log(data);
        });
    }
    presentAlertConfirm(idfield) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(idfield);
            this.id_Field = idfield;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'คุณต้องการที่จะลบหรือไม่ ?',
                buttons: [
                    {
                        text: 'ใช่',
                        handler: () => {
                            this.gotoDelete();
                        }
                    }, {
                        text: 'ไม่',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ManagefieldPage.ctorParameters = () => [
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_4__["DatapassService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
ManagefieldPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-managefield',
        template: _raw_loader_managefield_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_managefield_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManagefieldPage);



/***/ }),

/***/ "WpsQ":
/*!**************************************************************!*\
  !*** ./src/app/partofpage/managefield/managefield.module.ts ***!
  \**************************************************************/
/*! exports provided: ManagefieldPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagefieldPageModule", function() { return ManagefieldPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _managefield_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managefield-routing.module */ "yUV1");
/* harmony import */ var _managefield_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./managefield.page */ "QK4W");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");










let ManagefieldPageModule = class ManagefieldPageModule {
};
ManagefieldPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _managefield_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagefieldPageRoutingModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_ripple__WEBPACK_IMPORTED_MODULE_9__["RippleModule"]
        ],
        declarations: [_managefield_page__WEBPACK_IMPORTED_MODULE_6__["ManagefieldPage"]]
    })
], ManagefieldPageModule);



/***/ }),

/***/ "sm3i":
/*!**************************************************************!*\
  !*** ./src/app/partofpage/managefield/managefield.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9tYW5hZ2VmaWVsZC9tYW5hZ2VmaWVsZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFydG9mcGFnZS9tYW5hZ2VmaWVsZC9tYW5hZ2VmaWVsZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "urqI":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/managefield/managefield.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\n<link href=\"https://fonts.googleapis.com/css2?family=Sriracha&display=swap\" rel=\"stylesheet\">\n<ion-header class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button style=\"font-family: 'Sriracha', cursive;\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-family: 'Sriracha', cursive;\" >จัดการสนาม</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\n\n    <p-table [value]=\"datafield\">\n      <ng-template pTemplate=\"caption\">\n        <div class=\"p-d-flex p-ai-center p-jc-between\" style=\"font-family: 'Sriracha', cursive;\">\n          ข้อมูลสนาม\n        </div>\n      </ng-template>\n      <ng-template pTemplate=\"header\">\n        <tr style=\"font-family: 'Sriracha', cursive;\">\n          <th>Image</th>\n          <th>Name</th>\n          <th>statusField</th>\n          <th>#</th>\n          <!--        <th>Telephone</th>-->\n          <!--        <th>Address</th>-->\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-datafield>\n        <tr style=\"font-family: 'Sriracha', cursive;\">\n          <td><img *ngIf=\"datafield.picture_picturefield == null\" src=\"assets/img/noimage.png\" [alt]=\"datafield.name_field\" class=\"p-shadow-4\"  />\n            <img *ngIf=\"datafield.picture_picturefield != null\" src=\"data:image/png;base64,{{datafield.picture_picturefield}}\" [alt]=\"datafield.name_field\" width=\"100\" class=\"p-shadow-4\"  />\n\n          </td>\n          <td>{{datafield.name_field}}</td>\n          <td>{{datafield.status_field}}</td>\n          <!--        <td>{{product.address_store}}</td>-->\n\n          <td>\n            <ion-icon name=\"construct-outline\" style=\"width: 25px;height: 25px;\" (click)=\"gotoEdit()\"></ion-icon>\n            <ion-icon name=\"trash-outline\" style=\"width: 25px;height: 25px;\" (click)=\"presentAlertConfirm(datafield.id_field)\"></ion-icon>\n          </td>\n\n          <!--        <td><p-rating [ngModel]=\"product.rating\" [readonly]=\"true\" [cancel]=\"false\"></p-rating></td>-->\n          <!--        <td><span [class]=\"'product-badge status-' + product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span></td>-->\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"summary\">\n        <div class=\"p-d-flex p-ai-center p-jc-between\" style=\"font-family: 'Sriracha', cursive;\">\n          In total there are {{datafield ? datafield.length : 0 }} products.\n        </div>\n      </ng-template>\n    </p-table>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon (click)=\"goToAddfield()\" name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "yUV1":
/*!**********************************************************************!*\
  !*** ./src/app/partofpage/managefield/managefield-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ManagefieldPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagefieldPageRoutingModule", function() { return ManagefieldPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _managefield_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managefield.page */ "QK4W");




const routes = [
    {
        path: '',
        component: _managefield_page__WEBPACK_IMPORTED_MODULE_3__["ManagefieldPage"]
    },
    {
        path: 'editfield',
        loadChildren: () => __webpack_require__.e(/*! import() | partofpage-editfield-editfield-module */ "partofpage-editfield-editfield-module").then(__webpack_require__.bind(null, /*! ../../partofpage/editfield/editfield.module */ "kNPp")).then(m => m.EditfieldPageModule)
    },
    {
        path: 'addfield',
        loadChildren: () => __webpack_require__.e(/*! import() | partofpage-addfield-addfield-module */ "partofpage-addfield-addfield-module").then(__webpack_require__.bind(null, /*! ../../partofpage/addfield/addfield.module */ "IfaH")).then(m => m.AddfieldPageModule)
    },
];
let ManagefieldPageRoutingModule = class ManagefieldPageRoutingModule {
};
ManagefieldPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManagefieldPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=partofpage-managefield-managefield-module-es2015.js.map