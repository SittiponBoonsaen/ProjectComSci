(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-managestore-managestore-module"], {
    /***/
    "3q6T":
    /*!**********************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ManagestorePageRoutingModule */

    /***/
    function q6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagestorePageRoutingModule", function () {
        return ManagestorePageRoutingModule;
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


      var _managestore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./managestore.page */
      "fSdC");

      var routes = [{
        path: '',
        component: _managestore_page__WEBPACK_IMPORTED_MODULE_3__["ManagestorePage"]
      }, {
        path: 'addstore',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partofpage-addstore-addstore-module */
          "partofpage-addstore-addstore-module").then(__webpack_require__.bind(null,
          /*! ../../partofpage/addstore/addstore.module */
          "u/bj")).then(function (m) {
            return m.AddstorePageModule;
          });
        }
      }, {
        path: 'addfield',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partofpage-addfield-addfield-module */
          "partofpage-addfield-addfield-module").then(__webpack_require__.bind(null,
          /*! ../../partofpage/addfield/addfield.module */
          "IfaH")).then(function (m) {
            return m.AddfieldPageModule;
          });
        }
      }];

      var ManagestorePageRoutingModule = function ManagestorePageRoutingModule() {
        _classCallCheck(this, ManagestorePageRoutingModule);
      };

      ManagestorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ManagestorePageRoutingModule);
      /***/
    },

    /***/
    "Two8":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/managestore/managestore.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Two8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>managestore</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "fSdC":
    /*!************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore.page.ts ***!
      \************************************************************/

    /*! exports provided: ManagestorePage */

    /***/
    function fSdC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagestorePage", function () {
        return ManagestorePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_managestore_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./managestore.page.html */
      "Two8");
      /* harmony import */


      var _managestore_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./managestore.page.scss */
      "hFVc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ManagestorePage = /*#__PURE__*/function () {
        function ManagestorePage() {
          _classCallCheck(this, ManagestorePage);
        }

        _createClass(ManagestorePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ManagestorePage;
      }();

      ManagestorePage.ctorParameters = function () {
        return [];
      };

      ManagestorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-managestore',
        template: _raw_loader_managestore_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_managestore_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ManagestorePage);
      /***/
    },

    /***/
    "hFVc":
    /*!**************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function hFVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvbWFuYWdlc3RvcmUvbWFuYWdlc3RvcmUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "lype":
    /*!**************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore.module.ts ***!
      \**************************************************************/

    /*! exports provided: ManagestorePageModule */

    /***/
    function lype(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagestorePageModule", function () {
        return ManagestorePageModule;
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


      var _managestore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./managestore-routing.module */
      "3q6T");
      /* harmony import */


      var _managestore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./managestore.page */
      "fSdC");

      var ManagestorePageModule = function ManagestorePageModule() {
        _classCallCheck(this, ManagestorePageModule);
      };

      ManagestorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _managestore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagestorePageRoutingModule"]],
        declarations: [_managestore_page__WEBPACK_IMPORTED_MODULE_6__["ManagestorePage"]]
      })], ManagestorePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=partofpage-managestore-managestore-module-es5.js.map