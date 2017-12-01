import {Component, OnInit} from '@angular/core';
import {IField} from '../form-models/IField';
import {IFieldConfig} from '../form-models/IFieldConfig';
import {FormGroup} from '@angular/forms';
declare let $: any;
@Component({
  selector: 'cn-date-picker',

  templateUrl: './cn-date-picker.component.html',
  styleUrls: ['./cn-date-picker.component.css']
})
export class CnDatePickerComponent implements OnInit, IField {
  config: IFieldConfig;
  group: FormGroup;
  submitValid: boolean;
  _control;

  constructor() {

  }

  ngOnInit() {
    $('.form_datetime').datetimepicker({
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      todayHighlight: 1,
      minView: 4
    });
    this._control = this.group.get(this.config.name);
  }
}
