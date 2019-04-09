import { Component, OnInit } from '@angular/core';
import { LoginData } from './loginData.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: LoginData = { 'email': '', 'password': ''};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(): void {
    this.authService.login(this.loginData).subscribe(
      (token) => {
        console.log(token);
        this.saveToken(token);
        this.authService.setIsLogged(true);
        this.router.navigateByUrl('/');
      }, 
      (error) => console.log(error));
  }

  private saveToken(token: string): void {
    localStorage.setItem('jwt-token', token);
  }

}
