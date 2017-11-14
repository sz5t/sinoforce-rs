import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IField} from '../form-models/IField';
import {IFieldConfig} from '../form-models/IFieldConfig';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'cn-form-select',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-form-select.component.html',
  styleUrls: ['./cn-form-select.component.css']
})
export class CnFormSelectComponent implements IField {
  submitValid: boolean;
  config: IFieldConfig;
  group: FormGroup;
}
