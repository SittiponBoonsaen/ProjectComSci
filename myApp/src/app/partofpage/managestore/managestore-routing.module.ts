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
    path: 'editstore',
    loadChildren: () => import('../../partofpage/editstore/editstore.module').then( m => m.EditstorePageModule)
  },
  {
    path: 'managefield',
    loadChildren: () => import('../../partofpage/managefield/managefield.module').then( m => m.ManagefieldPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagestorePageRoutingModule {}
