import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VendorService } from 'src/app/services/vendor.service';
import { ViewNewspaperDialogComponent } from '../dialog/view-newspaper-dialog/view-newspaper-dialog.component';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.scss']
})
export class ViewVendorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'vendorName', 'type', 'agency', 'contact', 'uniqueId', 'vendorAddress', 'action'];
  dataSource: any;
  responseMessage: any;

  constructor(public dialog: MatDialog,
    private vendorService: VendorService,
    private _snackBar: MatSnackBar) {
    this.tableData();
  }

  ngOnInit(): void {
  }

  tableData() {
    this.vendorService.getVendors().subscribe((response: any) => {
      console.log(response);
      this.dataSource = response;
    }, (error: any) => {
      console.log(error.error?.message);
    })
  }

  openEditDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(ViewNewspaperDialogComponent, {
      width: '100%',
      height:'80%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event !== 'Cancel' && result !== undefined && result !== '') {
        var data = {
          vendorName: result.vendorName,
          type: result.type,
          agency: result.agency,
          contact: result.contact,
          uniqueId: result.uniqueId,
          vendorAddress: result.vendorAddress,
          userName: result.userName,
          password: result.password
        };
        this.vendorService.updateVendor(data, result.id).subscribe((response: any) => {
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
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000
    });
  }
}
