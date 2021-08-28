import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-my-subscription',
  templateUrl: './my-subscription.component.html',
  styleUrls: ['./my-subscription.component.scss']
})
export class MySubscriptionComponent implements OnInit {
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
