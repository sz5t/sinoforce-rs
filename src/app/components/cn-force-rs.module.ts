import { NgModule } from '@angular/core';
import {CnLayoutModule} from "./layout/cn-layout.module";
import {CnDynamicFormModule} from "./form/cn-dynamic-form.module";
import {CnDialogModule} from "./dialog/cn-dialog.module";
import {CnToastModule} from "./toast/cn-toast.module";
import {CnTreeModule} from "./tree/tree.module";
@NgModule({
  imports:[
    CnLayoutModule,
    CnDynamicFormModule,
    CnDialogModule,
    CnToastModule,
    CnTreeModule

  ],
  exports:[
    CnLayoutModule,
    CnDynamicFormModule,
    CnDialogModule,
    CnToastModule,
    CnTreeModule
  ],
  declarations: [],
})
export class CnForceRsModule {
  static forRoot(){
    return {
      ngModule: CnForceRsModule
    }
  }
}
