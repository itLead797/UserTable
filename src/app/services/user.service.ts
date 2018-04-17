import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { User } from './user.model';

@Injectable()
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }


}
