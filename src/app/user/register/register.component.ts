import { Component, OnInit } from '@angular/core';
import { RegistrationData } from './registrationData.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationData: RegistrationData = { email: '', username: '', password: ''};
  error = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  isInputDataValid() {
    const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const usernameRegex = /^[a-zA-Z0-9]{3,32}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const isValid = emailRegexp.test(this.registrationData.email) && usernameRegex.test(this.registrationData.username) && passwordRegex.test(this.registrationData.password);
    return isValid;
  }

  onSubmit(): void {
    if(!this.isInputDataValid()) {
      this.error = 'Niepoprawne dane';
      return;
    }

    this.userService.registerUser(this.registrationData).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/login');
      },
      (error) => {
        this.error = error;
        console.error(error);
      }
    );
  }

}
