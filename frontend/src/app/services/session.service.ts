import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  loggedIn = false;
  user: User;

  constructor() { }

  /**
   * check user logged in or not
   */
  isLoggedIn(): boolean {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    this.loggedIn = (loggedIn === 'true');
    return this.loggedIn;
  }

  /**
   * set user logged or not (true or false)
   * @param isLoggedIn
   */
  setLoggedIn( isLoggedIn: boolean): void {
    this.loggedIn = isLoggedIn;
    sessionStorage.setItem('isLoggedIn', this.loggedIn.toString());
  }

  /**
   * @param user set user object
   * only string can be stored; must stringify the object
   */
  setUser(user: User): void {
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }

  /**
   * get user from storage, need parse into objeect
   */
  getUser(): User {
    const user = sessionStorage.getItem('user');
    this.user = JSON.parse(user);
    return this.user;
  }

}
