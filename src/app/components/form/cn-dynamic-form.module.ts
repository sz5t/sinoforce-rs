import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CnFormInputComponent} from "./cn-form-input/cn-form-input.component";
import {CnFormButtonComponent} from "./cn-form-button/cn-form-button.component";
import {CnFormSelectComponent} from "./cn-form-select/cn-form-select.component";
import {CnFormSelect2Component} from "./cn-form-select2/cn-form-select2.component";
import {CnFormCheckboxComponent} from "./cn-form-checkbox/cn-form-checkbox.component";
import {CnFormRadioComponent} from "./cn-form-radio/cn-form-radio.component";
import { CnDynamicFormComponent } from './cn-dynamic-form.component';
import { CnDynamicFieldDirective } from './cn-dynamic-field.directive';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { CnFormTextareaComponent } from './cn-form-textarea/cn-form-textarea.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CnDynamicFormComponent
  ],
  declarations: [
    CnFormInputComponent,
    CnFormButtonComponent,
    CnFormSelectComponent,
    CnFormSelect2Component,
    CnFormCheckboxComponent,
    CnFormRadioComponent,
    CnDynamicFormComponent,
    CnDynamicFieldDirective,
    CnFormTextareaComponent
  ],
  entryComponents:[
    CnFormInputComponent,
    CnFormButtonComponent,
    CnFormSelect2Component,
    CnFormSelectComponent,
    CnFormCheckboxComponent,
    CnFormRadioComponent,
    CnFormTextareaComponent
  ]
})
export class CnDynamicFormModule { }