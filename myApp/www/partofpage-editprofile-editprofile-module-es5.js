(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-editprofile-editprofile-module"], {
    /***/
    "NcT+":
    /*!**********************************************************************!*\
      !*** ./src/app/partofpage/editprofile/editprofile-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: EditprofilePageRoutingModule */

    /***/
    function NcT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function () {
        return EditprofilePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editprofile.page */
      "Zr/m");

      var routes = [{
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
      }];

      var EditprofilePageRoutingModule = function EditprofilePageRoutingModule() {
        _classCallCheck(this, EditprofilePageRoutingModule);
      };

      EditprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditprofilePageRoutingModule);
      /***/
    },

    /***/
    "Xpx6":
    /*!**************************************************************!*\
      !*** ./src/app/partofpage/editprofile/editprofile.module.ts ***!
      \**************************************************************/

    /*! exports provided: EditprofilePageModule */

    /***/
    function Xpx6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function () {
        return EditprofilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editprofile-routing.module */
      "NcT+");
      /* harmony import */


      var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editprofile.page */
      "Zr/m");

      var EditprofilePageModule = function EditprofilePageModule() {
        _classCallCheck(this, EditprofilePageModule);
      };

      EditprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
      })], EditprofilePageModule);
      /***/
    },

    /***/
    "YGaE":
    /*!**************************************************************!*\
      !*** ./src/app/partofpage/editprofile/editprofile.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function YGaE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "Zr/m":
    /*!************************************************************!*\
      !*** ./src/app/partofpage/editprofile/editprofile.page.ts ***!
      \************************************************************/

    /*! exports provided: EditprofilePage */

    /***/
    function ZrM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditprofilePage", function () {
        return EditprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editprofile.page.html */
      "i6Qr");
      /* harmony import */


      var _editprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editprofile.page.scss */
      "YGaE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var EditprofilePage = /*#__PURE__*/function () {
        function EditprofilePage(camera, alertController) {
          _classCallCheck(this, EditprofilePage);

          this.camera = camera;
          this.alertController = alertController;
        }

        _createClass(EditprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Confirm!',
                        buttons: [{
                          text: 'Take a Photo',
                          handler: function handler() {
                            _this.selectImageInCamera();
                          }
                        }, {
                          text: 'Choose from Gallery',
                          handler: function handler() {
                            _this.selectImageInGallery();
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "selectImageInCamera",
          value: function selectImageInCamera() {
            var _this2 = this;

            var CAMERA_OPTIONS = {
              allowEdit: true,
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.CAMERA,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(CAMERA_OPTIONS).then(function (imageData) {
              _this2.image = "data:image/jpeg;base64,".concat(imageData);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "selectImageInGallery",
          value: function selectImageInGallery() {
            var _this3 = this;

            var CAMERA_OPTIONS = {
              allowEdit: true,
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(CAMERA_OPTIONS).then(function (imageData) {
              _this3.image = "data:image/jpeg;base64,".concat(imageData);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }]);

        return EditprofilePage;
      }();

      EditprofilePage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      EditprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editprofile',
        template: _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editprofile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditprofilePage);
      /***/
    },

    /***/
    "i6Qr":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/editprofile/editprofile.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i6Qr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>editprofile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"profile-userpic\">\r\n    <img src=\"assets/img/default-avatar.png\">\r\n  </div>\r\n\r\n  <div class=\"\">\r\n    <input type=\"file\" name=\"myImage\" accept=\"image/png,image/jpeg\" #filebin (click)=\"presentAlertConfirm()\" />\r\n  </div>\r\n\r\n  <div>\r\n    <ion-button (click)=\"selectImage()\">SAVE</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=partofpage-editprofile-editprofile-module-es5.js.map