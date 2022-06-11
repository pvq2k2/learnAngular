import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ICategories } from 'src/app/models/Categories';
import { IPost } from 'src/app/models/Post';
import { CategoryPostService } from 'src/app/services/category-post.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  categorys!: ICategories[];
  date = new Date().toLocaleDateString("vi-VI");
  post: IPost = {
    title: '',
    createAt: this.date,
    categoryPostId: 0,
    short_desc: '',
    description: ''
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService,
    private categoryPostService: CategoryPostService,
    private routes: Router,
    private notification: NzNotificationService ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.getPost(id).subscribe(data => {
        this.post = data
      })
    }
    this.onGetAllCategoryPost();
  }
  onGetAllCategoryPost() {
    this.categoryPostService.getAllCategoryPost().subscribe((data) => {
      this.categorys = data;
    })
  }
  onSubmitPost() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.updatePost(this.post).subscribe(() => {
        this.notification.success('Success','')
        setTimeout(() => {
          this.routes.navigate(['admin/post']);
        }, 2000)
      })
    }
    this.postService.addPost(this.post).subscribe(() => {
      this.notification.success('Success','')
      setTimeout(() => {
        this.routes.navigate(['admin/post']);
      }, 2000)
    });

  }

}
