import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartreservationsPageRoutingModule } from './chartreservations-routing.module';

import { ChartreservationsPage } from './chartreservations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartreservationsPageRoutingModule
  ],
  declarations: [ChartreservationsPage]
})
export class ChartreservationsPageModule {}
