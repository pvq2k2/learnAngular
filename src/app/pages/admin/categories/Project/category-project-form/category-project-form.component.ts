import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ICategories } from 'src/app/models/Categories';
import { CategoryProjectService } from 'src/app/services/category-project.service';

@Component({
  selector: 'app-category-project-form',
  templateUrl: './category-project-form.component.html',
  styleUrls: ['./category-project-form.component.css']
})
export class CategoryProjectFormComponent implements OnInit {

  category: ICategories = {
    name: '',
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryProjectService: CategoryProjectService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryProjectService.getCategoryProject(id).subscribe(data => {
        this.category = data
      })
    }
  }
  onSubmitCategory() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryProjectService.updateCategoryProject(this.category).subscribe(() => {
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['admin/categoty/project']);
        }, 2000)
      })
    }
    this.categoryProjectService.addCategoryProject(this.category).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['admin/category/project']);
      }, 2000)
    });

  }

}
