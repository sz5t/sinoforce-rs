import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, Type, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {IDynamicBlock, IDynamicBlockModel} from '../dynamic-block.model';
import {MasterTemplateComponent} from '../../../../application/master-template/master-template.component';
import {ICnComponent} from '../../../component-models/component.interface';
import {CnGridViewComponent} from '../../../grid/cn-gridview/cn-gridview.component';
import {CnTreeComponent} from '../../../tree/cn-tree/cn-tree.component';
import {ComponentConfigFactory} from '../../../../framework/factory/component-config.factory';
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
  component: ComponentRef<ICnComponent>;

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
