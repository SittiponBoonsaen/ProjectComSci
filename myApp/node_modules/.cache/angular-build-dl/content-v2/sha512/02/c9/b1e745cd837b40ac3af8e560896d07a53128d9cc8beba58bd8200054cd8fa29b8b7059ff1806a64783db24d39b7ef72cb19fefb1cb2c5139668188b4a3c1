(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-addstore-addstore-module"],{

/***/ "3eec":
/*!******************************************************!*\
  !*** ./src/app/partofpage/addstore/addstore.page.ts ***!
  \******************************************************/
/*! exports provided: AddstorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstorePage", function() { return AddstorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addstore_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addstore.page.html */ "4sJs");
/* harmony import */ var _addstore_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addstore.page.scss */ "vLQs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datapass.service */ "woWk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let AddstorePage = class AddstorePage {
    constructor(Http, datapass, alertController, router) {
        this.Http = Http;
        this.datapass = datapass;
        this.alertController = alertController;
        this.router = router;
        this.selectedprovince = this.datapass.selectedprovince;
    }
    ngOnInit() {
    }
    selectedprovincemethod(select) {
        console.log(select);
        const dataJSON = {
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
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'คุณต้องการที่จะเพิ่มหรือไม่ ?',
                buttons: [
                    {
                        text: 'ใช่',
                        handler: () => {
                            const navigate = this.router.navigate(['/login']);
                            console.log('Confirm Okay');
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
    goAccount() {
    }
};
AddstorePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_4__["DatapassService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AddstorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addstore',
        template: _raw_loader_addstore_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addstore_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddstorePage);



/***/ }),

/***/ "4sJs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/addstore/addstore.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\r\n<link href=\"https://fonts.googleapis.com/css2?family=Sriracha&display=swap\" rel=\"stylesheet\">\r\n<ion-header class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>addstore</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\r\n\r\n  <div class=\"ion-padding sizeimage centeredit\" style=\"\">\r\n    <img src=\"assets/img/default-avatar.png\" class=\"rounded\" alt=\"...\">\r\n  </div>\r\n\r\n  <div>\r\n    <ion-button class=\"centeredit\"(click)=\"selectImage()\">เพิ่มรูปภาพใหม่</ion-button>\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon1\">ชื่อร้าน</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"ชื่อร้าน\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon5\">ที่อยู่</span>\r\n    </div>\r\n    <div>\r\n    <ion-item>\r\n      <ion-label>Select: province</ion-label>\r\n      <ion-select class=\"custom-options\" [(ngModel)]=\"mySelectprovince\" (ionChange)=\"selectedprovincemethod(mySelectprovince)\">\r\n        <ion-select-option  *ngFor=\"let province of this.selectedprovince \"\r\n                            value=\"{{province.id}}\"> {{province.name_th}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <br>\r\n    <ion-item>\r\n      <ion-label>Select: amphures</ion-label>\r\n      <ion-select class=\"custom-options\" [(ngModel)]=\"mySelectamphures\" (ionChange)=\"selectedamphuresmethod(mySelectamphures)\">\r\n        <ion-select-option  *ngFor=\"let amphures of this.selectedamphures \"\r\n                            value=\"{{amphures.id}}\"> {{amphures.name_th}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    </div>\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon6\">เบอร์โทรศัพท์</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"เบอร์โทรศัพท์\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon5\">ที่อยู่</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"ที่อยู่\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n\r\n  <div class=\"centerbutton\">\r\n    <button type=\"button\" (click)=\"presentAlertConfirm()\" class=\"btn btn-success \">เพิ่มสนาม</button>\r\n    <button type=\"button\"  (click)=\"goAccount()\" class=\"btn btn-danger\">ยกเลิก</button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "IyCj":
/*!****************************************************************!*\
  !*** ./src/app/partofpage/addstore/addstore-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AddstorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstorePageRoutingModule", function() { return AddstorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _addstore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addstore.page */ "3eec");




const routes = [
    {
        path: '',
        component: _addstore_page__WEBPACK_IMPORTED_MODULE_3__["AddstorePage"]
    }
];
let AddstorePageRoutingModule = class AddstorePageRoutingModule {
};
AddstorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddstorePageRoutingModule);



/***/ }),

/***/ "u/bj":
/*!********************************************************!*\
  !*** ./src/app/partofpage/addstore/addstore.module.ts ***!
  \********************************************************/
/*! exports provided: AddstorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstorePageModule", function() { return AddstorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _addstore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addstore-routing.module */ "IyCj");
/* harmony import */ var _addstore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addstore.page */ "3eec");







let AddstorePageModule = class AddstorePageModule {
};
AddstorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addstore_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddstorePageRoutingModule"]
        ],
        declarations: [_addstore_page__WEBPACK_IMPORTED_MODULE_6__["AddstorePage"]]
    })
], AddstorePageModule);



/***/ }),

/***/ "vLQs":
/*!********************************************************!*\
  !*** ./src/app/partofpage/addstore/addstore.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sizeimage {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.centeredit {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.centerbutton {\n  display: flex;\n  justify-content: center;\n}\n\n.background {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9hZGRzdG9yZS9hZGRzdG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvYWRkc3RvcmUvYWRkc3RvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemVpbWFnZXtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmNlbnRlcmVkaXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5jZW50ZXJidXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=partofpage-addstore-addstore-module-es2015.js.map