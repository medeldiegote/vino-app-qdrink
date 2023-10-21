import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumirPageRoutingModule } from './consumir-routing.module';

import { ConsumirPage } from './consumir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumirPageRoutingModule
  ],
  declarations: [ConsumirPage]
})
export class ConsumirPageModule {}
