import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of([
      {id: 1, 'username': 'admin', email: 'admin@bw.com', registeredOn: null },
      {id: 2, 'username': 'user', email: 'user@bw.com', registeredOn: null }
    ]);
  }
}
