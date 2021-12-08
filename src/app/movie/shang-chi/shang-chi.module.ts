import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShangChiPageRoutingModule } from './shang-chi-routing.module';

import { ShangChiPage } from './shang-chi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShangChiPageRoutingModule
  ],
  declarations: [ShangChiPage]
})
export class ShangChiPageModule {}
