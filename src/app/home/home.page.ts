import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SerialService } from '../serial.service';
import { ClientService } from '../client.service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { Router, ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public subscriptionEstado: Subscription;
  public subscriptionTrama: Subscription;

  trama: string = '';
  estado: string = '';

  arreglo = [];
  errores = [];

  pico1 = '';
  caracteristicas = '';
  ///
  pico2 = '';
  caracteristicas2 = '';
  //

  options: NativeTransitionOptions = {
    direction: 'up',
    duration: 450,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
  };
  params = {
    preferFrontCamera: true, // iOS and Android
    showFlipCameraButton: true, // iOS and Android
    showTorchButton: true, // iOS and Android
    torchOn: true, // Android, launch with the torch switched on (if available)
    prompt: "Colocá el código QR dentro del área de escaneo", // Android
    resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
    formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
    disableAnimations: true, // iOS
    disableSuccessBeep: false // iOS and Android
  }

  constructor(
    private bluetoothSerial: BluetoothSerial,
    public platform: Platform,
    private cdr: ChangeDetectorRef,
    private toastController: ToastController,
    private service: SerialService,
    private client: ClientService,
    private barcodeScanner: BarcodeScanner,
    private httpClient: HttpClient,
    private router: Router,
    private nativePageTransitions: NativePageTransitions,
    public navCtrl: NavController
  ) {
    try {
      if (localStorage.getItem('nombre'))
        this.pico1 = localStorage.getItem('nombre')
      if (localStorage.getItem('caracteristicas'))
        this.caracteristicas = localStorage.getItem('caracteristicas')
      if (localStorage.getItem('nombre2'))
        this.pico2 = localStorage.getItem('nombre2')
      if (localStorage.getItem('caracteristicas2'))
        this.caracteristicas2 = localStorage.getItem('caracteristicas2')
    }
    catch (e) {
      this.presentToast('Cargue información de los picos')
    }
    this.platform.ready().then(() => {

      this.subscriptionTrama = service.tramaObservable$.subscribe((trama: string) => {
        this.trama = trama
        this.cdr.detectChanges();
        //var arreglo = trama.split(':', 11)
        this.arreglo = trama.split(':', 14)
        // console.log(this.router.url)
        if (this.router.url == '/home' && this.arreglo.length == 14) {
          this.errores = this.numToBit(this.arreglo[4])

          if (this.arreglo[4] == '0')
            document.getElementById('estado_home').style.backgroundColor = 'rgb(3, 143, 85)'
          else
            document.getElementById('estado_home').style.backgroundColor = 'rgb(143, 3, 3)'

          if (this.arreglo[0] == '1' && client.getIdClient() != '' && this.arreglo[4] == '0') {
            this.go('/consumir')
          }
          else {
            if (this.arreglo[7] == '1') {
              this.go('/configuracion')
            }
          }
        }
        // }
      })
      this.subscriptionEstado = service.estadoObservable$.subscribe((estado: string) => {
        this.estado = estado
        this.cdr.detectChanges();
        if (estado == 'ok')
          document.getElementById('conexion_home').style.backgroundColor = 'rgb(3, 143, 85)'
        else
          document.getElementById('conexion_home').style.backgroundColor = 'rgb(143, 3, 3)'

        if (estado == 'error') {
          service.conectar()
        }
      })
    })
  }
  ngOnInit() {


  }
  numToBit(num) {
    var number = num
    var result = []
    var errores = ''
    for (let i = 0; i < 6; i++)
      result[i] = '0'

    if (num >= 32) {
      result[5] = '1'
      num = num - 32
      errores += "Error de trama. "

    }
    if (num >= 16) {
      result[4] = '1'
      num = num - 16
      errores += "Sensibilidad de espuma no definida. "
    }
    if (num >= 8) {
      result[3] = '1'
      num = num - 8
      errores += "Salió del modo habilitación por exceso de espuma. "
    }
    if (num >= 4) {
      result[2] = '1'
      num = num - 4
      errores += "Sin definir precio por litro. "
    }
    if (num >= 2) {
      result[1] = '1'
      num = num - 2
      errores += "Intentó ingresar sin dinero. "

    }
    if (num >= 1) {
      result[0] = '1'
      num = num - 1
      errores += "No se usó la función set cerveza. "
    }
    if (errores != '')
      this.presentToast(errores)
    return result
  }
  async go(page: string) {
    this.nativePageTransitions.slide(this.options);
    await this.delay(200)
    this.router.navigate([page])
  }
  scan(pico: string) {

    this.client.clearCliente();
    this.barcodeScanner.scan(this.params).then(barcodeData => {
    
      if (barcodeData.cancelled == false) {
        var bytes = CryptoJS.AES.decrypt(barcodeData.text, 'MdMiAJOREGeA');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
       
        //var decryptedData = barcodeData.text;
        switch (decryptedData) {
          case 'ConfiguracionPico': {
            if (this.estado == 'ok') {
              //var cadena = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10];
              var cadena = "0:0:0:0:1:0:0";
              console.log('Configuración: ' + cadena)
              if (cadena.split(':', 7).length == 7 && this.arreglo.length == 14) {
                this.bluetoothSerial.write(cadena).then(success => {
                  console.log(success)
                  console.log('ok configuracion')
                }, err => {
                  console.log(err)
                })
              }
            }
            break;
          }
          case 'ClienteGeneral': {
            if (this.estado == 'ok') {
              this.client.setCliente('clientegeneral', 'Rubén', 'Cocuelle', '1000');
              this.delay(250)
              this.habilitar('1000', pico)
            }
            break;
          }
          case 'ClienteGeneral2': {
            if (this.estado == 'ok') {
              this.client.setCliente('clientegeneral', 'Diego', 'Medel', '1000');
              this.delay(250)
              this.habilitar('1000', pico)
            }
            break;
          }
          case 'ClienteGeneral3': {
            if (this.estado == 'ok') {
              this.client.setCliente('clientegeneral', 'Renzo', 'Masiero', '1000');
              this.delay(250)
              this.habilitar('1000', pico)
            }
            break;
          }
          case 'ClienteGeneral4': {
            if (this.estado == 'ok') {
              this.client.setCliente('clientegeneral', 'Jorge', 'García', '1000');
              this.delay(250)
              this.habilitar('1000', pico)
            }
            break;
          }
          case 'ConfiguracionLocal': {
            this.go('/local')
            break;
          }
          default: {
            if (this.arreglo[4] == '0') {
              this.httpClient.get<Client>('http://192.168.10.100:8090/api/clients/' + decryptedData).subscribe(
                (res) => {
                  if (res.dinero) {
                    this.client.setCliente(res.id, res.nombre, res.apellido, res.dinero);
                    this.delay(250)
                    this.habilitar(res.dinero, pico)
                  } else this.presentToast('Cliente sin dinero')
                }
                ,
                (err) => {
                  this.presentToast(err.error.message)
                  console.log((err))
                  //alert(err.message)
                  //alert(JSON.stringify(err) )
               }
              );
            }else{
              this.presentToast('No se ha podido realizar la operación')
            }
            break
          }

        }
      }

    }).catch(err => {
      console.log('Error', err);
    });

  }

  async habilitar(dinero: string, pico: string) {
    if (this.estado == 'ok') {
      let cadena = "1" + ":0:" + dinero + ":0:0:" + this.arreglo[10] + ":" + pico;
      if (cadena.split(':', 7).length == 7) {
        console.log('cadena:' + cadena)
        this.bluetoothSerial.write(cadena).then(success => {
          console.log(success + "1 envio hab")
        }, err => {
          console.log(err)
        })
      }
    }
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  ///
  set() {
    this.bluetoothSerial.write("0:400:0:1:1:95").then(success => {
    }, error => {
    })


  }
  cero() {
    this.bluetoothSerial.write("0:400:0:0:0:95").then(success => {
    }, error => {
    })
  }
  ///
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
export class Client {
  constructor(public id: string, public nombre: string, public apellido: string, public dinero: string) {
  }
}