import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VendorData} from '../../../Shared/events.data';

@Component({
  selector: 'app-add-new-newspaper-dialog',
  templateUrl: './add-new-newspaper-dialog.component.html',
  styleUrls: ['./add-new-newspaper-dialog.component.scss']
})
export class AddNewNewspaperDialogComponent implements OnInit {
  local_data: any;
  data1: any;
  updateData: any;
  constructor(public dialogRef: MatDialogRef<AddNewNewspaperDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: VendorData,
    ) {
    this.local_data = { ...data };
  }

  ngOnInit(): void {
  }

  doAction(value:any) {
    this.dialogRef.close(this.updateData = this.local_data);
    // console.log(this.updateData);
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
