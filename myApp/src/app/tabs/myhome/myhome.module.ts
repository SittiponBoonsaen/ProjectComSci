import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyhomePageRoutingModule } from './myhome-routing.module';

import { MyhomePage } from './myhome.page';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyhomePageRoutingModule,
    TableModule,
    ButtonModule,
    ProgressSpinnerModule,
    DataViewModule,
    DropdownModule,
    RatingModule
  ],
  declarations: [MyhomePage]
})
export class MyhomePageModule {}
