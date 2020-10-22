(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-managestore-managestore-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/managestore/managestore.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/managestore/managestore.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPartofpageManagestoreManagestorePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>managestore</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/partofpage/managestore/managestore-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ManagestorePageRoutingModule */

    /***/
    function srcAppPartofpageManagestoreManagestoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagestorePageRoutingModule", function () {
        return ManagestorePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _managestore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./managestore.page */
      "./src/app/partofpage/managestore/managestore.page.ts");

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
          "./src/app/partofpage/addstore/addstore.module.ts")).then(function (m) {
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
          "./src/app/partofpage/addfield/addfield.module.ts")).then(function (m) {
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
    "./src/app/partofpage/managestore/managestore.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore.module.ts ***!
      \**************************************************************/

    /*! exports provided: ManagestorePageModule */

    /***/
    function srcAppPartofpageManagestoreManagestoreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagestorePageModule", function () {
        return ManagestorePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _managestore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./managestore-routing.module */
      "./src/app/partofpage/managestore/managestore-routing.module.ts");
      /* harmony import */


      var _managestore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./managestore.page */
      "./src/app/partofpage/managestore/managestore.page.ts");

      var ManagestorePageModule = function ManagestorePageModule() {
        _classCallCheck(this, ManagestorePageModule);
      };

      ManagestorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _managestore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagestorePageRoutingModule"]],
        declarations: [_managestore_page__WEBPACK_IMPORTED_MODULE_6__["ManagestorePage"]]
      })], ManagestorePageModule);
      /***/
    },

    /***/
    "./src/app/partofpage/managestore/managestore.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPartofpageManagestoreManagestorePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvbWFuYWdlc3RvcmUvbWFuYWdlc3RvcmUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/partofpage/managestore/managestore.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/partofpage/managestore/managestore.page.ts ***!
      \************************************************************/

    /*! exports provided: ManagestorePage */

    /***/
    function srcAppPartofpageManagestoreManagestorePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagestorePage", function () {
        return ManagestorePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

      ManagestorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managestore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./managestore.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/managestore/managestore.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./managestore.page.scss */
        "./src/app/partofpage/managestore/managestore.page.scss"))["default"]]
      })], ManagestorePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=partofpage-managestore-managestore-module-es5.js.map