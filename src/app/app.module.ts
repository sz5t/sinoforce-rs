import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CnRouter} from './routes/cn.router';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './services/api.service';
import {Broadcaster} from './broadcast/broadcaster';
import {ConfigService} from './services/config.service';
import {CnLoginModule} from './login/cn-login.module';
import {ApplicationsModule} from './application/applications.module';
import {WebStorageModule} from 'ngx-store';
import {ClientStorageService} from './services/client-storage.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CnRouter,
    HttpClientModule,
    CnLoginModule,
    ApplicationsModule,
    WebStorageModule
  ],
  providers: [
    ApiService,
    ConfigService,
    ClientStorageService,
    Broadcaster],
  bootstrap: [AppComponent]
})
export class AppModule { }
