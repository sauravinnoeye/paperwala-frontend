import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewspaperService } from 'src/app/services/newspaper.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-view-newspaper-dialog',
  templateUrl: './view-newspaper-dialog.component.html',
  styleUrls: ['./view-newspaper-dialog.component.scss']
})
export class ViewNewspaperDialogComponent implements OnInit {
  local_data: any;
  data1: any;
  updateData: any;
  displayedColumns: string[] = ['newspaperId', 'newspaperName', 'newspaperRate', 'plan', 'subscribe'];
  dataSource: any;
  responseMessage: any;
  id: any;
  constructor(public dialogRef: MatDialogRef<ViewNewspaperDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private newspaperService: NewspaperService,
    private subscriptionService: SubscriptionService,
    private _snackBar: MatSnackBar) {
    this.local_data = { ...data };
    console.log(this.local_data);
    this.tableData();
  }

  ngOnInit(): void {
  }

  doAction(value: any) {
    this.dialogRef.close(this.updateData = this.local_data);
    console.log(this.updateData);
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  tableData() {
    this.newspaperService.getNewspapers(this.local_data.id).subscribe((response: any) => {
      console.log(response);
      this.dataSource = response;
    }, (error: any) => {
      console.log(error.error?.message);
    })
  }

  subscribe(action: any, obj: any) {
    if (confirm("Are you sure you want to Subscribe? Subscription can't be canceled mid way")) {
      this.dialogRef.close();
      var data = {
        user: localStorage.getItem('id'),
        vendor: obj?.vendor.toString(),
        newspaper: obj?.newspaperId.toString(),
        duration: obj?.plan,
        active: 'Yes',
        amount: obj?.newspaperRate
      };
      console.log(data);
      this.subscriptionService.subscriptionPaper(data).subscribe((response: any) => {
        console.log(response);
        this.responseMessage = response?.message;
        this.openSnackBar(this.responseMessage, "Close");
        this.tableData();
      }, (error) => {
        console.log(error);
        this.responseMessage = error;
        this.openSnackBar(this.responseMessage, "Close");
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000
    });
  }
}
