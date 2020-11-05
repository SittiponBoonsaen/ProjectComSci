(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-addfield-addfield-module"],{

/***/ "2Buf":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/addfield/addfield.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\r\n<link href=\"https://fonts.googleapis.com/css2?family=Sriracha&display=swap\" rel=\"stylesheet\">\r\n<ion-header class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\r\n  <ion-toolbar class=\"background\">\r\n    <ion-buttons>\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>addfield</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" style=\"font-family: 'Sriracha', cursive;\">\r\n\r\n\r\n  <div class=\"ion-padding sizeimage centeredit\" style=\"\">\r\n    <img src=\"assets/img/default-avatar.png\" class=\"rounded\" alt=\"...\">\r\n  </div>\r\n\r\n  <div>\r\n    <ion-button class=\"centeredit\"(click)=\"selectImage()\">เพิ่มรูปภาพใหม่</ion-button>\r\n  </div>\r\n\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon1\">ชื่อสนาม</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name_field\" placeholder=\"ชื่อสนาม\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon6\">service</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"service_field\" placeholder=\"service\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleFormControlSelect1\">สถานะของสนาม</label>\r\n    <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"size_field\">\r\n      <option>\r\n        5คน\r\n        22 x 42 เมตร\r\n      </option>\r\n      <option>\r\n        7คน\r\n        33 x 53 เมตร\r\n      </option>\r\n      <option>\r\n        9คน\r\n        43 x 63 เมตร\r\n      </option>\r\n      <option>\r\n        11คน\r\n        68 x 105 เมตร\r\n      </option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon5\">ราคา</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"price_field\" placeholder=\"ราคา\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleFormControlSelect1\">สถานะของสนาม</label>\r\n    <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"status_field\">\r\n      <option>เปิดให้บริการ</option>\r\n      <option>ไม่เปิดให้บริการ</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"centerbutton\">\r\n    <button type=\"button\" (click)=\"presentAlertConfirm()\" class=\"btn btn-success \">เพิ่มสนาม</button>\r\n    <button type=\"button\"  (click)=\"goAccount()\" class=\"btn btn-danger\">ยกเลิก</button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "2aih":
/*!********************************************************!*\
  !*** ./src/app/partofpage/addfield/addfield.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar-pic {\n  width: 150px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.background {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9hZGRmaWVsZC9hZGRmaWVsZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXJ0b2ZwYWdlL2FkZGZpZWxkL2FkZGZpZWxkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXItcGljIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datapass.service */ "woWk");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









let AddfieldPage = class AddfieldPage {
    constructor(camera, alertController, router, datapassService, Http) {
        this.camera = camera;
        this.alertController = alertController;
        this.router = router;
        this.datapassService = datapassService;
        this.Http = Http;
    }
    ngOnInit() {
        this.idstore_field = this.datapassService.idstoreformmanagestore;
    }
    addfield() {
        const dataJSON = {
            id_store_field: this.idstore_field,
            name_field: this.name_field,
            service_field: this.service_field,
            size_field: this.size_field,
            price_field: this.price_field,
            status_field: this.status_field
        };
        console.log(dataJSON);
        this.Http.post('http://localhost:5000/apiFinal/field/add', JSON.stringify(dataJSON))
            .subscribe(data => {
            console.log(data);
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'คุณต้องการที่จะแก้ไขหรือไม่ ?',
                buttons: [
                    {
                        text: 'ใช่',
                        handler: () => {
                            this.addfield();
                            window.alert("addfield complete");
                            const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield']);
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
AddfieldPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_4__["DatapassService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
];
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