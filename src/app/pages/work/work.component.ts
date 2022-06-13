import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  projects!: IProject[];
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.onGetALlProject();
  }
  onGetALlProject() {
    this.projectService.getAllProject().subscribe((data) => {
      this.projects = data
    })
  }

}
