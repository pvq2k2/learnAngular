import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryWorkService } from 'src/app/services/category-work.service';

@Component({
  selector: 'app-work-category-detail',
  templateUrl: './work-category-detail.component.html',
  styleUrls: ['./work-category-detail.component.css']
})
export class WorkCategoryDetailComponent implements OnInit {

  categoryDetail: any;
  cateName: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private categoryWorkService: CategoryWorkService,) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryWorkService.getCategoryWork(id).subscribe(data => {
        this.cateName = data
        this.categoryDetail = data.works;
        
      })
    }
  }

}
