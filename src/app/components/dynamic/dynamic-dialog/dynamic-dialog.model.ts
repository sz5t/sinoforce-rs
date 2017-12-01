import {EventEmitter} from '@angular/core';
export interface IDynamicDialogField {
  GUID: string;
  title: string;
  text?: string;
  handleData: any;
  eventSetting: any;
  dialogConfig: any;
  eventType: string;
  message?: string;
  eventCallBack?: EventEmitter<any>;
}

export interface IDynamicDialog {
  dialogConfigField: IDynamicDialogField;
  handleData: any;
}
