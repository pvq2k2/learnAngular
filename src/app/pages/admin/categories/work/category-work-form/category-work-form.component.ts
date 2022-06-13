import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ICategories } from 'src/app/models/Categories';
import { CategoryWorkService } from 'src/app/services/category-work.service';

@Component({
  selector: 'app-category-work-form',
  templateUrl: './category-work-form.component.html',
  styleUrls: ['./category-work-form.component.css']
})
export class CategoryWorkFormComponent implements OnInit {

  category: ICategories = {
    name: '',
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryWorkService: CategoryWorkService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryWorkService.getCategoryWork(id).subscribe(data => {
        this.category = data
      })
    }
  }
  onSubmitCategory() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryWorkService.updateCategoryWork(this.category).subscribe(() => {
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['admin/categoty/work']);
        }, 2000)
      })
    }
    this.categoryWorkService.addCategoryWork(this.category).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['admin/category/work']);
      }, 2000)
    });

  }

}
