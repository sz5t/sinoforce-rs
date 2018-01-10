import {
  AfterContentInit,
  AfterViewInit,
  Component, Input, OnInit,
  ViewEncapsulation
} from '@angular/core';
import {IDynamicBlock, IDynamicBlockModel} from '../dynamic-block.model';
import {CommonUtility} from '../../../../framework/utility/common-utility';
import {DynamicBlockBase} from '../dynamic-block.base';
@Component({
  selector: 'cn-dynamic-block-portlet',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-block-portlet.component.html',
  styleUrls: ['./dynamic-block-portlet.component.css']
})
export class CnDynamicBlockPortletComponent extends DynamicBlockBase implements OnInit, IDynamicBlock, AfterViewInit, AfterContentInit {
  dynamicBlockField: IDynamicBlockModel;
  @Input() templateConfig;
  _GUID = CommonUtility.uuID(6);

  constructor() {
    super();
  }

  ngOnInit() {
    // init portlet content properties
    this.initBlockField();
  }

  ngAfterViewInit() {
    this.unblockUI('#block_' + this._GUID);

  }

  ngAfterContentInit() {
    this.blockUI({
      target: '#block_' + this._GUID,
      animate: true
    });
  }
  initBlockField() {
    this.dynamicBlockField = {
      title: this.templateConfig.title ? this.templateConfig.title : '',
      titleColor: this.templateConfig.titleColor ? this.templateConfig.titleColor : '',
      titleIcon: this.templateConfig.titleIcon ? this.templateConfig.titleIcon : '',
      isCollapse: this.templateConfig.isCollapse ? this.templateConfig.isCollapse : '',
      isFullScreen: this.templateConfig.isFullScreen ? this.templateConfig.isFullScreen : '',
      actions: this.templateConfig.actions ? this.templateConfig.actions : [],
      note: this.templateConfig.note
    };
  }

}
