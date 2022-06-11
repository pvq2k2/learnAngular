import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ICategories } from 'src/app/models/Categories';
import { CategoryPostService } from 'src/app/services/category-post.service';

@Component({
  selector: 'app-category-post-form',
  templateUrl: './category-post-form.component.html',
  styleUrls: ['./category-post-form.component.css']
})
export class CategoryPostFormComponent implements OnInit {

  category: ICategories = {
    name: '',
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryPostService: CategoryPostService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryPostService.getCategoryPost(id).subscribe(data => {
        this.category = data
      })
    }
  }
  onSubmitCategory() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryPostService.updateCategoryPost(this.category).subscribe(() => {
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['admin/categoty/post']);
        }, 2000)
      })
    }
    this.categoryPostService.addCategoryPost(this.category).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['admin/category/post']);
      }, 2000)
    });

  }

}
