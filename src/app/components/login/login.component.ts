import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({});
    let username = new FormControl();
    this.form.addControl('username', username);
    let password = new FormControl();
    this.form.addControl('password', password);
    // this.form.valueChanges.subscribe(value=>console.log('valueChanges:', value))
  }

  onSubmit(){
    if(this.authService.check(this.form.getRawValue())){
      this.router.navigate(['items']);
    };
  }
}
