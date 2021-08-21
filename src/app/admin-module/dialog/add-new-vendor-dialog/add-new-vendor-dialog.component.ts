import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VendorData } from '../../../Shared/events.data';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new-vendor-dialog',
  templateUrl: './add-new-vendor-dialog.component.html',
  styleUrls: ['./add-new-vendor-dialog.component.scss']
})
export class AddNewVendorDialogComponent implements OnInit {
  local_data: any;
  data1: any;
  updateData: any;
  constructor(public dialogRef: MatDialogRef<AddNewVendorDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: VendorData,
    private _snackBar: MatSnackBar) {
    this.local_data = { ...data };
  }

  ngOnInit(): void {
  }

  doAction(value:any) {
    this.dialogRef.close(this.updateData = this.local_data);
    // console.log(this.updateData);
    this.openSnackBar("response response response response response response response response response response response response response response response response","Close");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration:2000
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
