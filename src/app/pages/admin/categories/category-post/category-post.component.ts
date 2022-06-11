import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICategories } from 'src/app/models/Categories';
import { CategoryPostService } from 'src/app/services/category-post.service';

@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css']
})
export class CategoryPostComponent implements OnInit {
  categorys!: ICategories[];
  constructor(
    private categoryPostService: CategoryPostService,
    private NzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.onGetAllCategoryPost();
  }

  onGetAllCategoryPost() {
    this.categoryPostService.getAllCategoryPost().subscribe((data) => {
      this.categorys = data;
    })
  }
  cancel(): void {
    this.NzMessageService.info('Click cancel');
  }

  confirm(id: number | string): void {
    this.categoryPostService.removeCategoryPost(id).subscribe(() => {
    this.categorys = this.categorys.filter(item => item.id !== id);
    this.NzMessageService.success('Delete success !');
  })
  }

}
