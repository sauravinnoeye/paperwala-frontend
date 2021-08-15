import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paperwala-frontend';
  loading$ = this.loader.loading$;
  constructor(private loader: LoadingService) { }
}
