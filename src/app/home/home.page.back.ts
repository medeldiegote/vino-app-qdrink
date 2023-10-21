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


  params = {
    preferFrontCamera: false, // iOS and Android
    showFlipCameraButton: true, // iOS and Android
    showTorchButton: true, // iOS and Android
    torchOn: true, // Android, launch with the torch switched on (if available)
    prompt: "Coloca el código QR dentro del área de escaneo", // Android
    resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
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


  ) {
    this.platform.ready().then(() => {

      this.subscriptionTrama = service.tramaObservable$.subscribe((trama: string) => {
        
        this.trama = trama
        this.cdr.detectChanges();
        console.log(this.trama)
        var arreglo = trama.split(':', 10)
       // console.log(this.router.url)
        if (this.router.url == '/home') {
          if (arreglo[0] == '1' && client.getIdClient()!='') {
            this.router.navigate(['/consumir'])
          }
        }
      })
      this.subscriptionEstado = service.estadoObservable$.subscribe((estado: string) => {
        this.estado = estado
        this.cdr.detectChanges();
        if (estado == 'error') {
          service.conectar()
        }
      })
    })
  }
  ngOnInit() {


  }

  scan() {
    this.client.clearCliente();

    this.barcodeScanner.scan(this.params).then(barcodeData => {

      if (barcodeData.cancelled == false) {

        var bytes = CryptoJS.AES.decrypt(barcodeData.text, 'MdMiAJOREGeA');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        if (decryptedData == 'ConfiguracionPico') {

        } else {
          console.log(decryptedData);

          this.httpClient.get<Client>('http://192.168.10.101:8090/api/clients/' + decryptedData).subscribe(
            (res) => {
              console.log(res.dinero)
              if (res.dinero) {
                this.client.setCliente(res.id, res.nombre, res.apellido, res.dinero);
                this.habilitar(res.dinero)
              }
            }
            ,
            (err) => console.log((err))
          );
        }
      } else {
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }
  habilitar(dinero: string) {
    if (this.estado == 'ok') {
      this.bluetoothSerial.write("1:0:" + dinero + ":0:0:95").then(success => {
        console.log(success)
      }, err => {
        console.log(err)

      })
    }
  }
  ///
  set() {
    this.bluetoothSerial.write("0:400:0:1:1:95").then(success => {
    }, error => {
    })


  }
  cero() {
    this.bluetoothSerial.write("0:0:0:0:0:95").then(success => {
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