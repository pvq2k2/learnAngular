import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories } from '../models/Categories';

const apiUrl = 'http://localhost:3000/categories'

@Injectable({
  providedIn: 'root'
})
export class CategoryWorkService {

  constructor(private http: HttpClient) { }

  getAllCategoryWork(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(apiUrl);
  }

  getCategoryWork(id: number | string): Observable<ICategories> {
    return this.http.get<ICategories>(`${apiUrl}/${id}?_embed=works`);
  }

  addCategoryWork(category: ICategories): Observable<ICategories> {
    return this.http.post<ICategories>(apiUrl, category);
  }

  updateCategoryWork(category: ICategories): Observable<ICategories> {
    return this.http.put<ICategories>(`${apiUrl}/${category.id}`, category);
  }

  removeCategoryWork(id: number | string): Observable<ICategories> {
    return this.http.delete<ICategories>(`${apiUrl}/${id}`);
  }
}
