import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../user/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userId: string;
  username: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() { 
    this.userId = localStorage.getItem('userId');
    this.username = localStorage.getItem('username');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  toProfilePage(): void {
    this.router.navigate(['/users', this.userId]);
  }

}
