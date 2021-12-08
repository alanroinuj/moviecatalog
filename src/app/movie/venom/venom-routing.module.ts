import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenomPage } from './venom.page';

const routes: Routes = [
  {
    path: '',
    component: VenomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenomPageRoutingModule {}
