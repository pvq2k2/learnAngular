import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ICategories } from 'src/app/models/Categories';
import { IWork } from 'src/app/models/Work';
import { CategoryWorkService } from 'src/app/services/category-work.service';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent implements OnInit {
  categorys!: ICategories[];
  date = new Date().getFullYear();
  work: IWork = {
    name: '',
    image: '',
    createAt: this.date,
    categoryId: 0,
    short_desc: '',
    description: ''
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private workService: WorkService,
    private categoryWorkService: CategoryWorkService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.workService.getWork(id).subscribe(data => {
        this.work = data
      })
    }
    this.onGetAllCategoryWork();
  }
  onGetAllCategoryWork() {
    this.categoryWorkService.getAllCategoryWork().subscribe((data) => {
      this.categorys = data;
    })
  }
  async uploadImg(event: any) {
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
    const CLOUDINARY_PRESET = "angular";
    const file = event.target.files[0];
    // console.log(event.target.files);
    
    const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", CLOUDINARY_PRESET);

          const response = await axios.post(CLOUDINARY_API, formData, {
              headers: {
                  "Content-Type": "application/form-data",
              },
          });
    this.work.image = response.data.url;
  }
  onSubmitWork() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.workService.updateWork(this.work).subscribe(() => {
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['admin/work']);
        }, 2000)
      })
    }
    this.work.categoryId = Number(this.work.categoryId);
    this.workService.addWork(this.work).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['admin/work']);
      }, 2000)
    });

  }

}
