import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IBlog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-manager',
  templateUrl: './blog-manager.component.html',
  styleUrls: ['./blog-manager.component.css']
})
export class BlogManagerComponent implements OnInit {


  statusShowDetail: boolean = false;
  blogs!: IBlog[];
  blogDetail!: IBlog;

  constructor(
    private blogService: BlogService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.onGetAllBlog();
  }

  onGetAllBlog() {
    this.blogService.getAllBlogs().subscribe((data) => {
      this.blogs = data;
    })
  }
  onGetProduct(id: number | string) {
    this.statusShowDetail = true;
    this.blogService.getBlog(id).subscribe((data) => {
      this.blogDetail = data;
    })
  }
  cancel(): void {
    this.nzMessageService.info('Click cancel');
  }

  confirm(id: number | string): void {
    this.blogService.removeBlog(id).subscribe(() => {
    this.blogs = this.blogs.filter(item => item.id !== id);
    this.nzMessageService.success('Delete success !');
  })
  }

}
