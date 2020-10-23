(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-account-account-module"], {
    /***/
    "Cn23":
    /*!************************************************!*\
      !*** ./src/app/tabs/account/account.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function Cn23(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".underline {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Kj4w":
    /*!********************************************************!*\
      !*** ./src/app/tabs/account/account-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function Kj4w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "lFvw");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }, {
        path: 'managestore',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partofpage-managestore-managestore-module */
          "partofpage-managestore-managestore-module").then(__webpack_require__.bind(null,
          /*! ../../partofpage/managestore/managestore.module */
          "lype")).then(function (m) {
            return m.ManagestorePageModule;
          });
        }
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    },

    /***/
    "Yy/R":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/account/account.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function YyR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>account</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\" *ngFor=\"let data of dataAccount\">\r\n    <div class=\"row profile\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"profile-sidebar\">\r\n          <div class=\"profile-userpic\">\r\n            <img src=\"assets/img/default-avatar.png\">\r\n          </div>\r\n          <div>\r\n            <div>\r\n              ชื่อ :{{data.firstname_member}} {{data.lasname_member}}\r\n            </div>\r\n            <div>\r\n              ที่อยู่ :{{data.address_member}}\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"underline\">\r\n              <li class=\"active\">\r\n                <a>\r\n                  <ion-icon name=\"home-outline\"></ion-icon>\r\n                  Overview </a>\r\n              </li>\r\n\r\n              <li  (click)=\"goTosettingprofile()\" >\r\n                <a>\r\n                  <ion-icon name=\"settings-outline\"></ion-icon>\r\n                    Account Settings </a>\r\n              </li>\r\n\r\n              <li *ngIf=\" data.status_member == '2'\" (click)=\"goTomanageStore()\">\r\n                <a>\r\n                  <ion-icon name=\"business-outline\"></ion-icon>\r\n                  Manage Store </a>\r\n              </li>\r\n\r\n              <li>\r\n                <a>\r\n                  <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n                  Help </a>\r\n              </li>\r\n\r\n          </div>\r\n          <br>\r\n          <div>\r\n            <ion-button  (click)=\"presentAlertConfirm()\" color=\"danger\"  style=\"height: 40px\">Logout</ion-button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-9\">\r\n        <div class=\"profile-content\">\r\n          Some user related content goes here...\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "kVUs":
    /*!************************************************!*\
      !*** ./src/app/tabs/account/account.module.ts ***!
      \************************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function kVUs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "Kj4w");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.page */
      "lFvw");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "lFvw":
    /*!**********************************************!*\
      !*** ./src/app/tabs/account/account.page.ts ***!
      \**********************************************/

    /*! exports provided: AccountPage */

    /***/
    function lFvw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account.page.html */
      "Yy/R");
      /* harmony import */


      var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account.page.scss */
      "Cn23");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _datapass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../datapass.service */
      "woWk");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(datapass, alertController, router) {
          _classCallCheck(this, AccountPage);

          this.datapass = datapass;
          this.alertController = alertController;
          this.router = router;
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataAccount = this.datapass.userIDLogin;
          } // ทำที่อยู่สนามและร้านค้า

        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: 'คุณต้องการออกจากระบบใช่ไหม ?',
                        buttons: [{
                          text: 'ใช่',
                          handler: function handler() {
                            var navigate = _this.router.navigate(['/login']);

                            console.log('Confirm Okay');
                          }
                        }, {
                          text: 'ไม่',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
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
          key: "goTosettingprofile",
          value: function goTosettingprofile() {
            var navigate = this.router.navigate(['/home/tabs/account/editprofile']);
          }
        }, {
          key: "goTomanageStore",
          value: function goTomanageStore() {
            var navigate = this.router.navigate(['/home/tabs/account/managestore']);
          }
        }]);

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
        return [{
          type: _datapass_service__WEBPACK_IMPORTED_MODULE_4__["DatapassService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-account-account-module-es5.js.map