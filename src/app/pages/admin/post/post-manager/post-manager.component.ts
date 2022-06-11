import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-manager',
  templateUrl: './post-manager.component.html',
  styleUrls: ['./post-manager.component.css']
})
export class PostManagerComponent implements OnInit {

  statusShowDetail: boolean = false;
  posts!: IPost[];
  postDetail!: IPost;

  constructor(
    private postService: PostService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.onGetAllPost();
  }

  onGetAllPost() {
    this.postService.getAllPost().subscribe((data) => {
      this.posts = data;
    })
  }
  onGetProduct(id: number | string) {
    this.statusShowDetail = true;
    this.postService.getPost(id).subscribe((data) => {
      this.postDetail = data;
    })
  }
  cancel(): void {
    this.nzMessageService.info('Click cancel');
  }

  confirm(id: number | string): void {
    this.postService.removePost(id).subscribe(() => {
    this.posts = this.posts.filter(item => item.id !== id);
    this.nzMessageService.success('Delete success !');
  })
  }

}
