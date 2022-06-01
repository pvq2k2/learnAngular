import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IUser } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: IUser = {
    name: '',
    email: '',
    password: ''
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
  }
  onSignUp() {
    this.authService.signUp(this.user).subscribe(() => {
      setTimeout(() => {
        this.notification.success('Success','')
        this.routes.navigate(['signin']);
      }, 2000)
    });
  }
}
