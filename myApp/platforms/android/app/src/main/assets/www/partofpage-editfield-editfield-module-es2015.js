(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-editfield-editfield-module"],{

/***/ "7T58":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/editfield/editfield.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css2?family=Sarabun:wght@300&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\n<ion-header class=\"background\" style=\"font-family: 'Sarabun', sans-serif;\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  style=\"font-family: 'Sarabun', sans-serif;\">แก้ไขข้อมูลสนาม</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" *ngFor=\"let data of this.datafield\" style=\"font-family: 'Sarabun', sans-serif;\">\n  <div class=\"ion-padding sizeimage centeredit\" style=\"\">\n    <img src=\"assets/img/noimage.png\" class=\"rounded\" alt=\"...\">\n  </div>\n\n  <div  class=\"centerbutton\">\n    <button type=\"button\" (click)=\"selectImage()\" class=\"btn btn-link\"><ion-icon name=\"camera-outline\"></ion-icon>เพิ่มรูปภาพ</button>\n  </div>\n  <div class=\"padding\">\n  <label>ชื่อสนาม</label>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n    </div>\n    <input type=\"text\" class=\"form-control\" value=\"{{data.name_field}}\" id=\"namefield\" >\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"sizefield\">สถานะของสนาม</label>\n    <select class=\"form-control\" value=\"{{data.size_field}}\"  id=\"sizefield\">\n      <option>\n        5คน\n        22 x 42 เมตร\n      </option>\n      <option>\n        7คน\n        33 x 53 เมตร\n      </option>\n      <option>\n        9คน\n        43 x 63 เมตร\n      </option>\n      <option>\n        11คน\n        68 x 105 เมตร\n      </option>\n    </select>\n  </div>\n  <label>ราคาสนาม</label>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n    </div>\n    <input type=\"text\" id=\"pricefield\" value=\"{{data.price_field}}\" class=\"form-control\"  >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"statusfield\">สถานะของสนาม</label>\n    <select class=\"form-control\" id=\"statusfield\"value=\"{{data.status_field}}\">\n      <option>เปิดให้บริการ</option>\n      <option>ไม่เปิดให้บริการ</option>\n    </select>\n  </div>\n\n  <div class=\"centerbutton\">\n    <button type=\"button\" (click)=\"presentAlertConfirm()\" class=\"btn btn-success \">แก้ไขข้อมูลสนาม</button>\n  </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "RkvA":
/*!******************************************************************!*\
  !*** ./src/app/partofpage/editfield/editfield-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: EditfieldPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditfieldPageRoutingModule", function() { return EditfieldPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editfield_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editfield.page */ "kV5y");




const routes = [
    {
        path: '',
        component: _editfield_page__WEBPACK_IMPORTED_MODULE_3__["EditfieldPage"]
    },
];
let EditfieldPageRoutingModule = class EditfieldPageRoutingModule {
};
EditfieldPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditfieldPageRoutingModule);



/***/ }),

/***/ "kNPp":
/*!**********************************************************!*\
  !*** ./src/app/partofpage/editfield/editfield.module.ts ***!
  \**********************************************************/
/*! exports provided: EditfieldPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditfieldPageModule", function() { return EditfieldPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editfield_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editfield-routing.module */ "RkvA");
/* harmony import */ var _editfield_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editfield.page */ "kV5y");







let EditfieldPageModule = class EditfieldPageModule {
};
EditfieldPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editfield_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditfieldPageRoutingModule"]
        ],
        declarations: [_editfield_page__WEBPACK_IMPORTED_MODULE_6__["EditfieldPage"]]
    })
], EditfieldPageModule);



/***/ }),

/***/ "kV5y":
/*!********************************************************!*\
  !*** ./src/app/partofpage/editfield/editfield.page.ts ***!
  \********************************************************/
/*! exports provided: EditfieldPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditfieldPage", function() { return EditfieldPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editfield_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editfield.page.html */ "7T58");
/* harmony import */ var _editfield_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editfield.page.scss */ "uAqg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datapass.service */ "woWk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let EditfieldPage = class EditfieldPage {
    constructor(datapassService, Http, router, loadingController, alertController) {
        this.datapassService = datapassService;
        this.Http = Http;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.idfield = this.datapassService.idfieldformmanagefield;
        const dataJSON = {
            'id_field': this.idfield,
        };
        this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/getfieldformID', JSON.stringify(dataJSON))
            .subscribe(datafield => {
            this.datafield = datafield;
            console.log(this.datafield);
        });
    }
    ngOnInit() {
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
                            const navigate = this.router.navigate(['/login']);
                            this.summit();
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
    summit() {
        let iddatafield;
        for (iddatafield of this.datafield) {
        }
        let inputname_field = document.getElementById('namefield').value;
        let inputsize_field = document.getElementById('sizefield').value;
        let inputprice_field = document.getElementById('pricefield').value;
        let inputstatus_field = document.getElementById('statusfield').value;
        const dataJSON = {
            'name_field': inputname_field,
            'size_field': inputsize_field,
            'price_field': inputprice_field,
            'status_field': inputstatus_field,
            'id_field': iddatafield.id_field,
        };
        console.log(dataJSON);
        this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/field/edit', JSON.stringify(dataJSON)).subscribe(data => {
            console.log(data);
            window.alert("แก้ไขสนามสำเร็จ");
            const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield']);
        }, error => {
            console.log(error);
            window.alert("แก้ไขสนามไม่สำเร็จ");
        });
    }
};
EditfieldPage.ctorParameters = () => [
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_4__["DatapassService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
EditfieldPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editfield',
        template: _raw_loader_editfield_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editfield_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditfieldPage);



/***/ }),

/***/ "uAqg":
/*!**********************************************************!*\
  !*** ./src/app/partofpage/editfield/editfield.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  --background: #f5f5f3;\n}\n\n.sizeimage {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.centeredit {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.centerbutton {\n  display: flex;\n  justify-content: center;\n}\n\n.background {\n  --background: #f5f5f3;\n}\n\n.padding {\n  border-radius: 5px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9lZGl0ZmllbGQvZWRpdGZpZWxkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUlGOztBQUZBO0VBQ0UscUJBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvcGFydG9mcGFnZS9lZGl0ZmllbGQvZWRpdGZpZWxkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuLnNpemVpbWFnZXtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmNlbnRlcmVkaXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5jZW50ZXJidXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbi5wYWRkaW5nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=partofpage-editfield-editfield-module-es2015.js.map