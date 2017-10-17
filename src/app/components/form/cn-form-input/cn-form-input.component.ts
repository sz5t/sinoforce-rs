import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IFieldConfig} from "../form-models/IFieldConfig";
import {FormGroup} from "@angular/forms";
import {IField} from "../form-models/IField";

@Component({
  selector: 'cn-form-input',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './cn-form-input.component.html',
  styleUrls: ['./cn-form-input.component.css']
})
export class CnFormInputComponent implements IField {
  config:IFieldConfig;
  group:FormGroup;
}
