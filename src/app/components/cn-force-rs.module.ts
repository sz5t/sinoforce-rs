import { NgModule } from '@angular/core';
import {CnLayoutModule} from './layout/cn-layout.module';
import {CnDynamicFormModule} from './form/cn-dynamic-form.module';
import {CnDialogModule} from './dialog/cn-dialog.module';
import {CnToastModule} from './toast/cn-toast.module';
import {CnTreeModule} from './tree/tree.module';
import {CnGridModule} from './grid/cn-grid.module';
import {CnDynamicModule} from './dynamic/dynamic.module';
@NgModule({
  imports: [
    CnLayoutModule,
    CnDynamicFormModule,
    CnDialogModule,
    CnToastModule,
    CnTreeModule,
    CnGridModule,
    CnDynamicModule
  ],
  exports: [
    CnLayoutModule,
    CnDynamicFormModule,
    CnDialogModule,
    CnToastModule,
    CnTreeModule,
    CnGridModule,
    CnDynamicModule
  ],
  declarations: [],
})
export class CnForceRsModule {}
