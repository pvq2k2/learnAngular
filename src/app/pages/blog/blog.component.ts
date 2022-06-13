import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs!: IBlog[];
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.onGetAllBlog();
  }
  onGetAllBlog() {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogs = data
    })
  }
}
