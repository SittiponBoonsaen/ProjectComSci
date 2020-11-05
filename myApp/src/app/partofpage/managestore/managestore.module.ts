import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagestorePageRoutingModule } from './managestore-routing.module';

import { ManagestorePage } from './managestore.page';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ManagestorePageRoutingModule,
        TableModule,
        ButtonModule,
        RippleModule
    ],
  declarations: [ManagestorePage]
})
export class ManagestorePageModule {}
