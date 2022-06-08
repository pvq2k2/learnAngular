import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      // console.log('submit', this.validateForm.value);
      this.authService.signUp(this.validateForm.value).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['signin']);
      }, 2000)
    });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private routes: Router,
    private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  //Cách 2
  // user: IUser = {
  //   name: '',
  //   email: '',
  //   password: ''
  // };
  // constructor(
  //   private activateRoute: ActivatedRoute,
  //   private authService: AuthService,
  //   private routes: Router,
  //   private notification: NzNotificationService ) { }

  // ngOnInit(): void {
  // }
  // onSignUp() {
  //   this.authService.signUp(this.user).subscribe(() => {
  //     setTimeout(() => {
  //       this.notification.success('Success','')
  //       this.routes.navigate(['signin']);
  //     }, 2000)
  //   });
  // }
}
