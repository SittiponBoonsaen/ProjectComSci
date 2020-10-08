import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
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
export class AccountPageRoutingModule {}
