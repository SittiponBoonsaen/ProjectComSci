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


      __webpack_exports__["default"] = ".underline {\n  text-decoration: underline;\n}\n\n.background {\n  --background: #f5f5f3;\n}\n\nion-content {\n  --background: #f5f5f3;\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-content #header .h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\n\nion-content #header img {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n\nion-content .form456 {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-content .ion-button123 {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtBQUdGOztBQURFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFESTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUdOOztBQUFJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRU47O0FBRUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC90YWJzL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5kZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XHJcblxyXG4gICNoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5oMSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtNDU2e1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcbiAgLmlvbi1idXR0b24xMjMge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */";
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


      __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\r\n<link href=\"https://fonts.googleapis.com/css2?family=Sarabun:wght@300&display=swap\" rel=\"stylesheet\">\r\n<ion-header class=\"background\" >\r\n  <ion-toolbar class=\"background\">\r\n    <ion-title style=\"font-family: 'Sarabun', sans-serif;\">ข้อมูลส่วนตัว</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngFor=\"let data of dataAccount\" style=\"font-family: 'Sarabun', sans-serif;\">\r\n  <div id=\"header\">\r\n    <img src=\"assets/img/default-avatar.png\" />\r\n  </div>\r\n\r\n  <div class=\"form123\">\r\n    <div id=\"list-example\" class=\"list-group\">\r\n      <a class=\"list-group-item list-group-item-action\" (click)=\"goTosettingprofile()\" ><ion-icon name=\"create-outline\"></ion-icon> แก้ไขข้อมูลส่วนตัว</a>\r\n      <a  *ngIf=\" data.status_member == 'owner'\"  class=\"list-group-item list-group-item-action\" (click)=\"goTomanageStore()\"><ion-icon name=\"file-tray-full-outline\"></ion-icon> จัดการข้อมูลร้าน</a>\r\n      <a class=\"list-group-item list-group-item-action\"  ><ion-icon name=\"list-outline\"></ion-icon> จัดการข้อมูลการจองสนาม</a>\r\n      <a class=\"list-group-item list-group-item-action\"  ><ion-icon name=\"warning-outline\"></ion-icon> ติดต่อเรา</a>\r\n      <ion-button  (click)=\"presentAlertConfirm()\" color=\"danger\"  style=\"height: 40px\">ออกจากระบบ</ion-button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n";
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