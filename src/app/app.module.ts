import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { AppComponent } from './app.component';
import {CnRouter} from "./routes/cn.router";
import {CnForceRsModule} from "./components/cn-force-rs.module";
import {GridViewTemplateComponent} from "./application/grid-view-template/grid-view-template.component";
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from "./services/api.service";
import {Broadcaster} from "./broadcast/broadcaster";
import { MasterSlaverTemplateComponent } from './application/master-slaver-template/master-slaver-template.component';
@NgModule({
  declarations: [
    AppComponent,
    GridViewTemplateComponent,
    MasterSlaverTemplateComponent
  ],
  imports: [
    BrowserModule,
    CnRouter,
    CnForceRsModule.forRoot(),
    DataTablesModule,
    HttpClientModule
  ],
  providers: [ApiService,Broadcaster],
  bootstrap: [AppComponent]
})
export class AppModule { }
