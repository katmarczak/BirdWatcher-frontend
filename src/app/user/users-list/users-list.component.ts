import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;

  constructor(private userService: UserService) { }

  getUsers():void { this.userService.getUsers().subscribe(users => this.users = users); }

  ngOnInit() { this.getUsers(); }

}
