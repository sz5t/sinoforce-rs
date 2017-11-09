import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CnGridViewComponent} from "./cn-gridview/cn-gridview.component";
import {DataTablesModule} from "angular-datatables";

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule
  ],
  declarations: [
    CnGridViewComponent
  ],
  exports:[
    CnGridViewComponent
  ]
})
export class CnGridModule { }
