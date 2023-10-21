import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SerialService } from '../serial.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-consumir',
  templateUrl: './consumir.page.html',
  styleUrls: ['./consumir.page.scss'],
})

export class ConsumirPage implements OnInit {

  trama: string = '';
  estado: string = '';

  nombre: string = '';
  apellido: string = '';
  restante: string = '';
  gasto: string = '';
  flagCerrar: boolean = false;
  valor: number = 0

  public subscriptionEstado: Subscription;
  public subscriptionTrama: Subscription;

  constructor(
    private bluetoothSerial: BluetoothSerial,
    public platform: Platform,
    private cdr: ChangeDetectorRef,
    private toastController: ToastController,
    private router: Router,
    private actRoute: ActivatedRoute,
    private service: SerialService,
    private client: ClientService,
    private httpClient: HttpClient



  ) {
    this.platform.ready().then(() => {
      this.subscriptionTrama = service.tramaObservable$.subscribe((trama: string) => {
        this.trama = trama
        this.cdr.detectChanges();
        var arreglo = trama.split(':', 10)
        console.log(trama)
        if (this.router.url == '/consumir') {
          switch (arreglo[0]) {
            case '0':
              if (arreglo[9] != '0') {

                this.valor++
                if (client.getIdClient() != '' && this.valor == 1 && this.flagCerrar == false) {
                  this.flagCerrar = true
                  // this.cerrar()
                  console.log(trama);
                }
                else
                  this.router.navigate(['/home'])
              }
              break;

            case '1':

              var cl: Client = client.getClient();
              this.apellido = cl.apellido
              this.nombre = cl.nombre
              this.restante = arreglo[2] //dinero cargado. 
              this.gasto = arreglo[9] //dinero gastado

              break;
          }
        }


      })
      this.subscriptionEstado = service.estadoObservable$.subscribe((estado: string) => {
        this.estado = estado
        this.cdr.detectChanges();
      })
    })
  }
  ngOnInit() {
  }
  back() {
    // this.bluetoothSerial.d
    this.router.navigate(['/home'])
  }
  cerrar() {
    this.bluetoothSerial.write("0:0:0:0:0:95").then(success => {
      this.httpClient.post('http://192.168.10.101:8090/api/transactions/', { client: this.client.getIdClient(), dinero: this.gasto, ingreso: false }).subscribe(
        (res) => {
          console.log('entra')
          this.client.clearCliente();
          this.gasto = '0'
          this.restante = '0'
          this.presentToast("Sesión terminada")
          this.router.navigate(['/home'])
        }
        ,
        (err) => console.log(err)
      );

    }, error => {
    })
  }
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