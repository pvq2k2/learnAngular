import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICategories } from 'src/app/models/Categories';
import { CategoryWorkService } from 'src/app/services/category-work.service';

@Component({
  selector: 'app-category-work',
  templateUrl: './category-work.component.html',
  styleUrls: ['./category-work.component.css']
})
export class CategoryWorkComponent implements OnInit {


  categorys!: ICategories[];
  constructor(
    private categoryWorkService: CategoryWorkService,
    private NzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.onGetAllCategoryWork();
  }

  onGetAllCategoryWork() {
    this.categoryWorkService.getAllCategoryWork().subscribe((data) => {
      this.categorys = data;
    })
  }
  cancel(): void {
    this.NzMessageService.info('Click cancel');
  }

  confirm(id: number | string): void {
    this.categoryWorkService.removeCategoryWork(id).subscribe(() => {
    this.categorys = this.categorys.filter(item => item.id !== id);
    this.NzMessageService.success('Delete success !');
  })
  }

}
