import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarContatoPageRoutingModule } from './editar-contato-routing.module';

import { EditarContatoPage } from './editar-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarContatoPageRoutingModule
  ],
  declarations: [EditarContatoPage]
})
export class EditarContatoPageModule {}
