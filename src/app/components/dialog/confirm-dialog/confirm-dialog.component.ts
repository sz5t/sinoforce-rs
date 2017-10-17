import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ButtonEvent} from "../../../framework/event/button-event";
import {ApiService} from "../../../services/api.service";
import {Broadcaster} from "../../../broadcast/broadcaster";
declare let $:any;
@Component({
  selector: 'cn-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() message:string;
  @Input() title:string;
  @Input() confirmEventSetting;
  @Input() handleData;
  @Output() eventCallback:EventEmitter<string> = new EventEmitter<string>();
  constructor(private apiService:ApiService,private broadcast:Broadcaster){}
  onClick(){

    const url:string = this.confirmEventSetting.api || '';
    const method:string = this.confirmEventSetting.method || 'get';
    const params = this.confirmEventSetting.paramsMap || {};
    if(this.confirmEventSetting.keyId && this.confirmEventSetting.keyId.trim().length>0){
      params[this.confirmEventSetting.keyId] = this.handleData[this.confirmEventSetting.keyId] || '';
    }
    const event = new ButtonEvent();
    event.execute(this.apiService,url,method,params,this.handleData).subscribe(
      result => {

      },
      error => {
        // error should be written in operation log
        // show error message to user
        console.error('error',error);
      },
      () => {
        $('#basic_dialog').modal('hide');
        this.eventCallback.emit();
      }
    )
  }
  callback(){

  }

  ngOnInit() {
  }

}
