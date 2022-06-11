import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/Post';

const apiUrl = 'http://localhost:3000/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }
  
  getAllPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>(apiUrl);
  }

  getPost(id: string | number): Observable<IPost> {
    return this.http.get<IPost>(`${apiUrl}/${id}`);
  }

  addPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(apiUrl, post);
  }

  updatePost(post: IPost): Observable<IPost> {
    return this.http.put<IPost>(`${apiUrl}/${post.id}`, post);
  }

  removePost(id: number | string): Observable<IPost> {
    return this.http.delete<IPost>(`${apiUrl}/${id}`);
  }
}
