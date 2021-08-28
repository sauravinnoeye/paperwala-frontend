import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewVendorDialogComponent } from '../dialog/add-new-vendor-dialog/add-new-vendor-dialog.component';
import { EditVendorDialogComponent } from '../dialog/edit-vendor-dialog/edit-vendor-dialog.component';
import { VendorForUpdateData } from '../../Shared/events.data';
import { VendorService } from '../../services/vendor.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-manage-vendor',
  templateUrl: './manage-vendor.component.html',
  styleUrls: ['./manage-vendor.component.scss']
})
export class ManageVendorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'vendorName', 'type', 'agency', 'contact', 'uniqueId', 'vendorAddress', 'userName', 'password', 'action'];
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

  openDialog() {
    const dialogRef = this.dialog.open(AddNewVendorDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event !== 'Cancel' && result !== undefined && result !== '') {
        var data = {
          vendorName: result.vendorName,
          type: result.type,
          agency: result.agency,
          contact: result.contact,
          uniqueId: result.uniqueId,
          vendorAddress: result.vendoraddress,
          userName: result.username,
          password: result.password
        };
        this.vendorService.addVendor(data).subscribe((response: any) => {
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

  openEditDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(EditVendorDialogComponent, {
      width: '800px',
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

  delete(obj: any) {
    if (confirm("Are you sure you want to delete?")) {
      this.vendorService.deleteVendor(obj).subscribe((response: any) => {
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

}
