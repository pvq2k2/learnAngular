import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Post';
import { IProject } from 'src/app/models/Project';
import { IUser } from 'src/app/models/User';
import { PostService } from 'src/app/services/post.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: IUser = JSON.parse(localStorage.getItem('user')!);
  posts!: IPost[];
  projects!: IProject[];
  constructor(
    private postService: PostService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.onGetPost();
    this.onGetProject();
  }
  onGetPost() {
    this.postService.getPostLimit().subscribe((data) => {
      this.posts = data
    })
  }
  onGetProject(){
    this.projectService.getProjectLimit().subscribe((data) => {
      this.projects = data
    })
  }

}
