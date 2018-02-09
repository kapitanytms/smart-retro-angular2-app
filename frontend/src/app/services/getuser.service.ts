import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetUserService {

  constructor(private http: Http) { }

  users: User[];
  private usersUrl = 'http://localhost:8080/api/users';
  private headers = new Headers({'Content-Type': 'application/json'});

  getUsers() {
    return this.http.get(this.usersUrl)
      .map(res => res.json());
  }

  login(users: User[], username: string, password: string): User {
    for ( let i = 0; i < users.length; i++ ) {
        if ( username === users[i].username && users[i].password === password ) {
          return users[i];
        }
    }
    // return null;
  }
}
