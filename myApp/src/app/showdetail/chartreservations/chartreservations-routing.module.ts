import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartreservationsPage } from './chartreservations.page';

const routes: Routes = [
  {
    path: '',
    component: ChartreservationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartreservationsPageRoutingModule {}
