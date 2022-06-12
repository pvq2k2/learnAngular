import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
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
    email: '',
    password: '12345',
    position: '',
    about: '',
    cv: '',
    img: '',
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
  async uploadImg(event: any) {
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
    const CLOUDINARY_PRESET = "angular";
    const file = event.target.files[0];
    const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", CLOUDINARY_PRESET);

          const response = await axios.post(CLOUDINARY_API, formData, {
              headers: {
                  "Content-Type": "application/form-data",
              },
          });
    this.user.img = response.data.url;
    
  }
  async uploadCV(event: any) {
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
    const CLOUDINARY_PRESET = "angular";
    const file = event.target.files[0];
    console.log(file);
    const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", CLOUDINARY_PRESET);

          const response = await axios.post(CLOUDINARY_API, formData, {
            headers: {
                "Content-Type": "application/form-data",
            },
        });
  this.user.cv = response.data.url;
    
  }
  onSubmitUser() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
        this.userService.getUser(id).subscribe(data => {
          this.user = data
        })
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
