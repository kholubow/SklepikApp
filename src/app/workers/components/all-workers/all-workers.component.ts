import { UserService } from './../../../shared/services/user.service';
import { User } from './../../../shared/models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {
BgAllWorkers: string;
users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.BgAllWorkers = 'assets/images/BGsignin2.jpg';
    this.loadUsers();

  }


  loadUsers() {

    var alertify = require('alertifyjs/build/alertify.js');
    this.userService.getUsers().subscribe((users: User[]) => {

        this.users = users;

    }, error => {

        alertify.error(error);

    });
  }

}
