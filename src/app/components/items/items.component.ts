import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ItemsService} from '../../core/services/items.service';
import {IItem} from '../../core/interfaces/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public items: FirebaseListObservable<IItem[]>;
  constructor(af: AngularFire, private itemsService: ItemsService) {
    this.items = this.itemsService.getList();
  }

  ngOnInit() {
  }

  add() {
    this.items.push({
      item: 'test'
    });
  }

  remove(id:string){
    this.items.remove(id);
  }

}
