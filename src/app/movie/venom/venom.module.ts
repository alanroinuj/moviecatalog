import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenomPageRoutingModule } from './venom-routing.module';

import { VenomPage } from './venom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenomPageRoutingModule
  ],
  declarations: [VenomPage]
})
export class VenomPageModule {}
