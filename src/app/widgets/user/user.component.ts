import {Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter} from '@angular/core';
import {IUser} from '../../core/interfaces/user';

@Component({
  selector: 'widget-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetUserComponent implements OnInit, OnChanges {

  @Input() user: IUser;
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(values){
    console.log();
  }

  sendLogout(){
    this.logout.next(true);
  }

}
