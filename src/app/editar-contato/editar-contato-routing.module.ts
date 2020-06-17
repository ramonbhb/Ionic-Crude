import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarContatoPage } from './editar-contato.page';

const routes: Routes = [
  {
    path: '',
    component: EditarContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarContatoPageRoutingModule {}
