import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IFieldConfig} from '../form-models/IFieldConfig';
import {FormGroup} from '@angular/forms';
import {IField} from '../form-models/IField';
import {App} from '../../layout/cn-layout/cn-layout.component';
declare let $: any;
@Component({
  selector: 'cn-date-range-picker',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-date-range-picker.component.html',
  styleUrls: ['./cn-date-range-picker.component.css']
})
export class CnDateRangePickerComponent implements OnInit, IField {
  config: IFieldConfig;
  group: FormGroup;
  submitValid: boolean;
  _control;

  constructor() {
  }

  ngOnInit() {

    $('.input-daterange input').each(function () {
      $(this).datetimepicker({
        rtl: App.isRTL(),
        orientation: 'auto',
        autoclose: true,
        language: 'zh-CN',
      });
    });
    this._control = this.group.get(this.config.name);
  }

}
