import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IFieldConfig} from '../form-models/IFieldConfig';
import {IField} from '../form-models/IField';
import {FormGroup} from '@angular/forms';
import {ApiService} from '../../../services/api.service';
declare let $: any;
declare let Mock: any;
@Component({
  selector: 'cn-form-select2',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-form-select2.component.html',
  styleUrls: ['./cn-form-select2.component.css']
})
export class CnFormSelect2Component implements IField, OnInit {
  submitValid: boolean;
  config: IFieldConfig;
  group: FormGroup;
  _asyncData;

  constructor(private _apiService: ApiService) {
  }

  ngOnInit() {
    $('.bs-select').selectpicker();
    if (this.config.ajax) {
      const url = this.config.ajax.url;
      this._apiService.doList(url).subscribe(
        response => {
          this._asyncData = response;
        },
        error2 => {
        },
        () => {
          $('.bs-select').selectpicker('refresh');
        }
      );
    }
  }

  changeValue(event) {
    console.log(event);
  }
}
