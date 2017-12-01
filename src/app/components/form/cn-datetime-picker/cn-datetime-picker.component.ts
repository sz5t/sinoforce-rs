import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IFieldConfig} from '../form-models/IFieldConfig';
import {IField} from '../form-models/IField';
import {FormGroup} from '@angular/forms';
declare let $: any;
@Component({
  selector: 'cn-datetime-picker',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-datetime-picker.component.html',
  styleUrls: ['./cn-datetime-picker.component.css']
})
export class CnDatetimePickerComponent implements OnInit, IField {
  config: IFieldConfig;
  group: FormGroup;
  submitValid: boolean;
  _control;

  constructor() {
  }

  ngOnInit() {
    this._control = this.group.get(this.config.name);
    if ($().datetimepicker) {
      $('.form_datetime').datetimepicker({
        language: 'zh-CN',
        autoclose: true,
        todayBtn: true,
        todayHighlight: 1
      });
    }
  }
}
