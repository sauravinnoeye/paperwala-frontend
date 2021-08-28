import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-expired-subscription',
  templateUrl: './expired-subscription.component.html',
  styleUrls: ['./expired-subscription.component.scss']
})
export class ExpiredSubscriptionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'newspaperName', 'newspaperRate','userName', 'contact','address', 'totalAmount', 'subscribeDate', 'expireDate', 'duration'];
  dataSource: any;

  constructor(private subscriptionService:SubscriptionService) { }

  ngOnInit(): void {
    this.tableData();
  }

  tableData() {
    this.subscriptionService.getExpiredSubscriptionForVendor(localStorage.getItem('id')).subscribe((response: any) => {
      console.log(response);
      this.dataSource = response;
    }, (error: any) => {
      console.log(error.error?.message);
    })
  }
}
