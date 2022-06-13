import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ICategories } from 'src/app/models/Categories';
import { CategoryBlogService } from 'src/app/services/category-blog.service';

@Component({
  selector: 'app-category-blog-form',
  templateUrl: './category-blog-form.component.html',
  styleUrls: ['./category-blog-form.component.css']
})
export class CategoryBlogFormComponent implements OnInit {

  category: ICategories = {
    name: '',
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryBlogService: CategoryBlogService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryBlogService.getCategoryBlog(id).subscribe(data => {
        this.category = data
      })
    }
  }
  onSubmitCategory() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryBlogService.updateCategoryBlog(this.category).subscribe(() => {
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['admin/categoty/blog']);
        }, 2000)
      })
    }
    this.categoryBlogService.addCategoryBlog(this.category).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['admin/category/blog']);
      }, 2000)
    });

  }

}
