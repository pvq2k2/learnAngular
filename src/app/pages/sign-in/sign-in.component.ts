import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IUser } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

// Cách 1
  validateForm!: FormGroup;
  submitForm(): void {
    if (this.validateForm.valid) {
      // console.log('submit', this.validateForm.value);
      this.authService.signIn(this.validateForm.value).subscribe(res => {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['']);
        }, 2000)
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private routes: Router,
    private notification: NzNotificationService
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }


// Cách 2
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
  // onSignIn() {
  //   this.authService.signIn(this.user).subscribe(res => {
  //     localStorage.setItem('user', JSON.stringify(res.user));
  //     this.notification.success('Success','')
  //     setTimeout(() => {
  //       this.routes.navigate(['']);
  //     }, 2000)
  //   });
  // }



}
