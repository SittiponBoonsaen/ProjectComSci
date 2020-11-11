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
    },
    {
        path: 'changepassword',
        loadChildren: () => __webpack_require__.e(/*! import() | changepassword-changepassword-module */ "common").then(__webpack_require__.bind(null, /*! ../changepassword/changepassword.module */ "Qqm9")).then(m => m.ChangepasswordPageModule)
    },
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
/* harmony default export */ __webpack_exports__["default"] = (".sizeimage {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n\n.centeredit {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.centerbutton {\n  display: flex;\n  justify-content: center;\n}\n\n.background {\n  --background: #f5f5f3;\n}\n\n.img {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  border: 8px solid #ffffff;\n}\n\nion-content {\n  --background: #f5f5f3;\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-content #header .h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\n\nion-content #header img {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n\nion-content .form456 {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-content .ion-button123 {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\n\n.padding {\n  border-radius: 5px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG9mcGFnZS9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtBQU1GOztBQUpFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU1OOztBQUhJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBS047O0FBREU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemVpbWFnZXtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxufVxyXG4uY2VudGVyZWRpdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmNlbnRlcmJ1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5iYWNrZ3JvdW5kIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcbn1cclxuLmltZyB7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogOHB4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxuXHJcbiAgI2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmgxIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICBjb2xvcjogIzAxMDEwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm00NTZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAuaW9uLWJ1dHRvbjEyMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG4ucGFkZGluZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

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
    }
    ngOnInit() {
    }
    editprofile() {
        let inputfirstname = document.getElementById('firstname_member').value;
        let inputlasname = document.getElementById('lasname_member').value;
        let inputaddress = document.getElementById('address_member').value;
        let inputtelephone = document.getElementById('telephone_member').value;
        const dataJSON = {
            'firstname_member': inputfirstname,
            'lasname_member': inputlasname,
            'address_member': inputaddress,
            'telephone_member': inputtelephone,
            'id_member': this.id_member
        };
        this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/usermember/edit', JSON.stringify(dataJSON))
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
                message: 'คุณต้องการที่จะแก้ไขระบบจะเด้งไปหน้าLogin ?',
                buttons: [
                    {
                        text: 'ใช่',
                        handler: () => {
                            this.editprofile();
                            console.log('Confirm Okay');
                            const navigate = this.router.navigate(['/home/tabs/account']);
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
    gochangepassword() {
        const navigate = this.router.navigate(['/home/tabs/account/editprofile/changepassword']);
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
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\r\n<link href=\"https://fonts.googleapis.com/css2?family=Sarabun:wght@300&display=swap\" rel=\"stylesheet\">\r\n\r\n<ion-header class=\"background\" style=\"font-family: 'Sarabun', sans-serif;\">\r\n  <ion-toolbar class=\"background\">\r\n    <ion-buttons>\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>แก้ไขข้อมูลส่วนตัว</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngFor=\"let data of this.dataUser\" class=\"background\" style=\"font-family: 'Sarabun', sans-serif;\">\r\n\r\n  <div id=\"header\">\r\n    <img src=\"assets/img/default-avatar.png\" />\r\n  </div>\r\n\r\n  <div  class=\"centerbutton\">\r\n    <button type=\"button\" (click)=\"selectImage()\" class=\"btn btn-link\"><ion-icon name=\"camera-outline\"></ion-icon>เพิ่มรูปภาพ</button>\r\n  </div>\r\n\r\n<div class=\"padding\">\r\n  <div class=\"input-group mb-3\" (click)=\"gochangepassword()\">\r\n    <div class=\"input-group-prepend\">\r\n      <br>\r\n    </div>\r\n    <span class=\"input-group-text form-control\" id=\"basic-addon3\"><ion-icon name=\"key-outline\"> </ion-icon> เปลี่ยนรหัสผ่าน</span>\r\n  </div>\r\n  <label>ชื่อ-สกุล</label>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.firstname_member}}\" id=\"firstname_member\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.lasname_member}}\" id=\"lasname_member\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <label>Username</label>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.username_member}}\" id=\"username_member\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" disabled>\r\n  </div>\r\n  <label>Email</label>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.email_member}}\" id=\"email_member\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" disabled>\r\n  </div>\r\n  <label>ที่อยู่</label>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.address_member}}\"id=\"address_member\"  aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <label>เบอร์โทรศัพท์</label>\r\n  <div class=\"input-group mb-3\">\r\n    <div class=\"input-group-prepend\">\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" value=\"{{data.telephone_member}}\" id=\"telephone_member\"  aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n  </div>\r\n  <div class=\"centerbutton\">\r\n    <button type=\"button\" (click)=\"presentAlertConfirm(data.id_member)\" class=\"btn btn-success \">ยืนยันการแก้ไข</button>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=partofpage-editprofile-editprofile-module-es2015.js.map