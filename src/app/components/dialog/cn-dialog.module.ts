import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormDialogComponent} from "./form-dialog/form-dialog.component";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {CnDynamicFormModule} from "../form/cn-dynamic-form.module";

@NgModule({
  imports: [
    CommonModule,
    CnDynamicFormModule
  ],
  declarations: [
    FormDialogComponent,
    ConfirmDialogComponent
  ],
  exports:[
    FormDialogComponent,
    ConfirmDialogComponent
  ]
})
export class CnDialogModule { }
