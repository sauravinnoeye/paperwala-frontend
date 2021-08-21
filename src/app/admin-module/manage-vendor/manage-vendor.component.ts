import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewVendorDialogComponent } from '../dialog/add-new-vendor-dialog/add-new-vendor-dialog.component';
import { EditVendorDialogComponent } from '../dialog/edit-vendor-dialog/edit-vendor-dialog.component';
import { VendorForUpdateData } from '../../Shared/events.data';
const ELEMENT_DATA: VendorForUpdateData[] = [
  { Id: "1", vendorName: 'Saurav kumar', type: 'type', agency: 'Agency', contact: '1234567890', uniqueId: 'UI123', vendoraddress: 'India', username: 'gaurav', password: '123456' },
  { Id: "2", vendorName: 'Gaurav kumar', type: 'type', agency: 'Agency', contact: '1234567890', uniqueId: 'UI123', vendoraddress: 'India', username: 'gaurav', password: '123456' },
];
@Component({
  selector: 'app-manage-vendor',
  templateUrl: './manage-vendor.component.html',
  styleUrls: ['./manage-vendor.component.scss']
})
export class ManageVendorComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'vendorName', 'type', 'agency', 'contact', 'uniqueId', 'vendoraddress', 'username', 'password', 'action'];
  dataSource: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = ELEMENT_DATA;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddNewVendorDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    });
  }

  openEditDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(EditVendorDialogComponent, {
      width: '800px',
      data: obj
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result.event == 'Update') {
    //     this.updateRowData(result.data);
    //   } else if (result.event == 'Delete') {
    //     this.deleteRowData(result.data);
    //   }
    // });
    // console.log(obj)
  }

  delete(obj: any) {
    console.log(obj);
  }

}
