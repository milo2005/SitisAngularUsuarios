import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListUsuarioComponent, AddUsuarioComponent]
})
export class UsuariosModule { }
