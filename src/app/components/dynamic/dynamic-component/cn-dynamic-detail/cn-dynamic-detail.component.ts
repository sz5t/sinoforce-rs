import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {LayoutResolver} from '../../../../framework/resolver/layout.resolver';
import {ICnComponent} from '../../../component-models/component.interface';

@Component({
  selector: 'cn-dynamic-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-dynamic-detail.component.html',
  styleUrls: ['./cn-dynamic-detail.component.css']
})
export class CnDynamicDetailComponent implements OnInit, ICnComponent {
  @Input() componentConfig: any;
  _title;
  _config;
  _data;

  constructor() {
  }

  ngOnInit() {

    this._title = this.componentConfig.detailViewCfg.title;
    this.componentConfig.detailViewCfg.fields.forEach((items) => {
      items.forEach((item) => {
        item = new LayoutResolver(item).config;
      });
    });

    this._config = this.componentConfig.detailViewCfg.fields;
  }
}
