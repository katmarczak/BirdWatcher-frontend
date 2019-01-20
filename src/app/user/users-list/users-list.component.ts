import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;

  constructor() {
    this.users = [
      { username: 'admin' },
      { username: 'mod1' },
      { username: 'mod2' },
      { username: 'someone' }
    ];
  }

  ngOnInit() {
  }

}
