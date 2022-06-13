import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IWork } from 'src/app/models/Work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-manager',
  templateUrl: './work-manager.component.html',
  styleUrls: ['./work-manager.component.css']
})
export class WorkManagerComponent implements OnInit {

  statusShowDetail: boolean = false;
  works!: IWork[];
  workDetail!: IWork;

  constructor(
    private workService: WorkService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.onGetAllWork();
  }

  onGetAllWork() {
    this.workService.getAllWork().subscribe((data) => {
      this.works = data;
    })
  }
  onGetProduct(id: number | string) {
    this.statusShowDetail = true;
    this.workService.getWork(id).subscribe((data) => {
      this.workDetail = data;
    })
  }
  cancel(): void {
    this.nzMessageService.info('Click cancel');
  }

  confirm(id: number | string): void {
    this.workService.removeWork(id).subscribe(() => {
    this.works = this.works.filter(item => item.id !== id);
    this.nzMessageService.success('Delete success !');
  })
  }


}
