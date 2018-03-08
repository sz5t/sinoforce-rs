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
import {DynamicChartDirective} from './dynamic-charts/dynamic-chart.directive';
import {CnDynamicChartCounterComponent} from './dynamic-charts/dynamic-chart-counters/dynamic-chart-counter/dynamic-chart-counter.component';
import {CnDynamicChartCountersComponent} from './dynamic-charts/dynamic-chart-counters/dynamic-chart-counters.component';
import {DynamicChartCountersDirective} from './dynamic-charts/dynamic-chart-counters/dynamic-chart-counters.directive';
import {CnDynamicChartBarComponent} from './dynamic-charts/dynamic-chart-bar/dynamic-chart-bar.component';
import {CnDynamicTimelineHorizontalComponent} from './dynamic-component/dynamic-timeline-horizontal/dynamic-timeline-horizontal.component';
import {CnDynamicBlockWizardComponent} from './dynamic-block/dynamic-block-wizard/dynamic-block-wizard.component';
import {DynamicBlockWizardDirective} from './dynamic-block/dynamic-block-wizard/dynamic-block-wizard.directive';
import {CnDynamicSearchFormComponent} from './dynamic-component/cn-dynamic-search-form/cn-dynamic-search-form.component';

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
    CnDynamicFieldsDirective,
    CnDynamicChartCounterComponent,
    DynamicChartDirective,
    DynamicChartCountersDirective,
    CnDynamicChartCountersComponent,
    CnDynamicChartBarComponent,
    CnDynamicTimelineHorizontalComponent,
    CnDynamicBlockWizardComponent,
    DynamicBlockWizardDirective,
    CnDynamicSearchFormComponent
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
    CnDynamicFormsComponent,
    CnDynamicChartCounterComponent,
    CnDynamicChartCountersComponent,
    CnDynamicChartBarComponent,
    CnDynamicBlockWizardComponent,
    CnDynamicTimelineHorizontalComponent,
    CnDynamicSearchFormComponent
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
    CnDynamicFormsComponent,
    CnDynamicChartCounterComponent,
    CnDynamicChartCountersComponent,
    CnDynamicChartBarComponent,
    CnDynamicBlockWizardComponent,
    CnDynamicTimelineHorizontalComponent,
    CnDynamicSearchFormComponent
  ]
})
export class CnDynamicModule {
}
