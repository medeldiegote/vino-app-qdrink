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
  precio: string = ''
  cm: string = ''

  arreglo = [];

  flagCerrar: boolean = false;
  valor: number = 0

  cerveza:string='';
  caracteristicas:string=''

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
    if(localStorage.getItem('nombre'))
    this.cerveza = localStorage.getItem('nombre')
    if(localStorage.getItem('caracteristicas'))
    this.caracteristicas = localStorage.getItem('caracteristicas')

    this.platform.ready().then(() => {
      this.subscriptionTrama = service.tramaObservable$.subscribe((trama: string) => {
        this.trama = trama
        this.cdr.detectChanges();
        //var arreglo = trama.split(':', 10)
        this.arreglo = trama.split(':', 11)
        // console.log(this.router.url)
        if (this.router.url == '/consumir') {
          switch (this.arreglo[0]) {
            case '0':
              this.valor++
              if (client.getIdClient() != '' && this.valor == 1 && this.flagCerrar == false) {
                this.flagCerrar = true
                this.bluetoothSerial.clear().then(success => { }, err => { })
                this.cerrar();
              }
              else
                this.router.navigate(['/home'])
              break;
            case '1':

              var cl: Client = client.getClient();
              this.apellido = cl.apellido
              this.nombre = cl.nombre
              this.restante = this.arreglo[2] //dinero cargado. 
              this.gasto = this.arreglo[9] //dinero gastado
              this.precio = this.arreglo[8]
              this.cm = this.arreglo[1]
              break;
          }
          if (this.arreglo[4] == '0')
            document.getElementById('estado_consumir').style.backgroundColor = 'rgb(3, 143, 85)'
          else
            document.getElementById('estado_consumir').style.backgroundColor = 'rgb(143, 3, 3)'
        }


      })
      this.subscriptionEstado = service.estadoObservable$.subscribe((estado: string) => {
        this.estado = estado
        this.cdr.detectChanges();
        if (estado == 'ok')
          document.getElementById('conexion_consumir').style.backgroundColor = 'rgb(3, 143, 85)'
        else
          document.getElementById('conexion_consumir').style.backgroundColor = 'rgb(143, 3, 3)'
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
    this.subscriptionTrama.unsubscribe()
    var cadena = "0:" + this.arreglo[8] + ":0:0:0:" + this.arreglo[10];
    if(cadena.split(':', 6).length == 6){
    this.bluetoothSerial.write(cadena).then(success => {
      if (this.client.getIdClient() == 'clientegeneral') {
        this.client.clearCliente();
        this.presentToast("Sesión terminada")
        this.router.navigate(['/home'])
      } else {
        this.httpClient.post('http://192.168.10.101:8090/api/transactions/', { client: this.client.getIdClient(), dinero: this.gasto, ingreso: false }).subscribe(
          (res) => {
            this.client.clearCliente();
            this.presentToast("Sesión terminada")
            this.router.navigate(['/home'])
          }, (err) => console.log(err)
        );
      }
    }, error => {
    })}
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