import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-active-subscription',
  templateUrl: './active-subscription.component.html',
  styleUrls: ['./active-subscription.component.scss']
})
export class ActiveSubscriptionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'newspaperName', 'newspaperRate', 'contact', 'totalAmount', 'subscribeDate', 'expireDate', 'duration','vendorName','type','agency','vendorAddress'];
  dataSource: any;

  constructor(private subscriptionService:SubscriptionService) { }

  ngOnInit(): void {
    this.tableData();
  }

  tableData() {
    this.subscriptionService.getMySubscriptionForUser(localStorage.getItem('id')).subscribe((response: any) => {
      console.log(response);
      this.dataSource = response;
    }, (error: any) => {
      console.log(error.error?.message);
    })
  }
}
