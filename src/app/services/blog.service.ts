import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from '../models/Blog';

const apiUrl = 'http://localhost:3000/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  
  getAllBlogs ():Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${apiUrl}?_expand=categoryBlog`)
  };

  getBlog (id: string | number):Observable<IBlog> {
    return this.http.get<IBlog>(`${apiUrl}/${id}?_expand=categoryBlog`) 
  };

  addBlog (blog: IBlog):Observable<IBlog> {
    return this.http.post<IBlog>(apiUrl, blog)
  };

  updateBlog (blog: IBlog):Observable<IBlog> {
    return this.http.put<IBlog>(`${apiUrl}/${blog.id}`, blog)
  };

  removeBlog (id: string | number):Observable<IBlog> {
    return this.http.delete<IBlog>(`${apiUrl}/${id}`)
  }
}
