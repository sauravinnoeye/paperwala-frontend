import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewspaperService } from 'src/app/services/newspaper.service';
import { AddNewNewspaperDialogComponent } from '../dialog/add-new-newspaper-dialog/add-new-newspaper-dialog.component';
import { EditNewspaperDialogComponent } from '../dialog/edit-newspaper-dialog/edit-newspaper-dialog.component';
import { newspaperData } from '../../Shared/events.data';
const ELEMENT_DATA: newspaperData[] = [
  { id: 1, newspaperName: 'Hydrogen', newspaperRate: '1.0079' },
];
@Component({
  selector: 'app-manage-newspaper',
  templateUrl: './manage-newspaper.component.html',
  styleUrls: ['./manage-newspaper.component.scss']
})
export class ManageNewspaperComponent implements OnInit {
  displayedColumns: string[] = ['newspaperId', 'newspaperName', 'newspaperRate', 'action'];
  dataSource: any;
  responseMessage: any;
  id: any;

  constructor(public dialog: MatDialog,
    private newspaperService: NewspaperService,
    private _snackBar: MatSnackBar) {
    this.id = localStorage.getItem('id');
    this.tableData();
  }

  ngOnInit(): void {
  }

  tableData() {
    this.newspaperService.getNewspapers(this.id).subscribe((response: any) => {
      console.log(response);
      this.dataSource = response;
    }, (error: any) => {
      console.log(error.error?.message);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddNewNewspaperDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event !== 'Cancel' && result !== undefined && result !== '') {
        var data = {
          newspaperName: result.newspaperName,
          vendor: this.id,
          newspaperRate: result.newspaperRate
        };
        this.newspaperService.addNewspaper(data).subscribe((response: any) => {
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
    const dialogRef = this.dialog.open(EditNewspaperDialogComponent, {
      width: '800px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result?.event !== 'Cancel' && result !== undefined && result !== '') {
        var data = {
          newspaperName: result.newspaperName,
          newspaperRate: result.newspaperRate
        };
        this.newspaperService.updateNewspaper(data, result.newspaperId).subscribe((response: any) => {
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
      this.newspaperService.deleteNewspaper(obj).subscribe((response: any) => {
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
