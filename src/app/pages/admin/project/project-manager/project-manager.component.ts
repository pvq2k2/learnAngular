import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IProject } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  statusShowDetail: boolean = false;
  projects!: IProject[];
  projectDetail!: IProject;

  constructor(
    private projectService: ProjectService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.onGetAllProject();
  }

  onGetAllProject() {
    this.projectService.getAllProject().subscribe((data) => {
      this.projects = data;
    })
  }
  onGetProduct(id: number | string) {
    this.statusShowDetail = true;
    this.projectService.getProject(id).subscribe((data) => {
      this.projectDetail = data;
    })
  }
  cancel(): void {
    this.nzMessageService.info('Click cancel');
  }

  confirm(id: number | string): void {
    this.projectService.removeProject(id).subscribe(() => {
    this.projects = this.projects.filter(item => item.id !== id);
    this.nzMessageService.success('Delete success !');
  })
  }

}
