(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consumir-consumir-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/consumir/consumir.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/consumir/consumir.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppConsumirConsumirPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-text class='dot' id=\"conexion_consumir\"></ion-text>\r\n  <ion-text class='dot' id=\"estado_consumir\"></ion-text>\r\n</ion-header>\r\n\r\n<body id=\"page-top\">\r\n  <!-- Masthead-->\r\n  <header class=\"masthead\">\r\n    <div style=\"background-color: rgba(0, 0, 0, 0.5);height: 100%;\">\r\n      <div class=\"container h-100\">\r\n        <div class=\"row h-100 align-items-center justify-content-center text-center\">\r\n\r\n          <div class=\"col-md-10 position-relative\">\r\n            <h2 class=\"c-white\" style=\"font-size: 30px;\">¡Hola {{nombre | uppercase}} {{apellido | uppercase}}! Tu saldo es:</h2>\r\n            <h1 class=\"c-white bold \" style=\"font-size: 75px !important\">${{restante}}</h1>\r\n            <h3 class=\"c-white\"> {{cm}} cm3</h3>\r\n            <hr>\r\n            <div class=\"c-white\" style=\"font-size: 30px;\">  \r\n              {{cerveza | uppercase}}\r\n            </div>\r\n            <h6 class=\"c-white fs-20\">\r\n              {{caracteristicas | uppercase}}\r\n            </h6>         \r\n          </div>\r\n          <div class=\"col-md-8\">\r\n            <a class=\"btn btn-primary btn-xl\" (click)='cerrarboton()'>TERMINAR</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header> \r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js\"></script>\r\n</body>";
      /***/
    },

    /***/
    "./src/app/consumir/consumir-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/consumir/consumir-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ConsumirPageRoutingModule */

    /***/
    function srcAppConsumirConsumirRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsumirPageRoutingModule", function () {
        return ConsumirPageRoutingModule;
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


      var _consumir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./consumir.page */
      "./src/app/consumir/consumir.page.ts");

      var routes = [{
        path: '',
        component: _consumir_page__WEBPACK_IMPORTED_MODULE_3__["ConsumirPage"]
      }];

      var ConsumirPageRoutingModule = function ConsumirPageRoutingModule() {
        _classCallCheck(this, ConsumirPageRoutingModule);
      };

      ConsumirPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConsumirPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/consumir/consumir.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/consumir/consumir.module.ts ***!
      \*********************************************/

    /*! exports provided: ConsumirPageModule */

    /***/
    function srcAppConsumirConsumirModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsumirPageModule", function () {
        return ConsumirPageModule;
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


      var _consumir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./consumir-routing.module */
      "./src/app/consumir/consumir-routing.module.ts");
      /* harmony import */


      var _consumir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./consumir.page */
      "./src/app/consumir/consumir.page.ts");

      var ConsumirPageModule = function ConsumirPageModule() {
        _classCallCheck(this, ConsumirPageModule);
      };

      ConsumirPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _consumir_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsumirPageRoutingModule"]],
        declarations: [_consumir_page__WEBPACK_IMPORTED_MODULE_6__["ConsumirPage"]]
      })], ConsumirPageModule);
      /***/
    },

    /***/
    "./src/app/consumir/consumir.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/consumir/consumir.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppConsumirConsumirPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*#container {\n    text-align: center;\n\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  #container strong {\n    font-size: 20px;\n    line-height: 26px;\n  }\n\n  #container p {\n    font-size: 16px;\n    line-height: 22px;\n\n    color: #8c8c8c;\n\n    margin: 0;\n  }\n\n  #container a {\n    text-decoration: none;\n  }*/\n.dot {\n  margin-left: 5px;\n  height: 15px;\n  width: 15px;\n  background-color: #8f0303;\n  border-radius: 50%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VtaXIvY29uc3VtaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBO0FBMkJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29uc3VtaXIvY29uc3VtaXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSovXHJcbiAgLmRvdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAzLCAzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/consumir/consumir.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/consumir/consumir.page.ts ***!
      \*******************************************/

    /*! exports provided: ConsumirPage, Client */

    /***/
    function srcAppConsumirConsumirPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsumirPage", function () {
        return ConsumirPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Client", function () {
        return Client;
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


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _serial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../serial.service */
      "./src/app/serial.service.ts");
      /* harmony import */


      var _client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../client.service */
      "./src/app/client.service.ts");

      var ConsumirPage = /*#__PURE__*/function () {
        function ConsumirPage(bluetoothSerial, platform, cdr, toastController, router, actRoute, service, client, httpClient) {
          var _this = this;

          _classCallCheck(this, ConsumirPage);

          /*if (localStorage.getItem('nombre'))
            this.cerveza = localStorage.getItem('nombre')
          if (localStorage.getItem('caracteristicas'))
            this.caracteristicas = localStorage.getItem('caracteristicas')*/
          this.bluetoothSerial = bluetoothSerial;
          this.platform = platform;
          this.cdr = cdr;
          this.toastController = toastController;
          this.router = router;
          this.actRoute = actRoute;
          this.service = service;
          this.client = client;
          this.httpClient = httpClient;
          this.trama = '';
          this.estado = '';
          this.nombre = '';
          this.apellido = '';
          this.restante = '';
          this.gasto = '';
          this.precio = '';
          this.cm = '';
          this.sensibilidad = ''; //solo guardo

          this.arreglo = [];
          this.flagCerrar = false;
          this.valor = 0;
          this.cerveza = '';
          this.caracteristicas = '';
          this.errores = [];
          this.platform.ready().then(function () {
            _this.subscriptionTrama = service.tramaObservable$.subscribe(function (trama) {
              _this.trama = trama;

              _this.cdr.detectChanges(); //var arreglo = trama.split(':', 10)


              _this.arreglo = trama.split(':', 14); // console.log(this.router.url)

              if (_this.router.url == '/consumir' && _this.arreglo.length == 14) {
                switch (_this.arreglo[0]) {
                  case '0':
                    _this.valor++;

                    if (client.getIdClient() != '' && _this.valor == 1 && _this.flagCerrar == false) {
                      _this.flagCerrar = true;

                      _this.bluetoothSerial.clear().then(function (success) {}, function (err) {});

                      _this.cerrar();
                    } else _this.router.navigate(['/home']);

                    break;

                  case '1':
                    console.log('Pesos:' + _this.arreglo[2]);
                    console.log('trama:' + _this.trama);
                    var cl = client.getClient();
                    _this.apellido = cl.apellido;
                    _this.nombre = cl.nombre;
                    _this.restante = _this.arreglo[2]; //dinero cargado.              

                    _this.cm = _this.arreglo[1];

                    _this.cdr.detectChanges();

                    _this.gasto = _this.arreglo[10]; //dinero gastado

                    console.log(_this.arreglo.toString());
                    console.log(_this.arreglo[13]);
                    var tipo = _this.arreglo[13];
                    console.log(tipo == '1');
                    if (tipo == 1) _this.precio = _this.arreglo[8]; //pico 1

                    if (tipo == 2) _this.precio = _this.arreglo[9]; //pico 2 

                    if (tipo == 1) _this.sensibilidad = _this.arreglo[11]; //pico 1

                    if (tipo == 2) _this.sensibilidad = _this.arreglo[12]; //pico 2

                    if (tipo == 1) {
                      if (localStorage.getItem('nombre')) _this.cerveza = localStorage.getItem('nombre');
                      if (localStorage.getItem('caracteristicas')) _this.caracteristicas = localStorage.getItem('caracteristicas');
                    } //pico 1


                    if (tipo == 2) {
                      console.log('entra');
                      if (localStorage.getItem('nombre2')) _this.cerveza = localStorage.getItem('nombre2');
                      if (localStorage.getItem('caracteristicas2')) _this.caracteristicas = localStorage.getItem('caracteristicas2');
                    } //pico 2


                    break;
                }

                _this.errores = _this.numToBit(_this.arreglo[4]);
                if (_this.arreglo[4] == '0') document.getElementById('estado_consumir').style.backgroundColor = 'rgb(3, 143, 85)';else document.getElementById('estado_consumir').style.backgroundColor = 'rgb(143, 3, 3)';
              }
            });
            _this.subscriptionEstado = service.estadoObservable$.subscribe(function (estado) {
              _this.estado = estado;

              _this.cdr.detectChanges();

              if (estado == 'ok') document.getElementById('conexion_consumir').style.backgroundColor = 'rgb(3, 143, 85)';else document.getElementById('conexion_consumir').style.backgroundColor = 'rgb(143, 3, 3)';
            });
          });
        }

        _createClass(ConsumirPage, [{
          key: "consumir",
          value: function consumir() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            // this.bluetoothSerial.d
            this.router.navigate(['/home']);
          }
        }, {
          key: "cerrarboton",
          value: function cerrarboton() {
            var cadena = "0:" + this.precio + ":0:0:0:" + this.sensibilidad + ":0";

            if (cadena.split(':', 7).length == 7) {
              console.log('Cerrar consumir: ' + cadena);
              this.bluetoothSerial.write(cadena).then(function (success) {
                console.log('cerrado por el usuario');
              }, function (error) {});
            }
          }
        }, {
          key: "cerrar",
          value: function cerrar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var cadena;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.subscriptionTrama.unsubscribe();
                      cadena = "0:" + this.precio + ":0:0:0:" + this.sensibilidad + ":0";

                      if (!(cadena.split(':', 7).length == 7)) {
                        _context.next = 6;
                        break;
                      }

                      console.log('Cerrar consumir: ' + cadena);
                      _context.next = 6;
                      return this.bluetoothSerial.write(cadena).then(function (success) {
                        if (_this2.client.getIdClient() == 'clientegeneral') {
                          _this2.client.clearCliente();

                          _this2.presentToast("Sesión terminada");

                          _this2.router.navigate(['/home']);
                        } else {
                          _this2.httpClient.post('http://192.168.10.100:8090/api/transactions/', {
                            client: _this2.client.getIdClient(),
                            dinero: _this2.gasto,
                            ingreso: false
                          }).subscribe(function (res) {
                            _this2.client.clearCliente();

                            _this2.presentToast("Sesión terminada");

                            _this2.router.navigate(['/home']);
                          }, function (err) {
                            return console.log(err);
                          });
                        }
                      }, function (error) {});

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msj) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: msj,
                        position: 'top',
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "numToBit",
          value: function numToBit(num) {
            var number = num;
            var result = [];
            var errores = '';

            for (var i = 0; i < 6; i++) {
              result[i] = '0';
            }

            if (num >= 32) {
              result[5] = '1';
              num = num - 32;
              errores += "Error de trama. ";
            }

            if (num >= 16) {
              result[4] = '1';
              num = num - 16;
              errores += "Sensibilidad de espuma no definida. ";
            }

            if (num >= 8) {
              result[3] = '1';
              num = num - 8;
              errores += "Salió del modo habilitación por exceso de espuma. ";
            }

            if (num >= 4) {
              result[2] = '1';
              num = num - 4;
              errores += "Sin definir precio por litro. ";
            }

            if (num >= 2) {
              result[1] = '1';
              num = num - 2;
              errores += "Intentó ingresar sin dinero. ";
            }

            if (num >= 1) {
              result[0] = '1';
              num = num - 1;
              errores += "No se usó la función set cerveza. ";
            }

            if (errores != '') this.presentToast(errores);
            return result;
          }
        }]);

        return ConsumirPage;
      }();

      ConsumirPage.ctorParameters = function () {
        return [{
          type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _serial_service__WEBPACK_IMPORTED_MODULE_6__["SerialService"]
        }, {
          type: _client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      ConsumirPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consumir',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./consumir.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/consumir/consumir.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./consumir.page.scss */
        "./src/app/consumir/consumir.page.scss"))["default"]]
      })], ConsumirPage);

      var Client = function Client(id, nombre, apellido, dinero) {
        _classCallCheck(this, Client);

        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dinero = dinero;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=consumir-consumir-module-es5.js.map