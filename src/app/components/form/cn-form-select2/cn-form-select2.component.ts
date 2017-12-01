import { Component, OnInit } from '@angular/core';
import {IFieldConfig} from '../form-models/IFieldConfig';
import {IField} from '../form-models/IField';
import {FormGroup} from '@angular/forms';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'cn-form-select2',
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
    if (this.config.ajax) {
      const url = this.config.ajax.url;
      this._apiService.doList(url).subscribe(
        response => {
          this._asyncData = response;
        }
      );
    }
  }

  changeValue(event) {
    console.log(event);
  }
}
