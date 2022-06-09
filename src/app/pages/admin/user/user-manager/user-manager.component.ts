import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  statusShowDetail: boolean = false;
  users!: IUser[];
  userDetail!: IUser;

  constructor(
    private userService: UserService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.onGetAllUsers();
  }

  onGetAllUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    })
  }
  onGetProduct(id: number | string) {
    this.statusShowDetail = true;
    this.userService.getUser(id).subscribe((data) => {
      this.userDetail = data;
    })
  }
  cancel(): void {
    this.nzMessageService.info('Click cancel');
  }

  confirm(id: number | string): void {
    this.userService.removeUser(id).subscribe(() => {
    this.users = this.users.filter(item => item.id !== id);
    this.nzMessageService.success('Delete success !');
  })
  }
}
