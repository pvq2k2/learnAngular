import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICategories } from 'src/app/models/Categories';
import { CategoryBlogService } from 'src/app/services/category-blog.service';

@Component({
  selector: 'app-category-blog',
  templateUrl: './category-blog.component.html',
  styleUrls: ['./category-blog.component.css']
})
export class CategoryBlogComponent implements OnInit {

  categorys!: ICategories[];
  constructor(
    private categoryBlogService: CategoryBlogService,
    private NzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.onGetAllCategoryBlog();
  }

  onGetAllCategoryBlog() {
    this.categoryBlogService.getAllCategoryBlog().subscribe((data) => {
      this.categorys = data;
    })
  }
  cancel(): void {
    this.NzMessageService.info('Click cancel');
  }

  confirm(id: number | string): void {
    this.categoryBlogService.removeCategoryBlog(id).subscribe(() => {
    this.categorys = this.categorys.filter(item => item.id !== id);
    this.NzMessageService.success('Delete success !');
  })
  }

}
