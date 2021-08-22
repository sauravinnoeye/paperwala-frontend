import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewspaperService } from 'src/app/services/newspaper.service';

@Component({
  selector: 'app-view-newspaper-dialog',
  templateUrl: './view-newspaper-dialog.component.html',
  styleUrls: ['./view-newspaper-dialog.component.scss']
})
export class ViewNewspaperDialogComponent implements OnInit {
  local_data: any;
  data1: any;
  updateData: any;
  displayedColumns: string[] = ['newspaperId', 'newspaperName', 'newspaperRate', 'action'];
  dataSource: any;
  responseMessage: any;
  id:any;
  constructor(public dialogRef: MatDialogRef<ViewNewspaperDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private newspaperService: NewspaperService) {
    this.local_data = { ...data };
    console.log(this.local_data);
    this.tableData();
  }

  ngOnInit(): void {
  }

  doAction(value:any) {
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
}
