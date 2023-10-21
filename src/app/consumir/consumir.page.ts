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
  sensibilidad: string = ''//solo guardo

  arreglo = [];

  flagCerrar: boolean = false;
  valor: number = 0

  cerveza: string = '';
  caracteristicas: string = ''

  errores = []

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
    /*if (localStorage.getItem('nombre'))
      this.cerveza = localStorage.getItem('nombre')
    if (localStorage.getItem('caracteristicas'))
      this.caracteristicas = localStorage.getItem('caracteristicas')*/

    this.platform.ready().then(() => {


      this.subscriptionTrama = service.tramaObservable$.subscribe((trama: string) => {
        this.trama = trama
        this.cdr.detectChanges();
        //var arreglo = trama.split(':', 10)
        this.arreglo = trama.split(':', 14)
        // console.log(this.router.url)
        if (this.router.url == '/consumir' && this.arreglo.length == 14) {
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
              console.log('Pesos:' + this.arreglo[2])
              console.log('trama:' + this.trama)
              var cl: Client = client.getClient();
              this.apellido = cl.apellido
              this.nombre = cl.nombre
              this.restante = this.arreglo[2] //dinero cargado.              
              this.cm = this.arreglo[1]
              this.cdr.detectChanges();
              this.gasto = this.arreglo[10] //dinero gastado
              console.log(this.arreglo.toString())
             console.log(this.arreglo[13])
              let tipo = this.arreglo[13]
              console.log(tipo=='1')
             if (tipo == 1)
                this.precio = this.arreglo[8] //pico 1
              if (tipo == 2)
                this.precio = this.arreglo[9] //pico 2 

              if (tipo == 1)
                this.sensibilidad = this.arreglo[11] //pico 1
              if (tipo == 2)
                this.sensibilidad = this.arreglo[12] //pico 2

              if (tipo == 1) {
                if (localStorage.getItem('nombre'))
                  this.cerveza = localStorage.getItem('nombre')
                if (localStorage.getItem('caracteristicas'))
                  this.caracteristicas = localStorage.getItem('caracteristicas')
              } //pico 1
              if (tipo == 2) {console.log('entra')
                if (localStorage.getItem('nombre2'))
                  this.cerveza = localStorage.getItem('nombre2')
                if (localStorage.getItem('caracteristicas2'))
                  this.caracteristicas = localStorage.getItem('caracteristicas2')
              } //pico 2

              break;
          }
          this.errores = this.numToBit(this.arreglo[4])
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
  consumir() {

  }
  ngOnInit() {
  }
  back() {
    // this.bluetoothSerial.d
    this.router.navigate(['/home'])
  }
  cerrarboton() {
    var cadena = "0:" + this.precio + ":0:0:0:" + this.sensibilidad + ":0";
    if (cadena.split(':', 7).length == 7) {
      console.log('Cerrar consumir: ' + cadena)
      this.bluetoothSerial.write(cadena).then(success => { console.log('cerrado por el usuario') },
        error => {
        })
    }
  }
  async cerrar() {
    this.subscriptionTrama.unsubscribe()
    var cadena = "0:" + this.precio + ":0:0:0:" + this.sensibilidad + ":0";
    if (cadena.split(':', 7).length == 7) {
      console.log('Cerrar consumir: ' + cadena)
      await this.bluetoothSerial.write(cadena).then(success => {
        if (this.client.getIdClient() == 'clientegeneral') {
          this.client.clearCliente();
          this.presentToast("Sesión terminada")
          this.router.navigate(['/home'])
        } else {
          this.httpClient.post('http://192.168.10.100:8090/api/transactions/', { client: this.client.getIdClient(), dinero: this.gasto, ingreso: false }).subscribe(
            (res) => {
              this.client.clearCliente();
              this.presentToast("Sesión terminada")
              this.router.navigate(['/home'])
            }, (err) => console.log(err)
          );
        }
      }, error => {
      })
    }
  }
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      position: 'top',
      duration: 2000
    });
    toast.present();
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
}
export class Client {
  constructor(public id: string, public nombre: string, public apellido: string, public dinero: string) {
  }
}