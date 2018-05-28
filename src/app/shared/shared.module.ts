import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatToolbarModule, MatButtonModule,
MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: []
})
export class SharedModule { }
