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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIn0= */");

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






let EditprofilePage = class EditprofilePage {
    constructor(camera, alertController) {
        this.camera = camera;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    selectImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                buttons: [
                    {
                        text: 'Take a Photo',
                        handler: () => {
                            this.selectImageInCamera();
                        }
                    },
                    {
                        text: 'Choose from Gallery',
                        handler: () => {
                            this.selectImageInGallery();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    selectImageInCamera() {
        const CAMERA_OPTIONS = {
            allowEdit: true,
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(CAMERA_OPTIONS).then((imageData) => {
            this.captureDataUrl = `data:image/jpeg;base64,${imageData}`;
        }).catch(err => console.error(err));
    }
    selectImageInGallery() {
        const CAMERA_OPTIONS = {
            allowEdit: true,
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(CAMERA_OPTIONS).then((imageData) => {
            this.captureDataUrl = `data:image/jpeg;base64,${imageData}`;
        }).catch(err => console.error(err));
    }
    getPicture() {
        const cameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
        };
        this.camera.getPicture(cameraOptions)
            .then((captureDataUrl) => {
            this.captureDataUrl = 'data:image/jpeg;base64,' + captureDataUrl;
        }, (err) => {
            console.log(err);
        });
    }
    getImageInCamera() {
        const CAMERA_OPTIONS1 = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
        };
        this.camera.getPicture(CAMERA_OPTIONS1).then((imageData) => {
            this.captureDataUrl = `data:image/jpeg;base64,${imageData}`;
        }).catch(err => console.error(err));
    }
    showSuccesfulUploadAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                buttons: ['OK']
            });
            // clear the previous photo data in the variable
            this.captureDataUrl = '';
            yield alert.present();
        });
    }
};
EditprofilePage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>editprofile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!--<ion-content>-->\r\n<!--  <div class=\"padding\">-->\r\n<!--    <img src=\"assets/img/default-avatar.png\">-->\r\n<!--  </div>-->\r\n\r\n<!--  <div>-->\r\n<!--    <ion-button (click)=\"selectImage()\">SAVE</ion-button>-->\r\n<!--  </div>-->\r\n<!--  <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>-->\r\n<!--</ion-content>-->\r\n\r\n<ion-content padding>\r\n<ion-row class=\"center\">\r\n  <button ion-button (click)=\"selectImage()\">Show Album</button>\r\n</ion-row>\r\n<ion-card>\r\n  <img [src]=\"captureDataUrl\" *ngIf=\"captureDataUrl\"/>\r\n  <button ion-button (click)=\"upload()\" *ngIf=\"captureDataUrl\">Upload image!</button>\r\n\r\n</ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=partofpage-editprofile-editprofile-module-es2015.js.map