import { Component, OnInit } from '@angular/core';
import { IWork } from 'src/app/models/Work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  works!: IWork[];
  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.onGetAllWork();
  }
  onGetAllWork() {
    this.workService.getAllWork().subscribe((data) => {
      this.works = data
    })
  }

}
