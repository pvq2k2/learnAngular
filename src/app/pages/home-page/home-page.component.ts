import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/Blog';
import { IUser } from 'src/app/models/User';
import { IWork } from 'src/app/models/Work';
import { BlogService } from 'src/app/services/blog.service';
import { WorkService } from 'src/app/services/work.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: IUser = JSON.parse(localStorage.getItem('user')!);
  blogs!: IBlog[];
  works!: IWork[];
  constructor(
    private blogService: BlogService,
    private workService: WorkService
  ) { }

  ngOnInit(): void {
    this.onGetBlogLimit();
    this.onGetWorkLimit();
  }
  onGetBlogLimit() {
    this.blogService.getBlogLimit().subscribe((data) => {
      this.blogs = data
    })
  }
  onGetWorkLimit(){
    this.workService.getWorkLimit().subscribe((data) => {
      this.works = data
    })
  }

}
