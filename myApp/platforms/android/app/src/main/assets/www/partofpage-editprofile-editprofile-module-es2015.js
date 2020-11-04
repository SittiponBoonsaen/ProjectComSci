(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-editprofile-editprofile-module"],{

/***/ "NcT+":
/*!**********************************************************************!*\
  !*** ./src/app/partofpage/editprofile/editprofile-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EditprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function() { return EditprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editprofile.page */ "Zr/m");




const routes = [
    {
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
    }
];
let EditprofilePageRoutingModule = class EditprofilePageRoutingModule {
};
EditprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditprofilePageRoutingModule);



/***/ }),

/***/ "Xpx6":
/*!**************************************************************!*\
  !*** ./src/app/partofpage/editprofile/editprofile.module.ts ***!
  \**************************************************************/
/*! exports provided: EditprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editprofile-routing.module */ "NcT+");
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editprofile.page */ "Zr/m");







let EditprofilePageModule = class EditprofilePageModule {
};
EditprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
    })
], EditprofilePageModule);



/***/ }),

/***/ "YGaE":
/*!**************************************************************!*\
  !*** ./src/app/partofpage/editprofile/editprofile.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sizeimage {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.centeredit {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.centerbutton {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvcGFydG9mcGFnZS9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l6ZWltYWdle1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uY2VudGVyZWRpdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmNlbnRlcmJ1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Zr/m":
/*!************************************************************!*\
  !*** ./src/app/partofpage/editprofile/editprofile.page.ts ***!
  \************************************************************/
/*! exports provided: EditprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePage", function() { return EditprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editprofile.page.html */ "i6Qr");
/* harmony import */ var _editprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editprofile.page.scss */ "YGaE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datapass_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../datapass.service */ "woWk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









let EditprofilePage = class EditprofilePage {
    constructor(camera, alertController, router, datapass, Http) {
        this.camera = camera;
        this.alertController = alertController;
        this.router = router;
        this.datapass = datapass;
        this.Http = Http;
        this.dataUser = this.datapass.userIDLogin;
        console.log(this.dataUser);
    }
    ngOnInit() {
    }
    editprofile() {
        const dataJSON = {
            password_member: this.password_member,
            firstname_member: document.getElementById('firstname_member'),
            lasname_member: document.getElementById('lasname_member'),
            address_member: document.getElementById('address_member'),
            telephone_member: document.getElementById('telephone_member'),
            id_member: this.id_member
        };
        console.log(dataJSON);
        this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/usermember/edit', JSON.stringify(dataJSON))
            .subscribe(data => {
            console.log(data);
            const navigate = this.router.navigate(['/login']);
        });
    }
    presentAlertConfirm(id_member) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id_member = id_member;
            console.log(this.id_member);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'คุณต้องการที่จะแก้ไขหรือไม่ ?',
                buttons: [
                    {
                        text: 'ใช่',
                        handler: () => {
                            this.editprofile();
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
        const navigate = this.router.navigate(['']);
    }
};
EditprofilePage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _datapass_service__WEBPACK_IMPORTED_MODULE_7__["DatapassService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
];
EditprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editprofile',
        template: _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditprofilePage);



/***/ }),

/***/ "i6Qr":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/editprofile/editprofile.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>editprofile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngFor=\"let data of this.dataUser\" >\r\n\r\n  <div class=\"ion-padding sizeimage centeredit\" style=\"\">\r\n    <img src=\"assets/img/default-avatar.png\" class=\"rounded\" alt=\"...\">\r\n  </div>\r\n\r\n  <div>\r\n    <ion-button class=\"centeredit\"(click)=\"selectImage()\">เพิ่มรูปภาพใหม่</ion-button>\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon1\">ชื่อ-สกุล</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.firstname_member}}\" id=\"firstname_member\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.lasname_member}}\" id=\"lasname_member\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon2\">Username</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.username_member}}\" id=\"username_member\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" disabled>\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon3\">รหัสผ่าน</span>\r\n    </div>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)] =\"password_member\" placeholder=\"กรุณาใส่passwordด้วย\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon4\">ยืนยันรหัสผ่าน</span>\r\n    </div>\r\n    <input type=\"password\" [(ngModel)] =\"confirmpassword\" class=\"form-control\"  placeholder=\"confirmPassword\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon9\">Email</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.email_member}}\" id=\"email_member\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" disabled>\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon5\">ที่อยู่</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.address_member}}\"id=\"address_member\"  aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon6\">เบอร์โทรศัพท์</span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.telephone_member}}\" id=\"telephone_member\"  aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <div class=\"centerbutton\">\r\n    <button type=\"button\" (click)=\"presentAlertConfirm(data.id_member)\" class=\"btn btn-success \">ยืนยันการแก้ไข</button>\r\n    <button type=\"button\"  (click)=\"goAccount()\" class=\"btn btn-danger\">ยกเลิก</button>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=partofpage-editprofile-editprofile-module-es2015.js.map