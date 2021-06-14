import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserDto } from 'src/app/models/UserDto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  usersDto: UserDto[] = [];

  constructor(
    private userService:UserService,
    private toastrService:ToastrService,
  ) { }

  ngOnInit(): void {
  }
  
  getAllUsers(){
    this.userService.getAll().subscribe((response) => {
      this.users = response.data;
    });
  }

  getAllUsersDto(){
    this.userService.getAllDto().subscribe((response) => {
      this.usersDto = response.data;
    });
  }
  
}
