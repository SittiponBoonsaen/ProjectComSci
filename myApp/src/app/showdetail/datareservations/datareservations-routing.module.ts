import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatareservationsPage } from './datareservations.page';

const routes: Routes = [
  {
    path: '',
    component: DatareservationsPage
  }, {
    path: 'chartreservations',
    loadChildren: () => import('../../showdetail/chartreservations/chartreservations.module').then( m => m.ChartreservationsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatareservationsPageRoutingModule {}
