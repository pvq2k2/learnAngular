import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ICategories } from 'src/app/models/Categories';
import { IProject } from 'src/app/models/Project';
import { CategoryProjectService } from 'src/app/services/category-project.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  categorys!: ICategories[];
  date = new Date().getFullYear();
  project: IProject = {
    name: '',
    image: '',
    createAt: this.date,
    categoryProjectId: 0,
    short_desc: '',
    description: ''
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private projectService: ProjectService,
    private categoryProjectService: CategoryProjectService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.projectService.getProject(id).subscribe(data => {
        this.project = data
      })
    }
    this.onGetAllCategoryProject();
  }
  onGetAllCategoryProject() {
    this.categoryProjectService.getAllCategoryProject().subscribe((data) => {
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
    this.project.image = response.data.url;
  }
  onSubmitProject() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.projectService.updateProject(this.project).subscribe(() => {
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['admin/project']);
        }, 2000)
      })
    }
    this.projectService.addProject(this.project).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['admin/project']);
      }, 2000)
    });

  }

}
