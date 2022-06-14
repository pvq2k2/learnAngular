import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryBlogService } from 'src/app/services/category-blog.service';

@Component({
  selector: 'app-blog-category-detail',
  templateUrl: './blog-category-detail.component.html',
  styleUrls: ['./blog-category-detail.component.css']
})
export class BlogCategoryDetailComponent implements OnInit {
  categoryDetail: any;
  cateName: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryBlogService: CategoryBlogService,) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryBlogService.getCategoryBlog(id).subscribe(data => {
        this.cateName = data
        this.categoryDetail = data.blogs;
        
      })
    }
  }

}
