import {
  Component, OnInit, ViewEncapsulation, HostListener, AfterViewInit, ViewChild, Input,
  OnChanges
} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {DataTableDirective} from 'angular-datatables';
import { HttpEventType, HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {ButtonEvent, EVENT_TYPE} from '../../framework/event/button-event';
import {ApiService} from "../../services/api.service";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/toPromise';
import {IFieldConfig} from "../../components/form/form-models/IFieldConfig";
import {CommonUtility} from "../../framework/utility/common-utility";
import {AppConfigData, ConfigService} from "../../services/config.service";
import {MasterGridViewResolver} from "../../framework/resolver/gridview.resolver";
import {LayoutResolver} from "../../framework/resolver/layout.resolver";
import {Configuration} from "../../framework/configuration";
declare let $:any;
@Component({
  selector: 'cn-grid-view-template',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './grid-view-template.component.html',
  styleUrls: ['./grid-view-template.component.css']
})
export class GridViewTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement:DataTableDirective;
  @Input() rowCallback:Function;
  @Input() selectedItem;
  @Input() viewConfig;

  gridConfig;
  formConfig:IFieldConfig[] = [];
  layoutConfig;
  buttonsConfig:any[];
  dtOption: DataTables.Settings = {};
  dtTrigger:Subject<Object> = new Subject();
  _router: ActivatedRoute;

  formEventSetting;

  confirmTitle:string;
  confirmMessage:string;
  confirmEventSetting;
  formDialogTitle:string='表单';
  templateGUID:string = CommonUtility.uuID(6);
  constructor(private router: ActivatedRoute,
              private http:HttpClient,
              private apiService:ApiService,
              private configService:ConfigService) {
    this._router = router;
  }

  ngOnInit() {
    let masterResolver = new MasterGridViewResolver(this.viewConfig.viewCfg);
    this.buttonsConfig = masterResolver.buttonConfig;
    this.gridConfig = masterResolver.gridConfig;
    this.gridConfig.rowCallback = this.rowCallback;
    this.gridConfig.buttons = this.initButton(this.buttonsConfig);
    this.gridConfig.language = {
      "processing":   "处理中...",
      "lengthMenu":   "显示 _MENU_ 项结果",
      "zeroRecords":  "没有匹配结果",
      "info":         "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
      "infoEmpty":    "显示第 0 至 0 项结果，共 0 项",
      "infoFiltered": "(由 _MAX_ 项结果过滤)",
      "infoPostFix":  "",
      "search":       "搜索:",
      "url":          "",
      "emptyTable":     "表中数据为空",
      "loadingRecords": "载入中...",
      "thousands":  ",",
      "paginate": {
        "first":    "首页",
        "previous": "上一页",
        "next":     "下一页",
        "last":     "末页"
      },
      "aria": {
        "sortAscending":  ": 以升序排列此列",
        "sortDescending": ": 以降序排列此列"
      }
    };
    this.layoutConfig = new LayoutResolver(this.viewConfig).config;
    this.dtOption = this.gridConfig;
  }
  ngAfterViewInit(){
    this.dtTrigger.next();
  }
  initButton(data): any[]{
    let btns = [];
    for(const d of data){
      let btn = {...d};
      if(d.img){
        btn.text =btn.text+" "+"<i class='"+d.img+"'></i>"
      }
      btn.className ="btn " + d.color;
      btn.action = (e,dt,node,config) => {
        switch(btn.events.eventType){
          case EVENT_TYPE.common:
            break;
          case EVENT_TYPE.confirm:
            this.confirmMessage = btn.events.text;
            this.confirmTitle = btn.events.title;
            this.confirmEventSetting = btn.events.execution;
            $('#basic_dialog_'+this.templateGUID).modal('show');
            break;
          case EVENT_TYPE.dialog:
            this.formConfig = btn.formConfig;
            this.formEventSetting = btn.events.execution;
            $('#formDialig_'+this.templateGUID).modal('show');
            break;
        }
      };
      btns.push(btn);
    }
    return btns;
  }
  checkAll() {
    $("#checkall").click(function () {
      var check = $(this).prop("checked");
      $("input[name='checkchild']").prop("checked", check);
    });
  }
  reload(newURL?:string):void {
    this.dtElement.dtInstance.then((dtInstance:DataTables.Api) =>{
      if(newURL){
        dtInstance.ajax.url(newURL).load();
      }
      else{
        dtInstance.ajax.reload();
      }
    })
  }
}
