import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagestorePage } from './managestore.page';

const routes: Routes = [
  {
    path: '',
    component: ManagestorePage
  },
  {
    path: 'addstore',
    loadChildren: () => import('../../partofpage/addstore/addstore.module').then( m => m.AddstorePageModule)
  },
  {
    path: 'addfield',
    loadChildren: () => import('../../partofpage/addfield/addfield.module').then( m => m.AddfieldPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagestorePageRoutingModule {}
