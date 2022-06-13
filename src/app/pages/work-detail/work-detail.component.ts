import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWork } from 'src/app/models/Work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  work!: IWork;
  constructor(
    private activateRoute: ActivatedRoute,
    private workService: WorkService,
  ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    this.workService.getWork(id).subscribe(data => {
      this.work = data
    })
  }

}
