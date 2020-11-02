import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagefieldPage } from './managefield.page';

const routes: Routes = [
  {
    path: '',
    component: ManagefieldPage
  },
  {
    path: 'editfield',
    loadChildren: () => import('../../partofpage/editfield/editfield.module').then( m => m.EditfieldPageModule)
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
export class ManagefieldPageRoutingModule {}
