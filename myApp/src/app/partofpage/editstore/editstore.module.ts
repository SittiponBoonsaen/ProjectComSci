import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditstorePageRoutingModule } from './editstore-routing.module';

import { EditstorePage } from './editstore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditstorePageRoutingModule
  ],
  declarations: [EditstorePage]
})
export class EditstorePageModule {}
