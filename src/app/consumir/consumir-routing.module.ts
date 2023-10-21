import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumirPage } from './consumir.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumirPageRoutingModule {}
