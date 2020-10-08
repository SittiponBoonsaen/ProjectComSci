import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyhomePage } from './myhome.page';

const routes: Routes = [
  {
    path: '',
    component: MyhomePage
  },
  {
    path: 'myhome-field',
    loadChildren: () => import('../../partofpage/myhome-field/myhome-field.module').then( m => m.MyhomeFieldPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyhomePageRoutingModule {}
