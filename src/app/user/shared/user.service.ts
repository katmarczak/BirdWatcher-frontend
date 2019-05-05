import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { RegistrationData } from '../register/registrationData.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.url+'/'+id);
  }

  registerUser(registrationData: RegistrationData) {
    return this.http.post(this.url, registrationData, { headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }
}
