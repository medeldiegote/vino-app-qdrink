(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["local-local-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/local/local.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/local/local.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .scrol{\r\n    display: block;\r\n    position: relative;\r\n    flex: 1 1 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    contain: size style;\r\n    margin: 0px !important;\r\n    padding: 0px !important;\r\n    overflow: scroll;}\r\n</style>\r\n<body id=\"page-top\">\r\n  <!-- Masthead-->\r\n  <header>\r\n  \r\n    <div class=\"scrol\">\r\n      <div class=\"row p-t-50 justify-content-center\">\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n          <div class=\"form-inline\">\r\n            <div class=\"form-group mb-2\">\r\n              <label class=\"bold\"></label>\r\n            </div>\r\n            <div class=\"form-group mx-sm-3 mb-2\">\r\n              <!--  <ion-input [(ngModel)]='inputPrecio' type='number' id=\"precioinput\" class=\"form-control\"\r\n                placeholder=\"valor nuevo\"></ion-input> -->\r\n                         <ion-select [(ngModel)]='inputMac' interface=\"action-sheet\">\r\n                <ion-select-option *ngFor=\"let pair of pairedList; let i = index\" value=\"{{i}}\">{{pair.name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n            <button (click)='setMac()' class=\"btn btn-primary mb-2\">SET</button>\r\n          </div>\r\n       <!--    <div class=\"fs-16 p-t-30\"><strong>Caja actual: {{mac_actual}}</strong></div> -->\r\n          <div class=\"fs-16 p-t-30\">Tablet conectada a una caja </div>\r\n        </div>\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n         <!-- <ion-item>\r\n            <ion-label>Pre-cargados</ion-label>\r\n            <ion-select interface=\"action-sheet\" [(ngModel)]=\"nom\"  (ionChange)=\"optionsFn();\">\r\n              <ion-select-option *ngFor=\"let tipo of tipos\" [value]=\"tipo\">{{tipo.nombre}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <br>-->\r\n          <ion-item>\r\n          <form [formGroup]=\"updateNombre\" (ngSubmit)=\"setNombre()\">\r\n          <div class=\"form-inline\">\r\n            <div class=\"form-group mb-2\">\r\n              <label class=\"bold\"></label>\r\n            </div>\r\n            <div class=\"form-group mx-sm-3 mb-2\">\r\n              <ion-input formControlName=\"newNombre\" type='text' class=\"form-control\" placeholder=\"valor nuevo\">\r\n              </ion-input>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary mb-2\">SET</button>\r\n          </div>\r\n          <div class=\"fs-16 p-t-30\">Pico 1: {{nombre}}</div>\r\n          </form>\r\n        </ion-item>\r\n        </div>\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n          <form [formGroup]=\"updateCaracteristicas\" (ngSubmit)=\"setCaracteristicas()\">\r\n          <div class=\"form-inline\">\r\n            <!-- <div class=\"form-group mb-2\">\r\n              <label class=\"bold\">Actual: {{caracteristicas}}</label>\r\n            </div> -->\r\n            <div class=\"form-group\">\r\n             <!--  <ion-textarea   class=\"form-control\" placeholder=\"valor nuevo\">\r\n              </ion-textarea> -->\r\n              <ion-textarea rows=\"6\" cols=\"50\"  formControlName=\"newCaracteristicas\"></ion-textarea>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary mb-2\">SET</button>\r\n          </div>\r\n          <div class=\"fs-16 p-t-30\">Defina características del pico 1</div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">      \r\n           <form [formGroup]=\"updateNombre2\" (ngSubmit)=\"setNombre2()\">\r\n           <div class=\"form-inline\">\r\n             <div class=\"form-group mb-2\">\r\n               <label class=\"bold\"></label>\r\n             </div>\r\n             <div class=\"form-group mx-sm-3 mb-2\">\r\n               <ion-input formControlName=\"newNombre2\" type='text' class=\"form-control\" placeholder=\"valor nuevo\">\r\n               </ion-input>\r\n             </div>\r\n             <button type=\"submit\" class=\"btn btn-primary mb-2\">SET</button>\r\n           </div>\r\n           <div class=\"fs-16 p-t-30\">Pico 2: {{nombre2}}</div>\r\n           </form>\r\n         </div>\r\n         <div class=\"col-md-10 bg-white card p-t-30 p-b-20 align-items-center m-b-20\">\r\n           <form [formGroup]=\"updateCaracteristicas2\" (ngSubmit)=\"setCaracteristicas2()\">\r\n           <div class=\"form-inline\">             \r\n             <div class=\"form-group\">              \r\n               <ion-textarea rows=\"6\" cols=\"50\"  formControlName=\"newCaracteristicas2\"></ion-textarea>\r\n             </div>\r\n             <button type=\"submit\" class=\"btn btn-primary mb-2\">SET</button>\r\n           </div>\r\n           <div class=\"fs-16 p-t-30\">Defina características del pico 2</div>\r\n           </form>\r\n         </div>\r\n         <div class=\"col-md-8 p-t-15 p-b-50 align-items-center text-center\">\r\n          <a class=\"btn btn-primary btn-xl\" (click)=\"cerrar()\">TERMINAR</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </header>\r\n  <!-- Bootstrap core JS-->\r\n  <!--   <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\r\n -->\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js\"></script>\r\n\r\n</body>");

/***/ }),

