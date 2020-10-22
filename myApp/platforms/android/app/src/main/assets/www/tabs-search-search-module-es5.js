(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-search-search-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/search/search.page.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/search/search.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTabsSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<script src=\"https://unpkg.com/ionicons@5.1.2/dist/ionicons.js\"></script>\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>search</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar (ionChange)=\"searchmethod($event)\" showCancelButton=\"focus\" cancelButtonText=\"ยกเลิก\"></ion-searchbar>\r\n    <ion-item>\r\n      <div class=\"ion-text-wrap\" style=\"margin-left: 260px\" >\r\n        <ion-label><a (click)=\"searchAdvanced()\">ค้นหาขั้นสูง</a></ion-label>\r\n      </div>\r\n  </ion-item>\r\n\r\n  <ion-list *ngIf=\"isItemAvailable\" >\r\n    <ion-item (click)=\"clickstore(data.id_store)\" *ngFor=\"let data of datasearch | filtro: textsearch: 'name_store'\">\r\n      {{ data.name_store }}</ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/tabs/search/search-routing.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/tabs/search/search-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: SearchPageRoutingModule */

    /***/
    function srcAppTabsSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
        return SearchPageRoutingModule;
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


      var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search.page */
      "./src/app/tabs/search/search.page.ts");

      var routes = [{
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
      }, {
        path: 'search-advanced',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partofpage-search-advanced-search-advanced-module */
          "partofpage-search-advanced-search-advanced-module").then(__webpack_require__.bind(null,
          /*! ../../partofpage/search-advanced/search-advanced.module */
          "./src/app/partofpage/search-advanced/search-advanced.module.ts")).then(function (m) {
            return m.SearchAdvancedPageModule;
          });
        }
      }];

      var SearchPageRoutingModule = function SearchPageRoutingModule() {
        _classCallCheck(this, SearchPageRoutingModule);
      };

      SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tabs/search/search.module.ts":
    /*!**********************************************!*\
      !*** ./src/app/tabs/search/search.module.ts ***!
      \**********************************************/

    /*! exports provided: SearchPageModule */

    /***/
    function srcAppTabsSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
        return SearchPageModule;
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


      var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-routing.module */
      "./src/app/tabs/search/search-routing.module.ts");
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search.page */
      "./src/app/tabs/search/search.page.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var SearchPageModule = function SearchPageModule() {
        _classCallCheck(this, SearchPageModule);
      };

      SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
      })], SearchPageModule);
      /***/
    },

    /***/
    "./src/app/tabs/search/search.page.scss":
    /*!**********************************************!*\
      !*** ./src/app/tabs/search/search.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function srcAppTabsSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tabs/search/search.page.ts":
    /*!********************************************!*\
      !*** ./src/app/tabs/search/search.page.ts ***!
      \********************************************/

    /*! exports provided: SearchPage */

    /***/
    function srcAppTabsSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
        return SearchPage;
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


      var _datapass_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../datapass.service */
      "./src/app/datapass.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var SearchPage = /*#__PURE__*/function () {
        function SearchPage(router, datapass, Http) {
          _classCallCheck(this, SearchPage);

          this.router = router;
          this.datapass = datapass;
          this.Http = Http;
          this.datasearch = [];
          this.textsearch = '';
          this.isItemAvailable = false;
        }

        _createClass(SearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.datasearch = this.datapass.datastore;
          }
        }, {
          key: "searchAdvanced",
          value: function searchAdvanced() {
            var navigate = this.router.navigate(['/home/tabs/search/search-advanced']);
          }
        }, {
          key: "searchmethod",
          value: function searchmethod(event) {
            if (event.detail.value !== '') {
              this.isItemAvailable = true;
              this.textsearch = event.detail.value;
            } else {
              this.isItemAvailable = false;
            }
          }
        }, {
          key: "clickstore",
          value: function clickstore(id_store) {
            var _this = this;

            var dataJSON = {
              'id_store': id_store
            };
            this.Http.post('http://localhost:5000/apiFinal/getingfield', JSON.stringify(dataJSON)).subscribe(function (datafield) {
              _this.datapass.datafield = datafield;

              _this.Http.post('http://localhost:5000/apiFinal/getstoreformID', JSON.stringify(dataJSON)).subscribe(function (datastore) {
                _this.datapass.getingfieldfromstore = datastore;

                var navigate = _this.router.navigate(['/home/tabs/myhome/myhome-field']);
              });
            });
          }
        }]);

        return SearchPage;
      }();

      SearchPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _datapass_service__WEBPACK_IMPORTED_MODULE_3__["DatapassService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/search/search.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search.page.scss */
        "./src/app/tabs/search/search.page.scss"))["default"]]
      })], SearchPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-search-search-module-es5.js.map