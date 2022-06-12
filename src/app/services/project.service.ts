import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/Project';

const apiUrl = 'http://localhost:3000/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAllProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>(apiUrl);
  }
  getProjectLimit(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${apiUrl}&_limit=3`)
  }
  getProject(id: number | string): Observable<IProject> {
    return this.http.get<IProject>(`${apiUrl}/${id}`);
  }

  addProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(apiUrl, project);
  }

  updateProject(project: IProject): Observable<IProject> {
    return this.http.put<IProject>(`${apiUrl}/${project.id}`, project);
  }

  removeProject(id: number | string): Observable<IProject> {
    return this.http.delete<IProject>(`${apiUrl}/${id}`);
  }
}
