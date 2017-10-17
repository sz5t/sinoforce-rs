import { NgModule } from '@angular/core';
import {CnLayoutModule} from "./layout/cn-layout.module";
import {CnDynamicFormModule} from "./form/cn-dynamic-form.module";
import {CnDialogModule} from "./dialog/cn-dialog.module";
@NgModule({
  imports:[
    CnLayoutModule,
    CnDynamicFormModule,
    CnDialogModule
  ],
  exports:[
    CnLayoutModule,
    CnDynamicFormModule,
    CnDialogModule
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
