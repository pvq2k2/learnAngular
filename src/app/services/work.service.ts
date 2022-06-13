import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWork } from '../models/Work';

const apiUrl = 'http://localhost:3000/works';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  constructor(private http: HttpClient) {}

  getAllWork(): Observable<IWork[]> {
    return this.http.get<IWork[]>(`${apiUrl}?_expand=category`);
  }

  getWork(id: number | string): Observable<IWork> {
    return this.http.get<IWork>(`${apiUrl}/${id}?_expand=category`);
  }

  getWorkLimit(): Observable<IWork[]> {
    return this.http.get<IWork[]>(`${apiUrl}?_limit=3`)
  }

  addWork(work: IWork): Observable<IWork> {
    return this.http.post<IWork>(apiUrl, work);
  }

  updateWork(work: IWork): Observable<IWork> {
    return this.http.put<IWork>(`${apiUrl}/${work.id}`, work);
  }

  removeWork(id: number | string): Observable<IWork> {
    return this.http.delete<IWork>(`${apiUrl}/${id}`);
  }
}
