import { Component, OnInit } from '@angular/core';
import { SerialService } from '../serial.service';
import { Subscription } from 'rxjs';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';



@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  public subscriptionEstado: Subscription;
  public subscriptionTrama: Subscription;

  trama: string = ''
  estado: string = ''
  arreglo = [];
  ///
  precio: string = ''
  inputPrecio: string = ''
  sensibilidad: string = ''
  inputSensibilidad: string = ''
  errores: number = 0
  binario: string = ''
  binario_array = []
  lista: string = ''
  ///
  cerveza = ''
  constructor(
    private service: SerialService,
    public platform: Platform,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private actRoute: ActivatedRoute,
    private bluetoothSerial: BluetoothSerial,


  ) {
    this.platform.ready().then(() => {
      this.binario_array[0] = '0'
      this.binario_array[1] = '0'
      this.binario_array[2] = '0'
      this.binario_array[3] = '0'
      this.binario_array[4] = '0'

      this.subscriptionTrama = service.tramaObservable$.subscribe((trama: string) => {
        this.trama = trama
        this.cdr.detectChanges();
        this.arreglo = trama.split(':', 11)
        // console.log(this.router.url)
        if (this.router.url == '/configuracion') {

          this.precio = this.arreglo[8]
          this.cerveza = this.arreglo[3]
          this.lista = this.arreglo[4]
          this.sensibilidad = this.arreglo[10]

        }/* else {
          if (this.router.url == '/configuracion' && this.arreglo[4] == '0')
            this.router.navigate(['/home'])
        }*/
      })
      this.subscriptionEstado = service.estadoObservable$.subscribe((estado: string) => {
        this.estado = estado
        this.cdr.detectChanges();
      })
    })
  }
  decimalToBinary(decimal: number) {
    var aux = decimal
    //this.lista=''
    var divisor = 16
    while (aux > 0) {
      if (aux >= divisor) {
        this.binario_array[4] = '1';
        this.lista += 'Sensibilidad de espuma no definida. \n'
        aux = - aux
      }
    }
    if (aux >= 16) {
      this.binario_array[4] = '1';
      this.lista += 'Sensibilidad de espuma no definida. \n'
      aux = - aux
    }
    if (aux >= 8) {
      this.binario_array[3] = '1';
      this.lista += 'Salió del modo habilitación por exceso de espuma. \n'
      aux = - aux
    }
    if (aux >= 4) {
      this.binario_array[2] = '1';
      this.lista += 'Sin definir precio por litro. \n'
      aux = - aux
    }
    if (aux >= 2) {
      this.binario_array[1] = '1';
      this.lista += 'Intentó ingresar sin dinero QR. \n'
      aux = - aux
    }
    if (aux >= 1) {
      this.binario_array[0] = '1';
      this.lista += 'No se usó la funcion SetCerveza. \n'
      aux = - aux
    }
  }

  ngOnInit() {
  }
  setPrecio() {

    (async () => {
      // Do something before delay
      console.log('before delay')
      this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10]).then(success => {

      }, err => {
        console.log(err)

      })
      await this.delay(500);

      // Do something after
      this.bluetoothSerial.write(this.arreglo[0] + ":" + this.inputPrecio + ":0:0:1:" + this.arreglo[10]).then(success => {
        console.log('SET PRECIO')
      }, error => {
      })
    })();
    /*   console.log(this.inputPrecio)
       this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[1] + ":" + this.arreglo[2] + ":" + this.arreglo[3] + ":1:" + this.arreglo[5]).then(success => {
         this.bluetoothSerial.write(this.arreglo[0] + ":" + this.inputPrecio + ":" + this.arreglo[2] + ":" + this.arreglo[3] + ":1:" + this.arreglo[5]).then(success => {
           console.log('SET PRECIO')
         }, error => {
         })
       }, err => {
         console.log(err)
   
       })*/
  }
  setSensibilidad() {

    (async () => {
      // Do something before delay
      console.log('before delay')
      this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10]).then(success => {

      }, err => {
        console.log(err)

      })
      await this.delay(500);

      // Do something after
      this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.inputSensibilidad).then(success => {
        console.log('SET Sensibilidad')
      }, error => {
      })
    })();
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  setCerveza() {
    (async () => {
      // Do something before delay
      console.log('before delay')
      this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10]).then(success => {

      }, err => {
        console.log(err)

      })
      await this.delay(500);

      // Do something after
      this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[8] + ":0:1:1:" + this.arreglo[10]).then(success => {
        console.log('SET CERVEZA 1')
      }, error => {
      })
      await this.delay(500);
      this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10]).then(success => {
        console.log('SET CERVEZA 0')
      }, error => {
      })
    })();
    console.log(this.inputPrecio)
    /*   this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[1] + ":" + this.arreglo[2] + ":" + this.arreglo[3] + ":1:" + this.arreglo[5]).then(success => {
         this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[1] + ":" + this.arreglo[2] + ":1:" + this.arreglo[4] + ":" + this.arreglo[5]).then(success => {
           console.log('SET CERVEZA 1')
           this.bluetoothSerial.write(this.arreglo[0] + ":" + this.arreglo[1] + ":" + this.arreglo[2] + ":0:" + this.arreglo[4] + ":" + this.arreglo[5]).then(success => {
             console.log('SET CERVEZA 0')
           }, error => {
           })
         }, error => {
         })
       }, err => {
         console.log(err)
   
       })*/

  }
  cerrar() {
    var cadena = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:0:" + this.arreglo[10];
    console.log(cadena.split(':', 6).length)
    if (cadena.split(':', 6).length == 6) {
      this.bluetoothSerial.write(cadena).then(success => {
        console.log('SALIR')
        this.router.navigate(['/home'])
      }, error => {
      })
    }
  }
}
