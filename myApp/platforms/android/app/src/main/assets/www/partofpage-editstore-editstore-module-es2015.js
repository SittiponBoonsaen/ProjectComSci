(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-editstore-editstore-module"],{

/***/ "60dE":
/*!******************************************************************!*\
  !*** ./src/app/partofpage/editstore/editstore-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: EditstorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstorePageRoutingModule", function() { return EditstorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editstore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editstore.page */ "EqKV");




const routes = [
    {
        path: '',
        component: _editstore_page__WEBPACK_IMPORTED_MODULE_3__["EditstorePage"]
    }
];
let EditstorePageRoutingModule = class EditstorePageRoutingModule {
};
EditstorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditstorePageRoutingModule);



/***/ }),

/***/ "EqKV":
/*!********************************************************!*\
  !*** ./src/app/partofpage/editstore/editstore.page.ts ***!
  \********************************************************/
/*! exports provided: EditstorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstorePage", function() { return EditstorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editstore_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editstore.page.html */ "Me+P");
/* harmony import */ var _editstore_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editstore.page.scss */ "pxWF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datapass.service */ "woWk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let EditstorePage = class EditstorePage {
    constructor(datapassService, Http, router, loadingController, alertController) {
        this.datapassService = datapassService;
        this.Http = Http;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.dataUser = this.datapassService.userIDLogin;
        this.idstore = this.datapassService.idstoreformmanagestore;
        const dataJSON = {
            "id_store": this.idstore
        };
        this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/getstoreformID', JSON.stringify(dataJSON))
            .subscribe(datastore => {
            this.datastore = datastore;
            console.log(this.datastore);
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
        let iddatastore;
        for (iddatastore of this.datastore) {
        }
        let inputnamestore = document.getElementById('name_store').value;
        let inputaddress = document.getElementById('address_store').value;
        let inputtelephone = document.getElementById('telephone_store').value;
        let inputrulestore = document.getElementById('rules_store').value;
        let inputstatus_store = document.getElementById('exampleFormControlSelect1').value;
        const dataJSON = {
            'name_store': inputnamestore,
            'address_store': inputaddress,
            "telephone_store": inputtelephone,
            "rules_store": inputrulestore,
            'status_store': inputstatus_store,
            "id_store": iddatastore.id_store
        };
        console.log(dataJSON);
        this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/store/edit', JSON.stringify(dataJSON)).subscribe(data => {
            console.log(data);
            window.alert("แก้ไขร้านสำเร็จ");
            const navigate = this.router.navigate(['/home/tabs/account/managestore']);
        }, error => {
            console.log(error);
            window.alert("แก้ไขร้านไม่สำเร็จ");
        });
    }
};
EditstorePage.ctorParameters = () => [
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_4__["DatapassService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
EditstorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editstore',
        template: _raw_loader_editstore_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editstore_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditstorePage);



/***/ }),

/***/ "Me+P":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/editstore/editstore.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css2?family=Sarabun:wght@300&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\n<ion-header class=\"background\" style=\"font-family: 'Sarabun', sans-serif;\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  style=\"font-family: 'Sarabun', sans-serif;\">แก้ไขข้อมูลร้าน</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor=\"let data of this.datastore\" class=\"background\" style=\"font-family: 'Sarabun', sans-serif;\">\n  <div class=\"ion-padding sizeimage centeredit\" style=\"\">\n    <img src=\"assets/img/noimage.png\" class=\"rounded\" alt=\"...\">\n  </div>\n\n  <div  class=\"centerbutton\">\n    <button type=\"button\" (click)=\"selectImage()\" class=\"btn btn-link\"><ion-icon name=\"camera-outline\"></ion-icon>เพิ่มรูปภาพ</button>\n  </div>\n  <div class=\"padding\">\n  <label>ชื่อร้าน</label>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n\n    </div>\n    <input type=\"text\" class=\"form-control\"  value=\"{{data.name_store}}\" id=\"name_store\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n  </div>\n  <label>ทึ่อยู่</label>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n      </div>\n\n      <textarea class=\"form-control\"  value=\"{{data.address_store}}\" id=\"address_store\" placeholder=\"ที่อยู่\"  aria-label=\"With textarea\"></textarea>\n    </div>\n\n  <label>เบอร์โทรศัพท์</label>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n    </div>\n    <input type=\"text\" class=\"form-control\"  value=\"{{data.telephone_store}}\" id=\"telephone_store\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n  </div>\n\n  <label>กฏของร้าน</label>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n    </div>\n    <textarea class=\"form-control\"  value=\"{{data.rules_store}}\"  id=\"rules_store\" aria-label=\"With textarea\"></textarea>\n  </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlSelect1\">สถานะของสนาม</label>\n      <select class=\"form-control\" id=\"exampleFormControlSelect1\"  value=\"{{data.status_store}}\">\n        <option>เปิดให้บริการ</option>\n        <option>ไม่เปิดให้บริการ</option>\n      </select>\n    </div>\n  <div class=\"centerbutton\">\n    <button type=\"button\" (click)=\"presentAlertConfirm()\" class=\"btn btn-success \">แก้ไขข้อมูลร้าน</button>\n  </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "UiBP":
/*!**********************************************************!*\
  !*** ./src/app/partofpage/editstore/editstore.module.ts ***!
  \**********************************************************/
/*! exports provided: EditstorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstorePageModule", function() { return EditstorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editstore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editstore-routing.module */ "60dE");
/* harmony import */ var _editstore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editstore.page */ "EqKV");







let EditstorePageModule = class EditstorePageModule {
};
EditstorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editstore_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditstorePageRoutingModule"]
        ],
        declarations: [_editstore_page__WEBPACK_IMPORTED_MODULE_6__["EditstorePage"]]
    })
], EditstorePageModule);



/***/ }),

/***/ "pxWF":
/*!**********************************************************!*\
  !*** ./src/app/partofpage/editstore/editstore.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  --background: #f5f5f3;\n}\n\n.sizeimage {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.centeredit {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.centerbutton {\n  display: flex;\n  justify-content: center;\n}\n\n.background {\n  --background: #f5f5f3;\n}\n\n.padding {\n  border-radius: 5px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9lZGl0c3RvcmUvZWRpdHN0b3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUlGOztBQUZBO0VBQ0UscUJBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvcGFydG9mcGFnZS9lZGl0c3RvcmUvZWRpdHN0b3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuLnNpemVpbWFnZXtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmNlbnRlcmVkaXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5jZW50ZXJidXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbi5wYWRkaW5nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=partofpage-editstore-editstore-module-es2015.js.map