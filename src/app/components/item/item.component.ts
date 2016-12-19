import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {ItemsService} from '../../core/services/items.service';
import {IItem} from '../../core/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public item: IItem;
  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit() {
    this.item = this.route.snapshot.data['item'];
  }

}
