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


  constructor(
    private bluetoothSerial: BluetoothSerial,
    public platform: Platform,
    private toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.conectar();
    })
  }
conectar(){
  this.bluetoothSerial.isConnected().then(success => {
    this.estado = success
        

    //this.deviceConnected()
  }, err => {
    this.estado = err;
    this.connect('00:19:09:26:1C:5D');
  }
  )
}
  connect(address) {
    this.bluetoothSerial.connect(address).subscribe(success => {
      this.deviceConnected()
      this.estado = "Conectado correctamente"
      this.presentToast("Conectado correctamente")
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
