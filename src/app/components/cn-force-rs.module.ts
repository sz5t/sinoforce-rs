import { NgModule } from '@angular/core';
import {CnLayoutModule} from "./layout/cn-layout.module";
import {CnDynamicFormModule} from "./form/cn-dynamic-form.module";
import {CnDialogModule} from "./dialog/cn-dialog.module";
import {CnToastModule} from "./toast/cn-toast.module";
@NgModule({
  imports:[
    CnLayoutModule,
    CnDynamicFormModule,
    CnDialogModule,
    CnToastModule
  ],
  exports:[
    CnLayoutModule,
    CnDynamicFormModule,
    CnDialogModule,
    CnToastModule
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
