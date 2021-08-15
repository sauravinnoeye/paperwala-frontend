import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VendorForUpdateData } from '../../../Shared/events.data';

@Component({
  selector: 'app-edit-vendor-dialog',
  templateUrl: './edit-vendor-dialog.component.html',
  styleUrls: ['./edit-vendor-dialog.component.scss']
})
export class EditVendorDialogComponent implements OnInit {
  local_data: any;
  data1: any;
  updateData: any;
  constructor(public dialogRef: MatDialogRef<EditVendorDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: VendorForUpdateData) {
    this.local_data = { ...data };
  }

  ngOnInit(): void {
  }

  doAction() {
    this.dialogRef.close(this.updateData = this.local_data);
    console.log(this.updateData);
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
