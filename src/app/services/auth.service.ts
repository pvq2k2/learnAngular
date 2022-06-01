import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/User';

const apiUrl = 'http://localhost:3000';


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor ( private http: HttpClient) {}

    signIn(user: IUser): Observable<IUser> {
        return this.http.post<IUser>(`${apiUrl}/signin`, user);
    }

    signUp(user: IUser): Observable<IUser> {
      return this.http.post<IUser>(`${apiUrl}/user/signup`, user);
  }
}