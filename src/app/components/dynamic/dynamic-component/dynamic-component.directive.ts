import {ComponentFactoryResolver, Directive, Input, ViewContainerRef, OnInit, ComponentRef} from '@angular/core';
import {CnTreeComponent} from '../../tree/cn-tree/cn-tree.component';
import {ICnComponent} from '../../component-models/component.interface';
import {ComponentConfigFactory} from '../../../framework/factory/component-config.factory';
import {ClientStorageService} from '../../../services/client-storage.service';
import {CnDynamicGridviewComponent} from './cn-dynamic-gridview/cn-dynamic-gridview.component';
import {CnDynamicFormsComponent} from './cn-dynamic-form/cn-dynamic-forms.component';
import {CnDynamicGridviewMultiComponent} from './cn-dynamic-gridview/cn-dynamic-gridview-multi.component';
const components: { [type: string]: any } = {
  grid_view: CnDynamicGridviewComponent,
  grid_multi_view: CnDynamicGridviewMultiComponent,
  tree_view: CnTreeComponent,
  form_view: CnDynamicFormsComponent
};
@Directive({
  selector: '[cnDynamicComponent]'
})
export class DynamicComponentDirective implements OnInit, ICnComponent {
  @Input() componentConfig;
  component: ComponentRef<ICnComponent>;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef,
              private clientStorage: ClientStorageService) {
  }

  ngOnInit() {
    this.buildChildComponent();
  }

  buildChildComponent() {
    if (this.componentConfig.viewCfg && this.componentConfig.viewCfg.component) {
      const componentFactory = this.resolver.resolveComponentFactory<ICnComponent>(components[this.componentConfig.viewCfg.component]);
      this.component = this.container.createComponent(componentFactory);
      this.component.instance.componentConfig = ComponentConfigFactory
        .createComponentConfig(
          this.componentConfig.viewCfg, this.getCredential()
        );
    }
  }

  getCredential(): string {
    const onlineUser = this.clientStorage.getCookies('onlineUser');
    return onlineUser ? onlineUser.Token : '';
  }

}
