import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SerialService {
  estado: string = '';
  trama: string = '';
  private estadoSubject = new Subject();
  public estadoObservable$ = this.estadoSubject.asObservable();

  private tramaSubject = new Subject();
  public tramaObservable$ = this.tramaSubject.asObservable();

  mac: pairedList;
  constructor(
    private bluetoothSerial: BluetoothSerial,
    public platform: Platform,
    private toastController: ToastController
  ) {
    //localStorage.removeItem('mac')
    try{
    this.mac = JSON.parse(localStorage.getItem('mac'))
    this.platform.ready().then(() => {
      this.bluetoothSerial.isEnabled().then(success => {
        if (this.mac && this.mac.address != '')
          this.conectar();
        else
          this.presentToast("Configure tablet")
      }, error => {
        this.presentToast("Por favor, activa el Bluetooth");
      })

    })
  }
  catch(e){
    this.presentToast("Cargue bluetooth del box en configuración de tablet");
  }
  }
  conectar() {

    this.bluetoothSerial.isConnected().then(success => {
      this.estado = success
      //this.deviceConnected()
    }, err => {
      this.estado = err;
      this.mac = JSON.parse(localStorage.getItem('mac')) //vuelvo a leer porque puedo venir de configuracion de la tablet
      this.connect(this.mac.address);
    }
    )
  }
  connect(address) {
    //  var mac = JSON.parse(localStorage.getItem('mac'))
    this.bluetoothSerial.connect(address).subscribe(success => {
      this.deviceConnected()
      this.estado = "Conectado correctamente a " + this.mac.name
      this.presentToast("Conectado correctamente " + this.mac.name)
    }, error => {
      this.estado = "No se ha podido conectar, algo ha fallado."
      this.presentToast("No se ha podido conectar, algo ha fallado.")
      this.tramaSubject.next(error)
      this.estadoSubject.next('error')

    })
  }
  deviceConnected() {
    this.bluetoothSerial.subscribe("\n").subscribe(success => {
      this.tramaSubject.next(success)
      this.estadoSubject.next('ok')
      this.bluetoothSerial.clear().then(success => {/*console.log('bluetooth clear');*/ })
    }, error => {
      this.tramaSubject.next(error)
      this.estadoSubject.next('error')


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
interface pairedList {
  'class': number,
  'id': String,
  'address': String,
  'name': String
}
