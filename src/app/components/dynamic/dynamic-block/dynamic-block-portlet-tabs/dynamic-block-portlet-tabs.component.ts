import {Component, OnInit} from '@angular/core';
import {IDynamicBlock, IDynamicBlockModel} from '../dynamic-block.model';

@Component({
  selector: 'cn-dynamic-block-portlet-tabs',
  templateUrl: './dynamic-block-portlet-tabs.component.html',
  styleUrls: ['./dynamic-block-portlet-tabs.component.css']
})
export class CnDynamicBlockPortletTabsComponent implements OnInit, IDynamicBlock {
  dynamicBlockField: IDynamicBlockModel;
  templateConfig: any;

  constructor() {
  }

  ngOnInit() {
  }

}
