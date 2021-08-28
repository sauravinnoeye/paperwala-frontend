import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: any;

  constructor(private router: Router) {
    this.userName = localStorage.getItem('userName');
  }

  ngOnInit(): void {
  }

  logout() {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

}
