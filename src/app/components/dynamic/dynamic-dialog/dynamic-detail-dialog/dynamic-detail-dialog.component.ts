import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {IDynamicDialog, IDynamicDialogField} from '../dynamic-dialog.model';
import {Subscription} from 'rxjs/Subscription';
import {ApiService} from '../../../../services/api.service';
import {Broadcaster} from '../../../../broadcast/broadcaster';

@Component({
  selector: 'cn-dynamic-detail-dialog',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-detail-dialog.component.html',
  styleUrls: ['./dynamic-detail-dialog.component.css']
})
export class CnDynamicDetailDialogComponent implements OnInit, IDynamicDialog, OnChanges, OnDestroy {
  @Input() dialogConfigField: IDynamicDialogField;
  @Input() handleData: any;
  @Input() GUID;
  selectedIds: Map<string, string>;
  _subscribe: Subscription;

  constructor(private _apiService: ApiService,
              private _broadcast: Broadcaster) {
  }

  ngOnInit() {
    this.registerBroadcast();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  registerBroadcast() {
    this._subscribe = this._broadcast.on<any>(this.dialogConfigField.GUID).subscribe(data => {
      const config = this.dialogConfigField;
      if (data && this.dialogConfigField && config.eventSetting.method === 'put') {
        delete data.$type;
        for (const d in data) {
          if (this.handleData.hasOwnProperty(d)) {

          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this._subscribe) {
      this._subscribe.unsubscribe();
    }
  }
}
