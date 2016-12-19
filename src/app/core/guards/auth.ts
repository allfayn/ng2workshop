import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class GuardAuthService implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}

  canActivate():Observable<boolean>{
    return this.authService.user.asObservable().map(user=>!!user)
      .do(status=> {
          if(!status) {
            this.router.navigate(['login'])
          }
        }
      );
  }
}
