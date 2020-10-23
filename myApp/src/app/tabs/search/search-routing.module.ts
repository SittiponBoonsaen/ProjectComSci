import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage

  },
  {
    path: 'search-advanced',
    loadChildren: () => import('../../partofpage/search-advanced/search-advanced.module').then( m => m.SearchAdvancedPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
