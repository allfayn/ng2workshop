import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {AuthService} from './services/auth.service';
import {GuardGuestService} from './guards/guest';
import {GuardAuthService} from './guards/auth';
import {AuthProviders, AuthMethods, AngularFireModule} from 'angularfire2';
import {ItemsService} from './services/items.service';
import {HttpModule} from '@angular/http';


export const firebaseConfig = {
  apiKey: "AIzaSyANLJw4wOu8ZLqvDI9KxvZZ_3DQv2g1-A0",
  authDomain: "most-training.firebaseapp.com",
  databaseURL: "https://most-training.firebaseio.com",
  storageBucket: "most-training.appspot.com",
  messagingSenderId: "124279241038"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [AuthService, GuardGuestService, GuardAuthService, ItemsService],
  declarations: [CoreComponent]
})
export class CoreModule { }