/***/ "./src/app/local/local-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/local/local-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LocalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalPageRoutingModule", function() { return LocalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _local_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local.page */ "./src/app/local/local.page.ts");




const routes = [
    {
        path: '',
        component: _local_page__WEBPACK_IMPORTED_MODULE_3__["LocalPage"]
    }
];
let LocalPageRoutingModule = class LocalPageRoutingModule {
};
LocalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocalPageRoutingModule);



/***/ }),

/***/ "./src/app/local/local.module.ts":
/*!***************************************!*\
  !*** ./src/app/local/local.module.ts ***!
  \***************************************/
/*! exports provided: LocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalPageModule", function() { return LocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _local_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-routing.module */ "./src/app/local/local-routing.module.ts");
/* harmony import */ var _local_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local.page */ "./src/app/local/local.page.ts");







let LocalPageModule = class LocalPageModule {
};
LocalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _local_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocalPageRoutingModule"]
        ],
        declarations: [_local_page__WEBPACK_IMPORTED_MODULE_6__["LocalPage"]]
    })
], LocalPageModule);



/***/ }),

/***/ "./src/app/local/local.page.scss":
/*!***************************************!*\
  !*** ./src/app/local/local.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsL2xvY2FsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/local/local.page.ts":
/*!*************************************!*\
  !*** ./src/app/local/local.page.ts ***!
  \*************************************/
/*! exports provided: LocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalPage", function() { return LocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _serial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serial.service */ "./src/app/serial.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");









