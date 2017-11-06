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
import { MasterGridTemplateComponent } from './application//master-grid-template/master-grid-template.component';
import { SlaverGridTemplateComponent } from './application/slaver-grid-template/slaver-grid-template.component';
import { MasterTemplateComponent } from './application/master-template/master-template.component';
import {ConfigService} from "./services/config.service";
import { TreeGridTemplateComponent } from './application/tree-grid-template/tree-grid-template.component';
@NgModule({
  declarations: [
    AppComponent,
    GridViewTemplateComponent,
    MasterSlaverTemplateComponent,
    MasterGridTemplateComponent,
    SlaverGridTemplateComponent,
    MasterTemplateComponent,
    TreeGridTemplateComponent
  ],
  imports: [
    BrowserModule,
    CnRouter,
    CnForceRsModule.forRoot(),
    DataTablesModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    ConfigService,
    {
      provide:ConfigService,
      useFactory:(apiService) => {
        return new ConfigService(apiService);
      },
      deps:[ApiService]
    },
    Broadcaster],
  bootstrap: [AppComponent]
})
export class AppModule { }
