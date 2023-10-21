import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { SerialService } from './serial.service';
import { ClientService } from './client.service';

import { NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';


import { HttpClientModule} from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Keyboard } from '@ionic-native/keyboard/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    BarcodeScanner,
    SerialService,
    ClientService,
    Keyboard,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
