import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CnDynamicRowDirective} from './dynamic-row/cn-dynamic-row.directive';
import {CnDynamicColumnComponent} from './dynamic-column/cn-dynamic-column/cn-dynamic-column.component';
import {CnDynamicLayoutComponent} from './dynamic-layout/dynamic-layout.component';
import {CnDynamicBlockPortletComponent} from './dynamic-block/dynamic-block-portlet/dynamic-block-portlet.component';
import {CnDynamicBlockPortletTabsComponent} from './dynamic-block/dynamic-block-portlet-tabs/dynamic-block-portlet-tabs.component';
import {CnDynamicBlockAccordionComponent} from './dynamic-block/dynamic-block-accordion/dynamic-block-accordion.component';
import {DynamicBlockDirective} from './dynamic-block/dynamic-block.directive';
import {DynamicComponentDirective} from './dynamic-component/dynamic-component.directive';
import {CnDynamicFormDialogComponent} from './dynamic-dialog/dynamic-form-dialog/dynamic-form-dialog.component';
import {CnDynamicConfirmDialogComponent} from './dynamic-dialog/dynamic-confirm-dialog/dynamic-confirm-dialog.component';
import {DynamicDialogDirective} from './dynamic-dialog/dynamic-dialog.directive';
import {CnDynamicFormModule} from '../form/cn-dynamic-form.module';
import {CnToastModule} from '../toast/cn-toast.module';
import {CnDynamicGridviewComponent} from './dynamic-component/cn-dynamic-gridview/cn-dynamic-gridview.component';
import {DataTablesModule} from 'angular-datatables';
import {CnDynamicFormsComponent} from './dynamic-component/cn-dynamic-form/cn-dynamic-forms.component';
import {CnDynamicFieldsDirective} from './dynamic-component/cn-dynamic-form/cn-dynamic-fields.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CnDynamicGridviewMultiComponent} from './dynamic-component/cn-dynamic-gridview/cn-dynamic-gridview-multi.component';

@NgModule({
  imports: [
    CommonModule,
    CnDynamicFormModule,
    CnToastModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CnDynamicRowDirective,
    CnDynamicColumnComponent,
    CnDynamicLayoutComponent,
    CnDynamicBlockPortletComponent,
    CnDynamicBlockPortletTabsComponent,
    CnDynamicBlockAccordionComponent,
    DynamicBlockDirective,
    DynamicComponentDirective,
    CnDynamicFormDialogComponent,
    CnDynamicConfirmDialogComponent,
    DynamicDialogDirective,
    CnDynamicGridviewComponent,
    CnDynamicGridviewMultiComponent,
    CnDynamicFormsComponent,
    CnDynamicFieldsDirective
  ],
  exports: [
    CnDynamicLayoutComponent,
    CnDynamicBlockPortletComponent,
    CnDynamicBlockPortletTabsComponent,
    CnDynamicBlockAccordionComponent,
    CnDynamicFormDialogComponent,
    CnDynamicConfirmDialogComponent,
    CnDynamicGridviewComponent,
    CnDynamicGridviewMultiComponent,
    CnDynamicFormsComponent
  ],
  entryComponents: [
    CnDynamicColumnComponent,
    CnDynamicBlockPortletComponent,
    CnDynamicBlockPortletTabsComponent,
    CnDynamicBlockAccordionComponent,
    CnDynamicFormDialogComponent,
    CnDynamicConfirmDialogComponent,
    CnDynamicGridviewComponent,
    CnDynamicGridviewMultiComponent,
    CnDynamicFormsComponent
  ]
})
export class CnDynamicModule {
}
