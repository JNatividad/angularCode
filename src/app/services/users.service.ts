import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://reqres.in/api/users';

  getUsers(): Observable<[Users]> {
    return this.http.get<[Users]>(this.API_URL);
  }

  getOne(id: any): Observable<Users> {
    return this.http.get<Users>(`${this.API_URL}/${id}`);
  }
}
