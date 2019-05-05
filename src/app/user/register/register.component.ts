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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.userService.registerUser(this.registrationData).subscribe(
      (data) => {
        console.log('Successfully registered user:');
        console.log(data);
        this.router.navigateByUrl('/login');
      },
      (error) => console.log(error)
    );
  }

}
