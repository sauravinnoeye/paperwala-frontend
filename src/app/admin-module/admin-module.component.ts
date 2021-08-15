import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.scss']
})
export class AdminModuleComponent implements OnInit {

  loading$ = this.loader.loading$;
  constructor(private loader: LoadingService) { }

  ngOnInit(): void {
  }

}
