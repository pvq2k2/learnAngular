import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IBlog } from 'src/app/models/Blog';
import { ICategories } from 'src/app/models/Categories';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  // categorys!: ICategories[];
  date = new Date().toLocaleDateString("vi-VI");
  blog: IBlog = {
    title: '',
    createAt: this.date,
    categoryBlogId: 0,
    short_desc: '',
    description: ''
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private blogService: BlogService,
    // private categoryPostService: CategoryPostService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.blogService.getBlog(id).subscribe(data => {
        this.blog = data
      })
    }
    // this.onGetAllCategoryPost();
  }
  // onGetAllCategoryPost() {
  //   this.categoryPostService.getAllCategoryPost().subscribe((data) => {
  //     this.categorys = data;
  //   })
  // }
  onSubmitBlog() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.blogService.updateBlog(this.blog).subscribe(() => {
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['admin/blog']);
        }, 2000)
      })
    }
    this.blogService.addBlog(this.blog).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['admin/blog']);
      }, 2000)
    });

  }

}
