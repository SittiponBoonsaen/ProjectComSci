import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatareservationsPageRoutingModule } from './datareservations-routing.module';

import { DatareservationsPage } from './datareservations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatareservationsPageRoutingModule
  ],
  declarations: [DatareservationsPage]
})
export class DatareservationsPageModule {}
