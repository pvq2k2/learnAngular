import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories } from '../models/Categories';

const apiUrl = 'http://localhost:3000/categoryBlogs'

@Injectable({
  providedIn: 'root'
})
export class CategoryBlogService {

  constructor(private http: HttpClient) { }

  getAllCategoryBlog(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(apiUrl);
  }

  getCategoryBlog(id: number | string): Observable<any> {
    return this.http.get(`${apiUrl}/${id}?_embed=blogs`);
  }

  addCategoryBlog(category: ICategories): Observable<ICategories> {
    return this.http.post<ICategories>(apiUrl, category);
  }

  updateCategoryBlog(category: ICategories): Observable<ICategories> {
    return this.http.put<ICategories>(`${apiUrl}/${category.id}`, category);
  }

  removeCategoryBlog(id: number | string): Observable<ICategories> {
    return this.http.delete<ICategories>(`${apiUrl}/${id}`);
  }
}
