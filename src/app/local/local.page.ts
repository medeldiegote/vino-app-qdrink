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
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  public subscriptionEstado: Subscription;
  public subscriptionTrama: Subscription;

  nombre: string = '';
  inputNombre: string;
  caracteristicas: string = '';
  inputCaracteristicas: string = '';
  ///pico2
  nombre2: string = '';
  inputNombre2: string;
  caracteristicas2: string = '';
  inputCaracteristicas2: string = '';
  ///
  pairedList: dirmac;
  listToggle: boolean = false;
  pairedDeviceId: number = 0;
  mac_actual: string;
  inputMac: number
  ///
  cerveza = ''
  //
  updateNombre: FormGroup;
  updateCaracteristicas: FormGroup;
  //pico2
  updateNombre2: FormGroup;
  updateCaracteristicas2: FormGroup;
  //
  nom: Tipo;
  tipos: Tipo[] = [
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

  constructor(
    private service: SerialService,
    public platform: Platform,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private actRoute: ActivatedRoute,
    private bluetoothSerial: BluetoothSerial,
    private toastController: ToastController,
    private keyboard: Keyboard
  ) {
    if (localStorage.getItem('nombre'))
      this.nombre = localStorage.getItem('nombre')
    if (localStorage.getItem('caracteristicas'))
      this.inputCaracteristicas = localStorage.getItem('caracteristicas')
      if (localStorage.getItem('nombre2'))
      this.nombre2 = localStorage.getItem('nombre2')
    if (localStorage.getItem('caracteristicas2'))
      this.inputCaracteristicas2 = localStorage.getItem('caracteristicas2')

    this.updateNombre = new FormGroup({
      newNombre: new FormControl()
    })
    this.updateCaracteristicas = new FormGroup({
      newCaracteristicas: new FormControl(this.inputCaracteristicas)
    })
    this.updateNombre2 = new FormGroup({
      newNombre2: new FormControl()
    })
    this.updateCaracteristicas2 = new FormGroup({
      newCaracteristicas2: new FormControl(this.inputCaracteristicas2)
    })

    this.platform.ready().then(() => {
      this.checkBlueroothEnable()
      if (localStorage.getItem('mac'))
        this.mac_actual = JSON.parse(localStorage.getItem('mac')).name

    })
  }

  checkBlueroothEnable() {
    this.bluetoothSerial.isEnabled().then(success => {
      //  this.mac=JSON.parse(localStorage.getItem('mac'))
      this.listPairedDevices();
    }, error => {
      this.presentToast("Por favor, activa el Bluetooth");
    })
  }
  listPairedDevices() {
    this.bluetoothSerial.list().then(success => {
      this.pairedList = success;
      this.cdr.detectChanges();
      this.listToggle = true;
      console.log(this.listPairedDevices)
    }, error => {
      alert("Ha sucedido un error al recuperar la lista, inténtalo de nuevo");
      this.listToggle = false;
    })
  }
  ngOnInit() {
  }
  setMac() {
    if (this.inputMac >= 0) {
      localStorage.setItem('mac', JSON.stringify(this.pairedList[this.inputMac]));
      console.log(this.inputMac)
      console.log(JSON.parse(localStorage.getItem('mac')))
      //this.mac_actual = JSON.parse(localStorage.getItem('mac')).name
      //this.presentToast('Conectando')
      this.bluetoothSerial.disconnect()
      this.service.conectar()
    } else
      this.presentToast('Debe elegir box');
  }
  setNombre() {
    localStorage.setItem('nombre', this.updateNombre.value.newNombre)
    this.presentToast('Nombre cargado');
    this.nombre = localStorage.getItem('nombre')
    this.keyboard.hide();

  }
  setCaracteristicas() {
    localStorage.setItem('caracteristicas', this.updateCaracteristicas.value.newCaracteristicas)
    this.presentToast('Caracteristicas cargadas');
    this.caracteristicas = localStorage.getItem('caracteristicas')
    this.keyboard.hide();

  }
  setNombre2() {
    localStorage.setItem('nombre2', this.updateNombre2.value.newNombre2)
    this.presentToast('Nombre cargado');
    this.nombre2 = localStorage.getItem('nombre2')
    this.keyboard.hide();

  }
  setCaracteristicas2() {
    localStorage.setItem('caracteristicas2', this.updateCaracteristicas2.value.newCaracteristicas2)
    this.presentToast('Caracteristicas cargadas');
    this.caracteristicas2 = localStorage.getItem('caracteristicas2')
    this.keyboard.hide();

  }
  cerrar() {
    this.router.navigate(['/home'])
  }

  public optionsFn(): void { //here item is an object 

    let nombre = this.nom.nombre
    let caracteristicas = this.nom.caracteristicas;
    this.updateNombre.setValue({ 'newNombre': nombre })
    this.updateCaracteristicas.setValue({ 'newCaracteristicas': caracteristicas })
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

interface dirmac {
  'class': number,
  'id': String,
  'address': String,
  'name': String
}
interface Tipo {
  id: number;
  caracteristicas: string;
  nombre: string;
}