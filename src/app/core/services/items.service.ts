import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {Observable, BehaviorSubject} from 'rxjs';
import {IItem} from '../interfaces/item';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class ItemsService implements Resolve<FirebaseObjectObservable<IItem>>{
  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private af: AngularFire) {
    Observable.fromPromise(
      <Promise<any>>af.auth.login({email:'allfayn+training@gmail.com',password:'123456'})
    ).subscribe( () => this.isAuth.next(true) );
  }

  getList(): FirebaseListObservable<IItem[]>{
    return this.af.database.list('/items');
  }

  getItem(id): FirebaseObjectObservable<IItem>{
    return this.af.database.object('/items/'+id);
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IItem> {
    let id = route.params['id'];
    let res = this.getItem(id).first();
    return res;
  }


}
