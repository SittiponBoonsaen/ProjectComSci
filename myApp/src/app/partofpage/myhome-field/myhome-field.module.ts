import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyhomeFieldPageRoutingModule } from './myhome-field-routing.module';

import { MyhomeFieldPage } from './myhome-field.page';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyhomeFieldPageRoutingModule,
        DataViewModule,
        ButtonModule,
        ScrollPanelModule,
        TableModule,
        RatingModule
    ],
  declarations: [MyhomeFieldPage]
})
export class MyhomeFieldPageModule {}
