import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html'
})
export class DeleteDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DeleteDialogComponent>) { }

    accept() {
        this.dialogRef.close(this.data);
    }


}
