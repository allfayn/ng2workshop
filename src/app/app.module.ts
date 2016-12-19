import { BrowserModule } from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER, Injector, NgModuleFactoryLoader, Compiler} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {RouterModule, UrlSerializer, RouterOutletMap} from '@angular/router';
import {routes} from './app.routes';
import { LoginComponent } from './components/login/login.component';
import {Ng2BootstrapModule} from 'ng2-bootstrap';
import {CoreModule} from './core/core.module';
import { WidgetUserComponent } from './widgets/user/user.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    WidgetUserComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2BootstrapModule,
    CoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
