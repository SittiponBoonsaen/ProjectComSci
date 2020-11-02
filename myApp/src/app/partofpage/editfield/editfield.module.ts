import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditfieldPageRoutingModule } from './editfield-routing.module';

import { EditfieldPage } from './editfield.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditfieldPageRoutingModule
  ],
  declarations: [EditfieldPage]
})
export class EditfieldPageModule {}
