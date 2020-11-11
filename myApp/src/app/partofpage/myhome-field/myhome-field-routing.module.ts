import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyhomeFieldPage } from './myhome-field.page';

const routes: Routes = [
  {
    path: '',
    component: MyhomeFieldPage
  },
  {
    path: 'payment',
    loadChildren: () => import('../payment/payment.module').then( m => m.PaymentPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyhomeFieldPageRoutingModule {}
