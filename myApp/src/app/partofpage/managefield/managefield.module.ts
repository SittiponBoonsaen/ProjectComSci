import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagefieldPageRoutingModule } from './managefield-routing.module';

import { ManagefieldPage } from './managefield.page';
import {TableModule} from 'primeng/table';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ManagefieldPageRoutingModule,
        TableModule
    ],
  declarations: [ManagefieldPage]
})
export class ManagefieldPageModule {}
