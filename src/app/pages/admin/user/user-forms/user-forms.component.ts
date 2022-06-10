import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css']
})
export class UserFormsComponent implements OnInit {
  user: IUser = {
    name: '',
    password: '12345',
    email: '',
    position: '',
    about: ''
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.userService.getUser(id).subscribe(data => {
        this.user = data
      })
    }
  }
  onSubmitUser() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['admin/user']);
        }, 2000)
      })
    }
    this.userService.addUser(this.user).subscribe(() => {
      this.notification.success('Success','');
      setTimeout(() => {
        this.routes.navigate(['admin/user']);
      }, 2000)
    });

  }
}
