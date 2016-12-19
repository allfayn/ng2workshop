import { Component } from '@angular/core';
import {AuthService} from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  title1() {
    return 'App Work too!';
  }
  constructor(public authService: AuthService){
    this.authService.user.asObservable().subscribe(
      user => console.log(user)
    )
  }

  logout(isLogout:boolean){
    if (isLogout){
      this.authService.logout();
    }
  }

}
