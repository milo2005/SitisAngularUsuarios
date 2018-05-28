import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatCardModule, MatToolbarModule, MatButtonModule,
  MatIconModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class SharedModule { }
