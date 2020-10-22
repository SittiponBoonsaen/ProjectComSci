(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partofpage-addfield-addfield-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/addfield/addfield.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/addfield/addfield.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPartofpageAddfieldAddfieldPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>addfield</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/partofpage/addfield/addfield-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/partofpage/addfield/addfield-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: AddfieldPageRoutingModule */

    /***/
    function srcAppPartofpageAddfieldAddfieldRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddfieldPageRoutingModule", function () {
        return AddfieldPageRoutingModule;
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


      var _addfield_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addfield.page */
      "./src/app/partofpage/addfield/addfield.page.ts");

      var routes = [{
        path: '',
        component: _addfield_page__WEBPACK_IMPORTED_MODULE_3__["AddfieldPage"]
      }];

      var AddfieldPageRoutingModule = function AddfieldPageRoutingModule() {
        _classCallCheck(this, AddfieldPageRoutingModule);
      };

      AddfieldPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddfieldPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/partofpage/addfield/addfield.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/partofpage/addfield/addfield.module.ts ***!
      \********************************************************/

    /*! exports provided: AddfieldPageModule */

    /***/
    function srcAppPartofpageAddfieldAddfieldModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddfieldPageModule", function () {
        return AddfieldPageModule;
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


      var _addfield_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addfield-routing.module */
      "./src/app/partofpage/addfield/addfield-routing.module.ts");
      /* harmony import */


      var _addfield_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addfield.page */
      "./src/app/partofpage/addfield/addfield.page.ts");

      var AddfieldPageModule = function AddfieldPageModule() {
        _classCallCheck(this, AddfieldPageModule);
      };

      AddfieldPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addfield_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddfieldPageRoutingModule"]],
        declarations: [_addfield_page__WEBPACK_IMPORTED_MODULE_6__["AddfieldPage"]]
      })], AddfieldPageModule);
      /***/
    },

    /***/
    "./src/app/partofpage/addfield/addfield.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/partofpage/addfield/addfield.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPartofpageAddfieldAddfieldPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRvZnBhZ2UvYWRkZmllbGQvYWRkZmllbGQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/partofpage/addfield/addfield.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/partofpage/addfield/addfield.page.ts ***!
      \******************************************************/

    /*! exports provided: AddfieldPage */

    /***/
    function srcAppPartofpageAddfieldAddfieldPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddfieldPage", function () {
        return AddfieldPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AddfieldPage = /*#__PURE__*/function () {
        function AddfieldPage() {
          _classCallCheck(this, AddfieldPage);
        }

        _createClass(AddfieldPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddfieldPage;
      }();

      AddfieldPage.ctorParameters = function () {
        return [];
      };

      AddfieldPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addfield',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./addfield.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/partofpage/addfield/addfield.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./addfield.page.scss */
        "./src/app/partofpage/addfield/addfield.page.scss"))["default"]]
      })], AddfieldPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=partofpage-addfield-addfield-module-es5.js.map