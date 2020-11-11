import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditfieldPage } from './editfield.page';

const routes: Routes = [
  {
    path: '',
    component: EditfieldPage
  },
  {
    path: 'discount',
    loadChildren: () => import('../discount/discount.module').then( m => m.DiscountPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditfieldPageRoutingModule {}
