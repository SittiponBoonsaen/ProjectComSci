import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagestorePageRoutingModule } from './managestore-routing.module';

import { ManagestorePage } from './managestore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagestorePageRoutingModule
  ],
  declarations: [ManagestorePage]
})
export class ManagestorePageModule {}
