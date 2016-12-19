import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {IUser} from '../interfaces/user';
import {ILogin} from '../interfaces/login';
import {CanActivate} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  public user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  private users: Array<IUser> = [
    {
      username:'admin',
      token: 'adminadmin',
      email: 'admin@admin.com',
      login_counter: 0
    },
    {
      username:'admin1',
      token: 'adminadmin1',
      email: 'admin1@admin.com',
      login_counter: 0
    },
  ];

  constructor() {
    this.init();
  }

  init(){
    let token = localStorage.getItem('token');
    if (token) {
      let user = this.searchUser(token);
      this.setUser(user);
    }
  }

  setUser(user:IUser){
    this.user.next(user);
    if (!user){
      localStorage.removeItem('token');
    }
  }

  searchUser(token:string):IUser{
    return this.users.filter(user=>user.token===token)[0];
  }

  check(login:ILogin): boolean{
    if (login.username === 'admin' && login.password === 'admin') {
      const token = login.username+login.password;
      const user = this.searchUser(token);
      this.setUser(user);
      localStorage.setItem('token', token);
      return true;
    }
    return false;
  }

  logout(){
    this.setUser(null);
  }

  canActivate():Observable<boolean>{
    return this.user.asObservable().isEmpty();
  }

}
