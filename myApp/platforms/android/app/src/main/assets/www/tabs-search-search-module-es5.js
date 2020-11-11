(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-search-search-module"], {
    /***/
    "57Nf":
    /*!**********************************************!*\
      !*** ./src/app/tabs/search/search.module.ts ***!
      \**********************************************/

    /*! exports provided: SearchPageModule */

    /***/
    function Nf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
        return SearchPageModule;
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


      var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-routing.module */
      "epAm");
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search.page */
      "sc+L");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");

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
    "PuxA":
    /*!**********************************************!*\
      !*** ./src/app/tabs/search/search.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function PuxA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background {\n  --background: #f5f5f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC90YWJzL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhYmVsLXJpZ2h0IHtcclxuXHJcbn1cclxuLmJhY2tncm91bmQge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "e575":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/search/search.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function e575(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<script src=\"https://unpkg.com/ionicons@5.1.2/dist/ionicons.js\"></script>\r\n<link href=\"https://fonts.googleapis.com/css2?family=Sarabun:wght@300&display=swap\" rel=\"stylesheet\">\r\n<ion-header class=\"background\" style=\"font-family: 'Sarabun', sans-serif;\">\r\n  <ion-toolbar class=\"background\">\r\n    <ion-title style=\"font-family: 'Sarabun', sans-serif;\">ค้นหา</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" >\r\n  <ion-searchbar (ionChange)=\"searchmethod($event)\" showCancelButton=\"focus\" cancelButtonText=\"ยกเลิก\"></ion-searchbar>\r\n    <ion-item class=\"background\">\r\n      <div class=\"ion-text-wrap\" style=\"margin-left: 200px\" >\r\n        <ion-label><a style=\"font-family: 'Sarabun', sans-serif;\" (click)=\"searchAdvanced()\">ค้นหาขั้นสูง</a></ion-label>\r\n      </div>\r\n  </ion-item>\r\n\r\n  <ion-list *ngIf=\"isItemAvailable\" >\r\n    <ion-item style=\"font-family: 'Sarabun', sans-serif;\" (click)=\"clickstore(data.id_store)\" *ngFor=\"let data of datasearch | filtro: textsearch: 'name_store'\">\r\n      {{ data.name_store }}</ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "epAm":
    /*!******************************************************!*\
      !*** ./src/app/tabs/search/search-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: SearchPageRoutingModule */

    /***/
    function epAm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
        return SearchPageRoutingModule;
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


      var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search.page */
      "sc+L");

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
          "pEFe")).then(function (m) {
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
    "sc+L":
    /*!********************************************!*\
      !*** ./src/app/tabs/search/search.page.ts ***!
      \********************************************/

    /*! exports provided: SearchPage */

    /***/
    function scL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
        return SearchPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search.page.html */
      "e575");
      /* harmony import */


      var _search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search.page.scss */
      "PuxA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _datapass_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../datapass.service */
      "woWk");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SearchPage = /*#__PURE__*/function () {
        function SearchPage(router, datapass, Http, loadingController) {
          _classCallCheck(this, SearchPage);

          this.router = router;
          this.datapass = datapass;
          this.Http = Http;
          this.loadingController = loadingController;
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var dataJSON;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'กำลังโหลดข้อมูล...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      dataJSON = {
                        'id_store': id_store
                      };
                      this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/getingfield', JSON.stringify(dataJSON)).subscribe(function (datafield) {
                        _this.datapass.datafield = datafield;

                        _this.Http.post('https://finalprojectcs.000webhostapp.com/apiFinal/getstoreformID', JSON.stringify(dataJSON)).subscribe(function (datastore) {
                          _this.datapass.getingfieldfromstore = datastore;

                          _this.loading.dismiss();

                          var navigate = _this.router.navigate(['/home/tabs/myhome/myhome-field']);
                        });

                        _this.loading.present();
                      });
                      this.loading.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return SearchPage;
      }();

      SearchPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _datapass_service__WEBPACK_IMPORTED_MODULE_5__["DatapassService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }];
      };

      SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SearchPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-search-search-module-es5.js.map