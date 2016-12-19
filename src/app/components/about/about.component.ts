import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
  item: any;
  constructor(private http: Http) {
    this.http.get('http://api.qa.gulsy.com/v1/categories')
      .toPromise().then(data => this.item = data.json());
  }

  ngOnInit() {
  }

}
