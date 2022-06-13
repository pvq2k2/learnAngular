import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts!: IPost[];
  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.onGetAllPost();
  }
  onGetAllPost() {
    this.postService.getAllPost().subscribe(data => {
      this.posts = data
    })
  }
}
