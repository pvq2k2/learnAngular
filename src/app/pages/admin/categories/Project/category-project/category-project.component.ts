import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICategories } from 'src/app/models/Categories';
import { CategoryProjectService } from 'src/app/services/category-project.service';

@Component({
  selector: 'app-category-project',
  templateUrl: './category-project.component.html',
  styleUrls: ['./category-project.component.css']
})
export class CategoryProjectComponent implements OnInit {

  categorys!: ICategories[];
  constructor(
    private categoryProjectService: CategoryProjectService,
    private NzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.onGetAllCategoryProject();
  }

  onGetAllCategoryProject() {
    this.categoryProjectService.getAllCategoryProject().subscribe((data) => {
      this.categorys = data;
    })
  }
  cancel(): void {
    this.NzMessageService.info('Click cancel');
  }

  confirm(id: number | string): void {
    this.categoryProjectService.removeCategoryProject(id).subscribe(() => {
    this.categorys = this.categorys.filter(item => item.id !== id);
    this.NzMessageService.success('Delete success !');
  })
  }

}
