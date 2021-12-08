import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShangChiPage } from './shang-chi.page';

const routes: Routes = [
  {
    path: '',
    component: ShangChiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShangChiPageRoutingModule {}
