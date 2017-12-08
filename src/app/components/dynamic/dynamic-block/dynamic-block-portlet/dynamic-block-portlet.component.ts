import {Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {IDynamicBlock, IDynamicBlockModel} from '../dynamic-block.model';
import {ClientStorageService} from '../../../../services/client-storage.service';
@Component({
  selector: 'cn-dynamic-block-portlet',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-block-portlet.component.html',
  styleUrls: ['./dynamic-block-portlet.component.css']
})
export class CnDynamicBlockPortletComponent implements OnInit, IDynamicBlock {
  dynamicBlockField: IDynamicBlockModel;
  @Input() templateConfig;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef,
              private clientStorage: ClientStorageService) {
  }

  ngOnInit() {
    // init portlet content properties
    this.initBlockField();
  }

  initBlockField() {
    this.dynamicBlockField = {
      title: this.templateConfig.title ? this.templateConfig.title : '',
      titleColor: this.templateConfig.titleColor ? this.templateConfig.titleColor : '',
      titleIcon: this.templateConfig.titleIcon ? this.templateConfig.titleIcon : '',
      isCollapse: this.templateConfig.isCollapse ? this.templateConfig.isCollapse : '',
      isFullScreen: this.templateConfig.isFullScreen ? this.templateConfig.isFullScreen : '',
      actions: this.templateConfig.actions ? this.templateConfig.actions : [],
    };
  }

}
