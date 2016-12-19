import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  public item: any;
  constructor(private http: Http) {
    this.http.get('http://api.qa.gulsy.com/v1/categories')
      .toPromise().then(data => this.item = data.json());
  }

  ngOnInit() {
  }

}
