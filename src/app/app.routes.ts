import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/login/login.component';
import {ItemsComponent} from './components/items/items.component';
import {ItemComponent} from './components/item/item.component';
import {GuardAuthService} from './core/guards/auth';
import {GuardGuestService} from './core/guards/guest';
import {ItemsService} from './core/services/items.service';
export const routes: Routes = [
  { path: '', component: HomeComponent,
  },
  { path: 'about', component: AboutComponent,
  },
  { path: 'login', component: LoginComponent,
    canActivate: [GuardGuestService]
  },
  { path: 'items',
    canActivate: [GuardAuthService],
    children: [
      { path: '', component: ItemsComponent},
      { path: ':id', component: ItemComponent,
      resolve: {
        item: ItemsService
      }
      }
    ]
  }
];