let LocalPage = class LocalPage {
    constructor(service, platform, cdr, router, actRoute, bluetoothSerial, toastController, keyboard) {
        this.service = service;
        this.platform = platform;
        this.cdr = cdr;
        this.router = router;
        this.actRoute = actRoute;
        this.bluetoothSerial = bluetoothSerial;
        this.toastController = toastController;
        this.keyboard = keyboard;
        this.nombre = '';
        this.caracteristicas = '';
        this.inputCaracteristicas = '';
        ///pico2
        this.nombre2 = '';
        this.caracteristicas2 = '';
        this.inputCaracteristicas2 = '';
        this.listToggle = false;
        this.pairedDeviceId = 0;
        ///
        this.cerveza = '';
        this.tipos = [
            {
                id: 0,
                caracteristicas: '',
                nombre: ''
            },
            {
                id: 1,
                caracteristicas: '26 IBU 5,3%. Balanceada entre amargo y maltas caramelo amargor bajo y notas frutales',
                nombre: 'Amber'
            },
            {
                id: 2,
                caracteristicas: '28 IBU 5,4%. Amargo medio, notas a chocolate y cuerpo medio',
                nombre: 'American brown'
            },
            {
                id: 3,
                caracteristicas: '55 IBU 5,8%. Amargo medio alto, cuerpo medio bien lupulada aromática',
                nombre: 'American ipa'
            },
            {
                id: 4,
                caracteristicas: '12 IBU 4,6%. Muy suave refrescante bajo amargo fácil de tomar',
                nombre: 'American lager'
            },
            {
                id: 5,
                caracteristicas: '55 IBU 5,6%. Amargo medio alto, tostado suave, aroma cítrico y tostado',
                nombre: 'Black'
            },
            {
                id: 6,
                caracteristicas: '30 IBU 5%. Amargo medio cítrico, seca y refrescante',
                nombre: 'Citra'
            },
            {
                id: 7,
                caracteristicas: '80 IBU 7,6%. Amargo fuerte, bien lupulada, cítrica y seca',
                nombre: 'Doble ipa'
            },
            {
                id: 8,
                caracteristicas: '13 IBU 5,3%.Muy bajo amargo y dulzor y aroma sutil a miel',
                nombre: 'Honey'
            },
            {
                id: 9,
                caracteristicas: '20 IBU 4,7%. Bajo amargo, suave',
                nombre: 'Irish red'
            },
            {
                id: 10,
                caracteristicas: '20 IBU 5%. Bajo amargo, refrescante sabor suave a lúpulo noble',
                nombre: 'Koslch'
            },
            {
                id: 11,
                caracteristicas: '40 IBU 6%. Amargo suave, opaca de aroma cítrico y frutal de cuerpo medio',
                nombre: 'Neipa'
            },
            {
                id: 12,
                caracteristicas: '24 IBU 4,8%. Amargo bajo a medio, sabor a cholate y café de cuerpo medio',
                nombre: 'Porter '
            },
            {
                id: 13,
                caracteristicas: '44 IBU 5,6%. Amargo medio alto, cuerpo medio, balanceado en lúpulos frutales y maltas caramelo',
                nombre: 'Red ipa'
            },
            {
                id: 14,
                caracteristicas: '26 IBU 5,2%. Decididamente tostada, aromas a café cuerpo completo, nitrogenada',
                nombre: 'Stout  '
            }
        ];
        if (localStorage.getItem('nombre'))
            this.nombre = localStorage.getItem('nombre');
        if (localStorage.getItem('caracteristicas'))
            this.inputCaracteristicas = localStorage.getItem('caracteristicas');
        if (localStorage.getItem('nombre2'))
            this.nombre2 = localStorage.getItem('nombre2');
        if (localStorage.getItem('caracteristicas2'))
            this.inputCaracteristicas2 = localStorage.getItem('caracteristicas2');
        this.updateNombre = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            newNombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        this.updateCaracteristicas = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            newCaracteristicas: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.inputCaracteristicas)
        });
        this.updateNombre2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            newNombre2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        this.updateCaracteristicas2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            newCaracteristicas2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.inputCaracteristicas2)
        });
        this.platform.ready().then(() => {
            this.checkBlueroothEnable();
            if (localStorage.getItem('mac'))
                this.mac_actual = JSON.parse(localStorage.getItem('mac')).name;
        });
    }
    checkBlueroothEnable() {
        this.bluetoothSerial.isEnabled().then(success => {
            //  this.mac=JSON.parse(localStorage.getItem('mac'))
            this.listPairedDevices();
        }, error => {
            this.presentToast("Por favor, activa el Bluetooth");
        });
    }
    listPairedDevices() {
        this.bluetoothSerial.list().then(success => {
            this.pairedList = success;
            this.cdr.detectChanges();
            this.listToggle = true;
            console.log(this.listPairedDevices);
        }, error => {
            alert("Ha sucedido un error al recuperar la lista, inténtalo de nuevo");
            this.listToggle = false;
        });
    }
    ngOnInit() {
    }
    setMac() {
        if (this.inputMac >= 0) {
            localStorage.setItem('mac', JSON.stringify(this.pairedList[this.inputMac]));
            console.log(this.inputMac);
            console.log(JSON.parse(localStorage.getItem('mac')));
            //this.mac_actual = JSON.parse(localStorage.getItem('mac')).name
            //this.presentToast('Conectando')
            this.bluetoothSerial.disconnect();
            this.service.conectar();
        }
        else
            this.presentToast('Debe elegir box');
    }
    setNombre() {
        localStorage.setItem('nombre', this.updateNombre.value.newNombre);
        this.presentToast('Nombre cargado');
        this.nombre = localStorage.getItem('nombre');
        this.keyboard.hide();
    }
    setCaracteristicas() {
        localStorage.setItem('caracteristicas', this.updateCaracteristicas.value.newCaracteristicas);
        this.presentToast('Caracteristicas cargadas');
        this.caracteristicas = localStorage.getItem('caracteristicas');
        this.keyboard.hide();
    }
    setNombre2() {
        localStorage.setItem('nombre2', this.updateNombre2.value.newNombre2);
        this.presentToast('Nombre cargado');
        this.nombre2 = localStorage.getItem('nombre2');
        this.keyboard.hide();
    }
    setCaracteristicas2() {
        localStorage.setItem('caracteristicas2', this.updateCaracteristicas2.value.newCaracteristicas2);
        this.presentToast('Caracteristicas cargadas');
        this.caracteristicas2 = localStorage.getItem('caracteristicas2');
        this.keyboard.hide();
    }
    cerrar() {
        this.router.navigate(['/home']);
    }
    optionsFn() {
        let nombre = this.nom.nombre;
        let caracteristicas = this.nom.caracteristicas;
        this.updateNombre.setValue({ 'newNombre': nombre });
        this.updateCaracteristicas.setValue({ 'newCaracteristicas': caracteristicas });
    }
    presentToast(msj) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msj,
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
};
LocalPage.ctorParameters = () => [
    { type: _serial_service__WEBPACK_IMPORTED_MODULE_2__["SerialService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__["BluetoothSerial"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"] }
];
LocalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-local',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./local.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/local/local.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./local.page.scss */ "./src/app/local/local.page.scss")).default]
    })
], LocalPage);



/***/ })

}]);
//# sourceMappingURL=local-local-module-es2015.js.map