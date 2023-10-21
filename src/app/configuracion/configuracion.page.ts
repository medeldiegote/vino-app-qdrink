import { Component, OnInit } from '@angular/core';
import { SerialService } from '../serial.service';
import { Subscription } from 'rxjs';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard/ngx';



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
  //pico2
  precio2: string = ''
  inputPrecio2: string = ''
  sensibilidad2: string = ''
  inputSensibilidad2: string = ''
  //
  errores: number = 0
  errores_array = []
  lista: string = ''
  ///
  cerveza = ''
  //
  updateSensibilidad: FormGroup;
  updatePrecio: FormGroup;
//
updateSensibilidad2: FormGroup;
updatePrecio2: FormGroup;
//
  constructor(
    private service: SerialService,
    public platform: Platform,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private actRoute: ActivatedRoute,
    private bluetoothSerial: BluetoothSerial,
    private keyboard: Keyboard
  ) {
    this.updateSensibilidad = new FormGroup({
      newSensibilidad: new FormControl()
    })
    this.updatePrecio = new FormGroup({
      newPrecio: new FormControl()
    })
    this.updateSensibilidad2 = new FormGroup({
      newSensibilidad2: new FormControl()
    })
    this.updatePrecio2 = new FormGroup({
      newPrecio2: new FormControl()
    })

    this.platform.ready().then(() => {


      this.subscriptionTrama = service.tramaObservable$.subscribe((trama: string) => {
        this.trama = trama
        this.cdr.detectChanges();
        this.arreglo = trama.split(':', 14)
        // console.log(this.router.url)
        if (this.router.url == '/configuracion' && this.arreglo.length == 14) {
          this.lista = ''
          if (this.arreglo[4] == '0')
            this.lista = 'Sin errores'
          else
            this.errores_array = this.numToBit(this.arreglo[4])

          this.precio = this.arreglo[8]
          this.precio2 = this.arreglo[9]
          this.cerveza = this.arreglo[3]
          this.sensibilidad = this.arreglo[11]
          this.sensibilidad2 = this.arreglo[12]
          if (this.arreglo[7] == '0')
            this.router.navigate(['/home'])
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
  setPrecio() {

    (async () => {
      // Do something before delay
      console.log('before delay')
      this.bluetoothSerial.write("0:0:0:0:1:0:0").then(success => {

      }, err => {
        console.log(err)

      })
      await this.delay(500);

      // Do something after
      this.bluetoothSerial.write( "0:" + this.updatePrecio.value.newPrecio + ":0:0:1:0:1").then(success => {
        console.log('SET PRECIO')
      }, error => {
      })
      this.keyboard.hide();
    })();
   
  }
  setSensibilidad() {
    (async () => {
      // Do something before delay
      console.log('before delay')
      this.bluetoothSerial.write("0:0:0:0:1:0:0").then(success => {

      }, err => {
        console.log(err)

      })
      await this.delay(500);

      // Do something after
      this.bluetoothSerial.write("0:0:1:0:1:" + this.updateSensibilidad.value.newSensibilidad+":1").then(success => {
        console.log('SET Sensibilidad')
      }, error => {
      })
      this.keyboard.hide();
    }
    )();
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  setCerveza() {
    (async () => {
      // Do something before delay
      console.log('before delay')
      let cadena1 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10];
      let cadena2 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:1:1:" + this.arreglo[10];
      let cadena3 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10];

      this.bluetoothSerial.write(cadena1).then(success => {
      }, err => {
        console.log(err)

      })
      await this.delay(500);

      // Do something after
      this.bluetoothSerial.write(cadena2).then(success => {
        console.log('SET CERVEZA 1')
      }, error => {
      })
      await this.delay(500);
      this.bluetoothSerial.write(cadena3).then(success => {
        console.log('SET CERVEZA 0')
      }, error => {
      })
    })();
    console.log(this.inputPrecio)   

  }

  setPrecio2() {

    (async () => {
      // Do something before delay
      console.log('before delay')
      this.bluetoothSerial.write("0:0:0:0:1:0:0").then(success => {

      }, err => {
        console.log(err)

      })
      await this.delay(500);

      // Do something after
      this.bluetoothSerial.write( "0:" + this.updatePrecio2.value.newPrecio2 + ":0:0:1:0:2").then(success => {
        console.log('SET PRECIO')
      }, error => {
      })
      this.keyboard.hide();
    })();
   
    }
  setSensibilidad2() {
    (async () => {
      // Do something before delay
      console.log('before delay')
      this.bluetoothSerial.write("0:0:0:0:1:0:0").then(success => {
      }, err => {
        console.log(err)
      })
      await this.delay(500);
      // Do something after
      this.bluetoothSerial.write("0:0:1:0:1:" + this.updateSensibilidad2.value.newSensibilidad2+":2").then(success => {
        console.log('SET Sensibilidad')
      }, error => {
      })
      this.keyboard.hide();
    }
    )();
  }
 
  setCerveza2() {
    (async () => {
      // Do something before delay
      console.log('before delay')
      let cadena1 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10];
      let cadena2 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:1:1:" + this.arreglo[10];
      let cadena3 = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:1:" + this.arreglo[10];

      this.bluetoothSerial.write(cadena1).then(success => {
      }, err => {
        console.log(err)

      })
      await this.delay(500);
      // Do something after
      this.bluetoothSerial.write(cadena2).then(success => {
        console.log('SET CERVEZA 1')
      }, error => {
      })
      await this.delay(500);
      this.bluetoothSerial.write(cadena3).then(success => {
        console.log('SET CERVEZA 0')
      }, error => {
      })
    })();
    console.log(this.inputPrecio)  
  }
  async cerrar() {
    var cadena = this.arreglo[0] + ":" + this.arreglo[8] + ":0:0:0:" + this.arreglo[10];

    if (cadena.split(':', 6).length == 6) {
      console.log('Cerrar configuracion: ' + cadena)
      await this.bluetoothSerial.write(cadena).then(success => {
        console.log('SALIR')
        // this.router.navigate(['/home'])
      }, error => {
      })
    }
  }
  numToBit(num) {
    var number = num
    var result = []
    for (let i = 0; i < 6; i++)
      result[i] = '0'

    if (num >= 32) {
      result[5] = '1'
      num = num - 32
      this.lista += "Error de trama. \n"

    }
    if (num >= 16) {
      result[4] = '1'
      num = num - 16
      this.lista += "Sensibilidad de espuma no definida. \n"

    }
    if (num >= 8) {
      result[3] = '1'
      num = num - 8
      this.lista += "Salió del modo habilitación por exceso de espuma. \n"

    }
    if (num >= 4) {
      result[2] = '1'
      num = num - 4
      this.lista += "Sin definir precio por litro. \n"

    }
    if (num >= 2) {
      result[1] = '1'
      num = num - 2
      this.lista += "Intentó ingresar sin dinero. \n"

    }
    if (num >= 1) {
      result[0] = '1'
      num = num - 1
      this.lista += "No se usó la función set cerveza. \n"

    }
    return result
  }
}
