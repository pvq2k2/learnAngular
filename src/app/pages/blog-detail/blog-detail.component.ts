import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blog!: IBlog;
  constructor(
    private activateRoute: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    this.blogService.getBlog(id).subscribe(data => {
      this.blog = data
    })
  }

}
