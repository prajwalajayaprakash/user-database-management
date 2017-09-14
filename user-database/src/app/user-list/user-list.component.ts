import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {}
  selectedUser: User;
  users: User[];
    select(user: User): void {
    this.selectedUser = user;
  }
  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }
  ngOnInit(): void {
    this.getUsers();
  }


}
