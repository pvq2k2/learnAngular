import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories } from '../models/Categories';

const apiUrl = 'http://localhost:3000/categoryproject'

@Injectable({
  providedIn: 'root'
})
export class CategoryProjectService {

  constructor(private http: HttpClient) { }

  getAllCategoryProject(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(apiUrl);
  }

  getCategoryProject(id: number | string): Observable<ICategories> {
    return this.http.get<ICategories>(`${apiUrl}/${id}?_embed=project`);
  }

  addCategoryProject(category: ICategories): Observable<ICategories> {
    return this.http.post<ICategories>(apiUrl, category);
  }

  updateCategoryProject(category: ICategories): Observable<ICategories> {
    return this.http.put<ICategories>(`${apiUrl}/${category.id}`, category);
  }

  removeCategoryProject(id: number | string): Observable<ICategories> {
    return this.http.delete<ICategories>(`${apiUrl}/${id}`);
  }
}
