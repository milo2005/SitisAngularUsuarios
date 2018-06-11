import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import {
  MatCardModule, MatToolbarModule, MatButtonModule,
  MatIconModule, MatFormFieldModule, MatInputModule,
  MatDialogModule
} from '@angular/material';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
    DeleteDialogComponent
  ],
  declarations: [DeleteDialogComponent],
  entryComponents: [DeleteDialogComponent]
})
export class SharedModule { }
