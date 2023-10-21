(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracion-configuracion-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion/configuracion.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion/configuracion.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppConfiguracionConfiguracionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>configuracion</ion-title>\r\n  </ion-toolbar>\r\n  {{trama}}<br>\r\n  {{estado}}\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <p> Precio por litro</p>\r\n      </ion-col>\r\n      <p>Valor actual: {{precio}}</p>\r\n      <ion-col>\r\n        <ion-input [(ngModel)]='inputPrecio' type='number' placeholder=\"Valor nuevo\"></ion-input>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button (click)='setPrecio()'>Set Precio</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <p> Set cerveza</p>\r\n      </ion-col>\r\n      <p>Valor actual: {{cerveza}}</p>\r\n      <ion-col>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button (click)='setCerveza()'>Set Cerveza</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button(click)=\"cerrar()\">CERRAR</ion-button>\r\n</ion-footer> -->\r\n\r\n<body id=\"page-top\">\r\n  <!-- Masthead-->\r\n  <header>\r\n    <ion-content>\r\n    <div class=\"container\">\r\n      <div class=\"row p-t-50 justify-content-center\">\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n          <form [formGroup]=\"updatePrecio\" (ngSubmit)=\"setPrecio()\">\r\n\r\n            <div class=\"form-inline\">\r\n              <div class=\"form-group mb-2\">\r\n                <label class=\"bold\">Actual:{{precio}}</label>\r\n              </div>\r\n              <div class=\"form-group mx-sm-3 mb-2\">\r\n                <ion-input formControlName=\"newPrecio\" type='number' id=\"precioinput\" class=\"form-control\"\r\n                  placeholder=\"valor nuevo\"></ion-input>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary mb-2\">SET</button>\r\n            </div>\r\n            <div class=\"fs-16 p-t-30\">Valor del precio por litro. Se espera un valor entero.</div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n          <form [formGroup]=\"updateSensibilidad\" (ngSubmit)=\"setSensibilidad()\">\r\n            <div class=\"form-inline\">\r\n\r\n              <div class=\"form-group mb-2\">\r\n                <label class=\"bold\">Actual: {{sensibilidad}}</label>\r\n              </div>\r\n              <div class=\"form-group mx-sm-3 mb-2\">\r\n                <ion-input type='number' formControlName=\"newSensibilidad\" class=\"form-control\"\r\n                  placeholder=\"valor nuevo\">\r\n                </ion-input>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary mb-2\">SET</button>\r\n            </div>\r\n            <div class=\"fs-16 p-t-30\">Define la sensibilidad para detectar espuma. Valores entre 70 a 100</div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n          <form class=\"form-inline\">\r\n\r\n            <div class=\"form-group mx-sm-3 mb-2\">\r\n              <label class=\"bold\" *ngIf=\"cerveza==1\">Es cerveza</label>\r\n              <label class=\"bold\" *ngIf=\"cerveza==0\">No es cerveza</label>\r\n            </div>\r\n            <button (click)='setCerveza()' class=\"btn btn-primary mb-2\">SET</button>\r\n          </form>\r\n          <div class=\"fs-16 p-t-30\">\r\n            Enseña al sistema a diferenciar cerveza de espuma\r\n          </div>\r\n        </div>\r\n        <!--segundo pico-->\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n          <form [formGroup]=\"updatePrecio2\" (ngSubmit)=\"setPrecio2()\">\r\n            <div class=\"form-inline\">\r\n              <div class=\"form-group mb-2\">\r\n                <label class=\"bold\">Actual:{{precio2}}</label>\r\n              </div>\r\n              <div class=\"form-group mx-sm-3 mb-2\">\r\n                <ion-input formControlName=\"newPrecio2\" type='number' id=\"precioinput2\" class=\"form-control\"\r\n                  placeholder=\"valor nuevo\"></ion-input>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary mb-2\">SET</button>\r\n            </div>\r\n            <div class=\"fs-16 p-t-30\">Valor del precio por litro. Se espera un valor entero.</div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n          <form [formGroup]=\"updateSensibilidad2\" (ngSubmit)=\"setSensibilidad2()\">\r\n            <div class=\"form-inline\">\r\n\r\n              <div class=\"form-group mb-2\">\r\n                <label class=\"bold\">Actual: {{sensibilidad2}}</label>\r\n              </div>\r\n              <div class=\"form-group mx-sm-3 mb-2\">\r\n                <ion-input type='number' formControlName=\"newSensibilidad2\" class=\"form-control\"\r\n                  placeholder=\"valor nuevo\">\r\n                </ion-input>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary mb-2\">SET</button>\r\n            </div>\r\n            <div class=\"fs-16 p-t-30\">Define la sensibilidad para detectar espuma. Valores entre 70 a 100</div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n          <form class=\"form-inline\">\r\n\r\n            <div class=\"form-group mx-sm-3 mb-2\">\r\n              <label class=\"bold\" *ngIf=\"cerveza2==1\">Es cerveza</label>\r\n              <label class=\"bold\" *ngIf=\"cerveza2==0\">No es cerveza</label>\r\n            </div>\r\n            <button (click)='setCerveza2()' class=\"btn btn-primary mb-2\">SET</button>\r\n          </form>\r\n          <div class=\"fs-16 p-t-30\">\r\n            Enseña al sistema a diferenciar cerveza de espuma\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-10 bg-white card p-t-20 p-b-20 align-items-center m-b-20\">\r\n          <div class=\"fs-30 p-t-10\">Errores</div>\r\n          <div class=\"fs-16 p-t-10\">{{lista}}</div>\r\n\r\n        </div>\r\n        <div class=\"col-md-8 p-t-15 p-b-50 align-items-center text-center\">\r\n          <a class=\"btn btn-primary btn-xl\" (click)=\"cerrar()\">TERMINAR</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n  </header>\r\n  <!-- Bootstrap core JS-->\r\n  <!--   <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\r\n -->\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js\"></script>\r\n\r\n</body>\r\n";
      /***/
    },

    /***/
    "./src/app/configuracion/configuracion-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/configuracion/configuracion-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ConfiguracionPageRoutingModule */

    /***/
    function srcAppConfiguracionConfiguracionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfiguracionPageRoutingModule", function () {
        return ConfiguracionPageRoutingModule;
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


      var _configuracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./configuracion.page */
      "./src/app/configuracion/configuracion.page.ts");

      var routes = [{
        path: '',
        component: _configuracion_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracionPage"]
      }];

      var ConfiguracionPageRoutingModule = function ConfiguracionPageRoutingModule() {
        _classCallCheck(this, ConfiguracionPageRoutingModule);
      };

      ConfiguracionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfiguracionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/configuracion/configuracion.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/configuracion/configuracion.module.ts ***!
      \*******************************************************/

    /*! exports provided: ConfiguracionPageModule */

    /***/
    function srcAppConfiguracionConfiguracionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfiguracionPageModule", function () {
        return ConfiguracionPageModule;
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


      var _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./configuracion-routing.module */
      "./src/app/configuracion/configuracion-routing.module.ts");
      /* harmony import */


      var _configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./configuracion.page */
      "./src/app/configuracion/configuracion.page.ts");

      var ConfiguracionPageModule = function ConfiguracionPageModule() {
        _classCallCheck(this, ConfiguracionPageModule);
      };

      ConfiguracionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracionPageRoutingModule"]],
        declarations: [_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionPage"]]
      })], ConfiguracionPageModule);
      /***/
    },

    /***/
    "./src/app/configuracion/configuracion.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/configuracion/configuracion.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppConfiguracionConfiguracionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24vY29uZmlndXJhY2lvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/configuracion/configuracion.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/configuracion/configuracion.page.ts ***!
      \*****************************************************/

    /*! exports provided: ConfiguracionPage */

    /***/
    function srcAppConfiguracionConfiguracionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfiguracionPage", function () {
        return ConfiguracionPage;
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


      var _serial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../serial.service */
      "./src/app/serial.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");

      var ConfiguracionPage = /*#__PURE__*/function () {
        //
        function ConfiguracionPage(service, platform, cdr, router, actRoute, bluetoothSerial, keyboard) {
          var _this = this;

          _classCallCheck(this, ConfiguracionPage);

          this.service = service;
          this.platform = platform;
          this.cdr = cdr;
          this.router = router;
          this.actRoute = actRoute;
          this.bluetoothSerial = bluetoothSerial;
          this.keyboard = keyboard;
          this.trama = '';
          this.estado = '';
          this.arreglo = []; ///

          this.precio = '';
          this.inputPrecio = '';
          this.sensibilidad = '';
          this.inputSensibilidad = ''; //pico2

          this.precio2 = '';
          this.inputPrecio2 = '';
          this.sensibilidad2 = '';
          this.inputSensibilidad2 = ''; //

          this.errores = 0;
          this.errores_array = [];
          this.lista = ''; ///

          this.cerveza = '';
          this.updateSensibilidad = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            newSensibilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
          });
          this.updatePrecio = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            newPrecio: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
          });
          this.updateSensibilidad2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            newSensibilidad2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
          });
          this.updatePrecio2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            newPrecio2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
          });
          this.platform.ready().then(function () {
            _this.subscriptionTrama = service.tramaObservable$.subscribe(function (trama) {
              _this.trama = trama;

              _this.cdr.detectChanges();

              _this.arreglo = trama.split(':', 14); // console.log(this.router.url)

              if (_this.router.url == '/configuracion' && _this.arreglo.length == 14) {
                _this.lista = '';
                if (_this.arreglo[4] == '0') _this.lista = 'Sin errores';else _this.errores_array = _this.numToBit(_this.arreglo[4]);
                _this.precio = _this.arreglo[8];
                _this.precio2 = _this.arreglo[9];
                _this.cerveza = _this.arreglo[3];
                _this.sensibilidad = _this.arreglo[11];
                _this.sensibilidad2 = _this.arreglo[12];
                if (_this.arreglo[7] == '0') _this.router.navigate(['/home']);
              }
            });
            _this.subscriptionEstado = service.estadoObservable$.subscribe(function (estado) {
              _this.estado = estado;

              _this.cdr.detectChanges();
            });
          });
        }

        _createClass(ConfiguracionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setPrecio",
          value: function setPrecio() {
            var _this2 = this;

            (function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // Do something before delay
                        console.log('before delay');
                        this.bluetoothSerial.write("0:0:0:0:1:0:0").then(function (success) {}, function (err) {
                          console.log(err);
                        });
                        _context.next = 4;
                        return this.delay(500);

                      case 4:
                        // Do something after
                        this.bluetoothSerial.write("0:" + this.updatePrecio.value.newPrecio + ":0:0:1:0:1").then(function (success) {
                          console.log('SET PRECIO');
                        }, function (error) {});
                        this.keyboard.hide();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            })();
          }
        }, {
          key: "setSensibilidad",
          value: function setSensibilidad() {
            var _this3 = this;

            (function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        // Do something before delay
                        console.log('before delay');
                        this.bluetoothSerial.write("0:0:0:0:1:0:0").then(function (success) {}, function (err) {
                          console.log(err);
                        });
                        _context2.next = 4;
                        return this.delay(500);

                      case 4:
                        // Do something after
                        this.bluetoothSerial.write("0:0:1:0:1:" + this.updateSensibilidad.value.newSensibilidad + ":1").then(function (success) {
                          console.log('SET Sensibilidad');
                        }, function (error) {});
                        this.keyboard.hide();

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            })();
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }, {
          key: "setCerveza",
          value: function setCerveza() {
            var _this4 = this;

            (function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var cadena1, cadena2, cadena3;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        // Do something before delay
                        console.log('before delay');
                        cadena1 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10];
                        cadena2 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:1:1:" + this.arreglo[10];
                        cadena3 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10];
                        this.bluetoothSerial.write(cadena1).then(function (success) {}, function (err) {
                          console.log(err);
                        });
                        _context3.next = 7;
                        return this.delay(500);

                      case 7:
                        // Do something after
                        this.bluetoothSerial.write(cadena2).then(function (success) {
                          console.log('SET CERVEZA 1');
                        }, function (error) {});
                        _context3.next = 10;
                        return this.delay(500);

                      case 10:
                        this.bluetoothSerial.write(cadena3).then(function (success) {
                          console.log('SET CERVEZA 0');
                        }, function (error) {});

                      case 11:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            })();

            console.log(this.inputPrecio);
          }
        }, {
          key: "setPrecio2",
          value: function setPrecio2() {
            var _this5 = this;

            (function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        // Do something before delay
                        console.log('before delay');
                        this.bluetoothSerial.write("0:0:0:0:1:0:0").then(function (success) {}, function (err) {
                          console.log(err);
                        });
                        _context4.next = 4;
                        return this.delay(500);

                      case 4:
                        // Do something after
                        this.bluetoothSerial.write("0:" + this.updatePrecio2.value.newPrecio2 + ":0:0:1:0:2").then(function (success) {
                          console.log('SET PRECIO');
                        }, function (error) {});
                        this.keyboard.hide();

                      case 6:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            })();
          }
        }, {
          key: "setSensibilidad2",
          value: function setSensibilidad2() {
            var _this6 = this;

            (function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        // Do something before delay
                        console.log('before delay');
                        this.bluetoothSerial.write("0:0:0:0:1:0:0").then(function (success) {}, function (err) {
                          console.log(err);
                        });
                        _context5.next = 4;
                        return this.delay(500);

                      case 4:
                        // Do something after
                        this.bluetoothSerial.write("0:0:1:0:1:" + this.updateSensibilidad2.value.newSensibilidad2 + ":2").then(function (success) {
                          console.log('SET Sensibilidad');
                        }, function (error) {});
                        this.keyboard.hide();

                      case 6:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            })();
          }
        }, {
          key: "setCerveza2",
          value: function setCerveza2() {
            var _this7 = this;

            (function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var cadena1, cadena2, cadena3;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        // Do something before delay
                        console.log('before delay');
                        cadena1 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10];
                        cadena2 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:1:1:" + this.arreglo[10];
                        cadena3 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10];
                        this.bluetoothSerial.write(cadena1).then(function (success) {}, function (err) {
                          console.log(err);
                        });
                        _context6.next = 7;
                        return this.delay(500);

                      case 7:
                        // Do something after
                        this.bluetoothSerial.write(cadena2).then(function (success) {
                          console.log('SET CERVEZA 1');
                        }, function (error) {});
                        _context6.next = 10;
                        return this.delay(500);

                      case 10:
                        this.bluetoothSerial.write(cadena3).then(function (success) {
                          console.log('SET CERVEZA 0');
                        }, function (error) {});

                      case 11:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            })();

            console.log(this.inputPrecio);
          }
        }, {
          key: "cerrar",
          value: function cerrar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var cadena;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      cadena = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:0:" + this.arreglo[10];

                      if (!(cadena.split(':', 6).length == 6)) {
                        _context7.next = 5;
                        break;
                      }

                      console.log('Cerrar configuracion: ' + cadena);
                      _context7.next = 5;
                      return this.bluetoothSerial.write(cadena).then(function (success) {
                        console.log('SALIR'); // this.router.navigate(['/home'])
                      }, function (error) {});

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "numToBit",
          value: function numToBit(num) {
            var number = num;
            var result = [];

            for (var i = 0; i < 6; i++) {
              result[i] = '0';
            }

            if (num >= 32) {
              result[5] = '1';
              num = num - 32;
              this.lista += "Error de trama. \n";
            }

            if (num >= 16) {
              result[4] = '1';
              num = num - 16;
              this.lista += "Sensibilidad de espuma no definida. \n";
            }

            if (num >= 8) {
              result[3] = '1';
              num = num - 8;
              this.lista += "Salió del modo habilitación por exceso de espuma. \n";
            }

            if (num >= 4) {
              result[2] = '1';
              num = num - 4;
              this.lista += "Sin definir precio por litro. \n";
            }

            if (num >= 2) {
              result[1] = '1';
              num = num - 2;
              this.lista += "Intentó ingresar sin dinero. \n";
            }

            if (num >= 1) {
              result[0] = '1';
              num = num - 1;
              this.lista += "No se usó la función set cerveza. \n";
            }

            return result;
          }
        }]);

        return ConfiguracionPage;
      }();

      ConfiguracionPage.ctorParameters = function () {
        return [{
          type: _serial_service__WEBPACK_IMPORTED_MODULE_2__["SerialService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__["BluetoothSerial"]
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"]
        }];
      };

      ConfiguracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./configuracion.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion/configuracion.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./configuracion.page.scss */
        "./src/app/configuracion/configuracion.page.scss"))["default"]]
      })], ConfiguracionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=configuracion-configuracion-module-es5.js.map