import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

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
    MatInputModule,
    FormsModule,
    RouterModule
  ],
  declarations: []
})
export class SharedModule { }
