import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/User';

const apiUrl = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(apiUrl);
  }
  getUser(id: number | string): Observable<IUser> {
    return this.http.get<IUser>(`${apiUrl}/${id}`);
  }
  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(apiUrl, user);
  }
  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${apiUrl}/${user.id}`, user);
  }
  removeUser(id: number | string): Observable<IUser> {
    return this.http.delete<IUser>(`${apiUrl}/${id}`);
  }
}
