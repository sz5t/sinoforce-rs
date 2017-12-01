import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs/Subject';
import {IDynamicDialogField} from '../../dynamic-dialog/dynamic-dialog.model';
import {Broadcaster} from '../../../../broadcast/broadcaster';
import {EVENT_TYPE} from '../../../../framework/event/button-event';
import {CommonUtility} from '../../../../framework/utility/common-utility';
import {ICnComponent} from '../../../component-models/component.interface';
import {Subscription} from 'rxjs/Subscription';
import {Configuration} from '../../../../framework/configuration';
declare let $: any;
@Component({
  selector: 'cn-dynamic-gridview',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-dynamic-gridview.component.html',
  styleUrls: ['./cn-dynamic-gridview.component.css']
})
export class CnDynamicGridviewComponent implements OnInit, ICnComponent, AfterViewInit, OnDestroy {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  @Input() componentConfig;
  _GUID: string;
  handleData;
  gridConfig;
  dtTrigger: Subject<object> = new Subject();
  dialogConfig: IDynamicDialogField;
  _subscribe: Subscription;

  constructor(private _broadcast: Broadcaster) {

  }

  ngOnInit() {
    this._GUID = CommonUtility.uuID(4);
    this.gridConfig = this.componentConfig;
    this.gridConfig.rowCallback = (row: Node, data: any[] | Object, index: number) => {
      $('td', row).unbind('click');
      $('td', row).bind('click', () => {
        this.handleData = data;
        this._broadcast.broadcast(this.gridConfig.viewId, data);
      });
    };
    this.gridConfig.buttons = this.initButton(this.componentConfig.toolbarsConfig);
    if (this.gridConfig.filterConfig && Array.isArray(this.gridConfig.filterConfig)) {
      this.registerSubscribe();
    }
  }

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  checkAll() {
    $('#checkall').click(function () {
      const check = $(this).prop('checked');
      $('input[name=\'checkchild\']').prop('checked', check);
    });
  }

  initButton(data): any[] {
    const btns = [];
    for (const d of data) {
      const btn = {...d};
      if (d.img) {
        btn.text = btn.text + ' ' + '<i class=\'' + d.img + '\'></i>';
      }
      btn.className = 'btn ' + d.color;
      btn.action = (e, dt, node, config) => {
        switch (btn.events.eventType) {
          case EVENT_TYPE.common:
            break;
          case EVENT_TYPE.confirm_dialog:
            $('#basic_dialog_' + this._GUID + btn.id).modal('show');
            break;
          case EVENT_TYPE.form_dialog:
            this._broadcast.broadcast(this._GUID + btn.id, this.handleData);
            $('#formDialig_' + this._GUID + btn.id).modal('show');
            break;
        }
      };
      btns.push(btn);
    }
    return btns;
  }

  reload(newURL?: string): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      if (newURL) {
        dtInstance.ajax.url(newURL).load();
      }
      else {
        dtInstance.ajax.reload();
      }
    });
  }

  registerSubscribe() {
    this._subscribe = this._broadcast.on<string>(this.gridConfig.parentViewId).subscribe(data => {
      if (this.gridConfig && this.gridConfig.filterConfig) {
        const filter = this.gridConfig.filterConfig[0];
        let condition = '';
        for (const propLink of filter.propLinks) {
          if (data) {
            condition += propLink['slaveProp'] + '=' + data[propLink.masterProp] + '&';
          }
        }
        const url = Configuration.web_api + filter.slaveClass + '?' + condition.substring(0, condition.length - 1);
        this.reload(url);
      }
    });
  }

  ngOnDestroy(): void {
    if (this._subscribe) {
      this._subscribe.unsubscribe();
    }
  }
}
