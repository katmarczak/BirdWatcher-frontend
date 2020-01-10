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
  loginData: LoginData = { email: '', password: ''};
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(): void {
    this.authService.login(this.loginData).subscribe(
      (data) => {
        console.log(data);
        this.saveToLocalStorage(data);
        this.authService.setIsLogged(true);
        this.router.navigateByUrl('/');
      }, 
      (httpError) => {
        console.error(httpError);
        this.error = httpError.error;
      });
  }

  private saveToLocalStorage(data): void {
    localStorage.setItem('jwt-token', data.token);
    localStorage.setItem('username', data.user.username);
    localStorage.setItem('userId', data.user._id);
  }

}
