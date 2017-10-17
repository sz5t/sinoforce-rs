import { Component, OnInit } from '@angular/core';
import {IFieldConfig} from "../form-models/IFieldConfig";
import {IField} from "../form-models/IField";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'cn-form-select2',
  templateUrl: './cn-form-select2.component.html',
  styleUrls: ['./cn-form-select2.component.css']
})
export class CnFormSelect2Component implements IField {
  config:IFieldConfig;
  group:FormGroup;
}
