import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataTableDirective} from "angular-datatables";
import {IFieldConfig} from "../../components/form/form-models/IFieldConfig";
import {Subject} from "rxjs/Subject";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../services/api.service";
import {EVENT_TYPE} from "../../framework/event/button-event";
import {Validators} from "@angular/forms";
import {Configuration} from "../../framework/configuration";
declare let $:any;
@Component({
  selector: 'cn-master-slaver-template',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './master-slaver-template.component.html',
  styleUrls: ['./master-slaver-template.component.css']
})
export class MasterSlaverTemplateComponent implements OnInit {
  masterFormConfig:IFieldConfig[];
  slaverFormConfig:IFieldConfig[];

  masterButtonsConfig;
  slaverButtonsConfig;

  masterGridConfig;
  slaverGridConfig;

  ngOnInit(){
    this.masterFormConfig = [
      {
        type:'input',
        inputType:'text',
        name:'code',
        label:'程序集名称：',
        helpText:'动态读取程序集名称',
        inputClass:'input-inline input-medium',
        placeholder:'例如：Company.cn.app',
        helpClass:'help-inline',
        validation:[Validators.required,Validators.minLength(6)]
      },
      {
        type:'input',
        inputType:'text',
        name:'text',
        label:'上下文名称：',
        icon:'fa fa-book',
        iconPstn:'left',
        inputClass:'input-group',
        validation:[Validators.required]
      },
      {
        type:'input',
        inputType:'text',
        name:'shortName',
        label:'提供者：',
        inputClass:'input-medium input-group',
        icon:'fa fa-bookmark-o',
        iconPstn:'right',
        helpClass:'help-inline',
        validation:[Validators.maxLength(20)]
      },
      {
        type:'select',
        placeholder:'--请选择--',
        options:[
          {text:'编译成功',value:'编译成功'},
          {text:'正在定义',value:'正在定义'}
        ],
        name:'shareScope',
        label:'编译状态：',
        value:'',
        inputClass:'input-medium'
      },
      {
        type:'select',
        placeholder:'--请选择--',
        options:[
          {text:'手动',value:'手动'},
          {text:'自动',value:'自动'}
        ],
        name:'shareScope',
        label:'编译方式：',
        value:'',
        inputClass:'input-medium'
      },
      {
        type:'input',
        inputType:'text',
        name:'shortName',
        label:'命名空间：',
        inputClass:'input-group',
        icon:'fa fa-bookmark-o',
        iconPstn:'left',
        helpClass:'help-inline',
        helpText:'默认为程序编译后提供的命名空间',
        validation:[Validators.maxLength(20)]
      },
      {
        type:'textarea',
        name:'remark',
        label:'备注：'
      },
      {
        type:'button',
        name:'submit',
        disabled:true
      }
    ];
    this.slaverFormConfig = [
      {
        type:'input',
        inputType:'text',
        name:'code',
        label:'资源名称：',
        helpText:'资源编译后自动生成',
        inputClass:'input-inline input-medium',
        placeholder:'例如：Company.cn.app',
        helpClass:'help-inline',
        validation:[Validators.required,Validators.minLength(6)]
      },
      {
        type:'input',
        inputType:'text',
        name:'text',
        label:'命名空间：',
        icon:'fa fa-book',
        iconPstn:'left',
        inputClass:'input-group',
        validation:[Validators.required]
      },
      {
        type:'input',
        inputType:'text',
        name:'shortName',
        label:'程序集：',
        inputClass:'input-medium input-group',
        icon:'fa fa-bookmark-o',
        iconPstn:'right',
        helpClass:'help-inline',
        validation:[Validators.maxLength(20)]
      },
      {
        type:'select',
        placeholder:'--请选择--',
        options:[
          {text:'编译成功',value:'编译成功'},
          {text:'正在定义',value:'正在定义'}
        ],
        name:'BuildName',
        label:'编译状态：',
        value:'',
        inputClass:'input-medium'
      },
      {
        type:'select',
        placeholder:'--请选择--',
        options:[
          {text:'手动',value:'手动'},
          {text:'自动',value:'自动'}
        ],
        name:'BuildMode',
        label:'编译方式：',
        value:'',
        inputClass:'input-medium'
      },
      {
        type:'radio',
        options:[
          {checked:'',disabled:false,value:'1',label:'独立'},
          {checked:'',disabled:false,value:'2',label:'共享'},
          {checked:'',disabled:false,value:'3',label:'指定区域'}
        ],
        name:'shareScope',
        label:'使用范围：',
        inputClass:'mt-radio-list' // mt-checkbox-list
      },
      {
        type:'textarea',
        name:'Note',
        label:'备注：'
      },
      {
        type:'button',
        name:'submit',
        disabled:true
      }
    ];
    this.masterButtonsConfig = [
      {
      id: 'new', text: '新建', color: 'green-jungle', img:'fa fa-plus', type: 'button',
      "events":{
        "eventType":"dialog",
        "execution":{
          "api":"AppProject",
          "method":"get",
          "keyID":"",
          "callback":""
        }
      }
    },
      {
        id: 'del', text: '删除', color: 'red', img:'fa fa-remove', type: 'button',
        "events":{
          "title":"确认提示",
          "text":"确定要删除选中的记录吗?",
          "eventType":"confirm",
          "execution":{
            "api":"AppProject",
            "method":"delete",
            "keyId":"Id"
          }
        }
      },
      {
        id: 'sub', text: '提交', color: 'green', img:'fa fa-save', type: 'button',
        "events":{
          "title":"确认提示",
          "text":"是否提交当前数据?",
          "eventType":"confirm",
          "execution":{
            "api":"AppProject",
            "method":"proc",
            //"keyId":"Id"
          }
        }
      },
      {
        id: 'modify', text: '修改',color: 'yellow', img:'fa fa-edit', type: 'button',
        "events":{
          "eventType":"dialog",
          "execution":{
            "api":"AppProject",
            "method":"get",
            "keyID":"Id",
            "callback":""
          }
        }
      },
      {
        id: 'search', text: '查询',color: 'blue', img:'fa fa-search', type: 'button',
        "events":{
          "eventType":"dialog",
          "execution":{
            "api":"AppProject",
            "method":"get",
            "keyID":"",
            "callback":""
          }
        }
      }];
    this.slaverButtonsConfig = [
      {
      id: 'new', text: '新建', color: 'green-jungle', img:'fa fa-plus', type: 'button',
      "events":{
        "eventType":"dialog",
        "execution":{
          "api":"AppProject",
          "method":"get",
          "keyID":"",
          "callback":""
        }
      }
    },
      {
        id: 'del', text: '删除', color: 'red', img:'fa fa-remove', type: 'button',
        "events":{
          "title":"确认提示",
          "text":"确定要删除选中的记录吗?",
          "eventType":"confirm",
          "execution":{
            "api":"AppProject",
            "method":"delete",
            "keyId":"Id"
          }
        }
      },
      {
        id: 'sub', text: '提交', color: 'green', img:'fa fa-save', type: 'button',
        "events":{
          "title":"确认提示",
          "text":"是否提交当前数据?",
          "eventType":"confirm",
          "execution":{
            "api":"AppProject",
            "method":"proc",
            //"keyId":"Id"
          }
        }
      },
      {
        id: 'modify', text: '修改',color: 'yellow', img:'fa fa-edit', type: 'button',
        "events":{
          "eventType":"dialog",
          "execution":{
            "api":"AppProject",
            "method":"get",
            "keyID":"Id",
            "callback":""
          }
        }
      },
      {
        id: 'search', text: '查询',color: 'blue', img:'fa fa-search', type: 'button',
        "events":{
          "eventType":"dialog",
          "execution":{
            "api":"AppProject",
            "method":"get",
            "keyID":"",
            "callback":""
          }
        }
      }];
    this.masterGridConfig = {
      "language": {
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
      },
      ordering:true,
      paging:true,
      processing:true,
      //scrollX:true,
      searching:true,
      deferRender:true,
      //data:result,
      ajax:{
        url:Configuration.web_api + 'DynamicResModule',
        dataSrc:''
      },
      autoWidth:true,
      destroy:true,
      lengthMenu: [ 5, 10, 20, 30, 40, 50, 100 ],
      rowId:'DrmId',
      pagingType:'full_numbers',
      pageLength:5,
      orderMulti:true,
      select:true,
      responsive: true,
      columnDefs:[
        {
          targets:0,
          orderable:false
        }
      ],
      columns:[
        {
          title:'<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> ' +
          '<input type="checkbox" class="group-checkable" id="checkall" />' +
          ' <span></span> </label>',
          data:'Id',
          render:(data ,type ,row, meta) =>{
            return '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> ' +
              '<input type="checkbox" class="group-checkable" name="checkchild" value="'+data+'" />' +
              ' <span></span> </label>';
          },
          className: 'text-center'
        },
        {
          title:'共享范围', data:'ShareScope',
        },
        {
          title:'程序集名称', data:'AssemblyName',
          render:function(data, type, row, meta){
            return data==null?'':data;
          }
        },
        {
          title:'编译状态', data:'BuildState',
        },
        {
          title:'编译方式', data:'BuildMode',
        },
        {
          title:'错误消息', data:'ErrorMessage',
          render:function(data, type, row, meta){
            return data==null?'':data;
          }
        },
        {
          title:'编译消息', data:'BuildMessage',
          render:function(data, type, row, meta){
          return data==null?'':data;
          }
        },
        {
          title:'上下文名称', data:'ContextName',
          render:function(data, type, row, meta){
          return data==null?'':data;
        }
        },
        {
          title:'提供者', data:'ProviderName',
          render:function(data, type, row, meta){
          return data==null?'':data;
        }
        },
        {
          title:'默认命名空间', data:'DefaultNamespace',
          render:function(data, type, row, meta){
          return data==null?'':data;
        }
        },
        {
          title:'客户编号', data:'PlatCustomerId',
        },
        {
          title:'是否启用', data:'Enabled',
        },
        {
          title:'创建时间', data:'CreateTime',
        }
      ],
      "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable
      buttons:[]
  };
    this.slaverGridConfig = {
      "language": {
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
      },
      ordering:true,
      paging:true,
      processing:true,
      //scrollX:true,
      searching:true,
      deferRender:true,
      //data:result,
      ajax:{
        url:Configuration.web_api + 'ResourceType',
        dataSrc:''
      },
      autoWidth:true,
      destroy:true,
      lengthMenu: [ 5, 10, 20, 30, 40, 50, 100 ],
      rowId:'DtId',
      pagingType:'full_numbers',
      pageLength:5,
      orderMulti:true,
      select:true,
      responsive: true,
      columnDefs:[
        {
          targets:0,
          orderable:false
        }
      ],
      columns:[
        {
          title:'<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> ' +
          '<input type="checkbox" class="group-checkable" id="checkall" />' +
          ' <span></span> </label>',
          data:'Id',
          render:(data ,type ,row, meta) =>{
            return '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> ' +
              '<input type="checkbox" class="group-checkable" name="checkchild" value="'+data+'" />' +
              ' <span></span> </label>';
          },
          className: 'text-center'
        },
        {
          title:'资源名称', data:'Name',
        },
        {
          title:'编译状态', data:'OwnerNameSpace',
        },
        {
          title:'编译方式', data:'OwnerAssembly',
        },
        {
          title:'编译消息', data:'ShareScope',
          render:function(data, type, row, meta){
            return data==null?'':data;
          }
        },
        {
          title:'上下文名称', data:'BuildMode',
          render:function(data, type, row, meta){
            return data==null?'':data;
          }
        },
        {
          title:'提供者', data:'BuildState',
          render:function(data, type, row, meta){
            return data==null?'':data;
          }
        },
        {
          title:'默认命名空间', data:'TableType',
          render:function(data, type, row, meta){
            return data==null?'':data;
          }
        },
        {
          title:'备注', data:'Note',
          render:function(data, type, row, meta){
            return data==null?'':data;
          }
        },
        {
          title:'客户编号', data:'PlatCustomerId',
        },
        {
          title:'是否启用', data:'Enabled',
        },
        {
          title:'创建时间', data:'CreateTime',
        }
      ],
      "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable
      buttons:[]
    };
  }
  /*@ViewChild(DataTableDirective)
  dtElement:DataTableDirective;
  @Input() formConfig:IFieldConfig[];
  dtTrigger:Subject<Object> = new Subject();
  _router: ActivatedRoute;
  _selectedItem = {};
  dtOption: DataTables.Settings = {};
  dtSlaverOption:DataTables.Settings = {};
  confirmTitle:string;
  confirmMessage:string;
  confirmEventSetting;
  formDialogTitle:string='表单';
  buttons:any[];
  masterButtons:any[] = [
    {
      id: 'new', text: '新建', color: 'green-jungle', img:'fa fa-plus', type: 'button',
      "events":{
        "eventType":"dialog",
        "execution":{
          "api":"AppProject",
          "method":"get",
          "keyID":"",
          "callback":""
        }
      }
    },
    {
      id: 'del', text: '删除', color: 'red', img:'fa fa-remove', type: 'button',
      "events":{
        "title":"确认提示",
        "text":"确定要删除选中的记录吗?",
        "eventType":"confirm",
        "execution":{
          "api":"AppProject",
          "method":"delete",
          "keyId":"Id"
        }
      }
    },
    {
      id: 'sub', text: '提交', color: 'green', img:'fa fa-save', type: 'button',
      "events":{
        "title":"确认提示",
        "text":"是否提交当前数据?",
        "eventType":"confirm",
        "execution":{
          "api":"AppProject",
          "method":"proc",
          //"keyId":"Id"
        }
      }
    },
    {
      id: 'modify', text: '修改',color: 'yellow', img:'fa fa-edit', type: 'button',
      "events":{
        "eventType":"dialog",
        "execution":{
          "api":"AppProject",
          "method":"get",
          "keyID":"Id",
          "callback":""
        }
      }
    },
    {
      id: 'search', text: '查询',color: 'blue', img:'fa fa-search', type: 'button',
      "events":{
        "eventType":"dialog",
        "execution":{
          "api":"AppProject",
          "method":"get",
          "keyID":"",
          "callback":""
        }
      }
    }
  ];
  slaverButtons:any[] = [
    {
      id: 'new', text: '新建', color: 'green-jungle', img:'fa fa-plus', type: 'button',
      "events":{
        "eventType":"dialog",
        "execution":{
          "api":"AppProject",
          "method":"get",
          "keyID":"",
          "callback":""
        }
      }
    },
    {
      id: 'del', text: '删除', color: 'red', img:'fa fa-remove', type: 'button',
      "events":{
        "title":"确认提示",
        "text":"确定要删除选中的记录吗?",
        "eventType":"confirm",
        "execution":{
          "api":"AppProject",
          "method":"delete",
          "keyId":"Id"
        }
      }
    },
    {
      id: 'sub', text: '提交', color: 'green', img:'fa fa-save', type: 'button',
      "events":{
        "title":"确认提示",
        "text":"是否提交当前数据?",
        "eventType":"confirm",
        "execution":{
          "api":"AppProject",
          "method":"proc",
          //"keyId":"Id"
        }
      }
    },
    {
      id: 'modify', text: '修改',color: 'yellow', img:'fa fa-edit', type: 'button',
      "events":{
        "eventType":"dialog",
        "execution":{
          "api":"AppProject",
          "method":"get",
          "keyID":"Id",
          "callback":""
        }
      }
    },
    {
      id: 'search', text: '查询',color: 'blue', img:'fa fa-search', type: 'button',
      "events":{
        "eventType":"dialog",
        "execution":{
          "api":"AppProject",
          "method":"get",
          "keyID":"",
          "callback":""
        }
      }
    }
  ];
  constructor(private router: ActivatedRoute,private http:HttpClient,private apiService:ApiService) {
    this._router = router;
    this.formConfig = [
      {
        type:'input',
        inputType:'text',
        name:'code',
        label:'编码：',
        helpText:'系统自动生成编码',
        inputClass:'input-inline input-medium',
        placeholder:'Code:NB-001',
        helpClass:'help-inline',
        validation:[Validators.required,Validators.minLength(6)]
      },
      {
        type:'input',
        inputType:'text',
        name:'text',
        label:'名称：',
        icon:'fa fa-book',
        iconPstn:'left',
        inputClass:'input-group',
        validation:[Validators.required]
      },
      {
        type:'input',
        inputType:'text',
        name:'shortName',
        label:'简化名称：',
        inputClass:'input-medium input-group',
        icon:'fa fa-bookmark-o',
        iconPstn:'right',
        helpText:'简化名称建议不超过20个字符',
        helpClass:'help-inline',
        validation:[Validators.maxLength(20)]
      },
      {
        type:'select',
        placeholder:'--请选择--',
        options:[
          {text:'计划',value:'计划'},
          {text:'开始',value:'开始'}
        ],
        name:'status',
        label:'状态：',
        value:'',
        inputClass:'input-medium'
      },
      {
        type:'checkbox',
        options:[
          {checked:'',disabled:false,value:'1',label:'特性1'},
          {checked:'',disabled:false,value:'2',label:'特性2'},
          {checked:'',disabled:false,value:'3',label:'特性3'}
        ],
        name:'feature',
        label:'特性：',
        inputClass:'mt-checkbox-list' // mt-checkbox-inline
      },
      {
        type:'radio',
        options:[
          {checked:'',disabled:false,value:'1',label:'独立'},
          {checked:'',disabled:false,value:'2',label:'共享'},
          {checked:'',disabled:false,value:'3',label:'指定区域'}
        ],
        name:'scope',
        label:'使用范围：',
        inputClass:'mt-radio-list' // mt-checkbox-list
      },
      {
        type:'textarea',
        name:'remark',
        label:'备注：'
      },
      {
        type:'button',
        name:'submit',
        disabled:true
      }
    ]
  }

  ngOnInit() {
    this.loadMasterData();
    this.loadSlaverData();
  }
  initButton(data): any[]{
    let btns = [];
    for(const d of data){
      let btn = {...d};
      if(d.img){
        btn.text =btn.text+" "+"<i class='"+d.img+"'></i>"
      }
      btn.className ="btn btn-outline "+d.color;
      btn.action = (e,dt,node,config) => {
        switch(btn.events.eventType){
          case EVENT_TYPE.common:
            break;
          case EVENT_TYPE.confirm:
            this.confirmMessage = btn.events.text;
            this.confirmTitle = btn.events.title;
            this.confirmEventSetting = btn.events.execution;
            $('#basic_dialog').modal('show');
            break;
          case EVENT_TYPE.dialog:
            $('#todo-task-modal').modal('show');
            break;
        }
      };
      btns.push(btn);
    }
    return btns;
  }
  ngAfterViewInit(){
    this.dtTrigger.next();
  }
  loadMasterData(){
    this.dtOption = this.apiService
      .doList('AppProject')
      .toPromise()
      .then(result => {
        const dt = {
          "language": {
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
          },
          ordering:true,
          paging:true,
          processing:true,
          //scrollX:true,
          searching:true,
          deferRender:true,
          //data:result,
          ajax:{
            url:Configuration.web_api + 'DynamicResModule',
            dataSrc:''
          },
          autoWidth:true,
          destroy:true,
          lengthMenu: [ 5, 10, 20, 30, 40, 50, 100 ],
          rowId:'Id',
          pagingType:'full_numbers',
          pageLength:5,
          orderMulti:true,
          select:true,
          responsive: true,
          columnDefs:[
            {
              targets:0,
              orderable:false
            }
          ],
          columns:[
            {
              title:'<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> ' +
              '<input type="checkbox" class="group-checkable" id="checkall" />' +
              ' <span></span> </label>',
              data:'Id',
              render:(data ,type ,row, meta) =>{
                return '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> ' +
                  '<input type="checkbox" class="group-checkable" name="checkchild" value="'+data+'" />' +
                  ' <span></span> </label>';
              },
              className: 'text-center'
            },
            {
              title:'共享范围', data:'ShareScope',
            },
            {
              title:'程序集名称', data:'AssemblyName',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'编译状态', data:'BuildState',
            },
            {
              title:'编译方式', data:'BuildMode',
            },
            /!*{
              title:'错误消息', data:'ErrorMessage',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },*!/
            {
              title:'编译消息', data:'BuildMessage',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'上下文名称', data:'ContextName',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'提供者', data:'ProviderName',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'默认命名空间', data:'DefaultNamespace',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'客户编号', data:'PlatCustomerId',
            },
            {
              title:'是否启用', data:'Enabled',
            },
            {
              title:'创建时间', data:'CreateTime',
            }
          ],
          rowCallback: (row:Node, data:any[] | Object ,index: number) => {
            $('td',row).unbind('click');
            $('td',row).bind('click',() => {
              this._selectedItem = data;
              this.reloadSlaveData(this._selectedItem['DrmId']);
            })
          },
          preDrawCallback:() => {
            this.checkAll();
          },
          "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable
          buttons:[]
        };
        dt.buttons = this.initButton(this.masterButtons);
        return dt;
      });
  }
  loadSlaverData(){
    this.dtSlaverOption = this.apiService
      .doList('AppProject')
      .toPromise()
      .then(result => {
        const dt = {
          "language": {
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
          },
          ordering:true,
          paging:true,
          processing:true,
          //scrollX:true,
          searching:true,
          deferRender:true,
          //data:result,
          ajax:{
            url:Configuration.web_api + 'ResourceType',
            dataSrc:''
          },
          autoWidth:true,
          destroy:true,
          lengthMenu: [ 5, 10, 20, 30, 40, 50, 100 ],
          rowId:'Id',
          pagingType:'full_numbers',
          pageLength:5,
          orderMulti:true,
          select:true,
          responsive: true,
          columnDefs:[
            {
              targets:0,
              orderable:false
            }
          ],
          columns:[
            {
              title:'<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> ' +
              '<input type="checkbox" class="group-checkable" id="checkall" />' +
              ' <span></span> </label>',
              data:'Id',
              render:(data ,type ,row, meta) =>{
                return '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> ' +
                  '<input type="checkbox" class="group-checkable" name="checkchild" value="'+data+'" />' +
                  ' <span></span> </label>';
              },
              className: 'text-center'
            },
            {
              title:'资源名称', data:'Name',
            },
            {
              title:'编译状态', data:'OwnerNameSpace',
            },
            {
              title:'编译方式', data:'OwnerAssembly',
            },
            {
              title:'编译消息', data:'ShareScope',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'上下文名称', data:'BuildMode',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'提供者', data:'BuildState',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'默认命名空间', data:'TableType',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'备注', data:'Note',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'客户编号', data:'PlatCustomerId',
            },
            {
              title:'是否启用', data:'Enabled',
            },
            {
              title:'创建时间', data:'CreateTime',
            }
          ],
          rowCallback: (row:Node, data:any[] | Object ,index: number) => {
            $('td',row).unbind('click');
            $('td',row).bind('click',() => {
              this._selectedItem = data;
            })
          },
          preDrawCallback:() => {
            this.checkAll();
          },
          "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable
          buttons:[]
        };
        dt.buttons = this.initButton(this.masterButtons);
        return dt;
      });
  }
  reloadSlaveData(masterId){
    this.dtElement.dtInstance.then((dtInstance:DataTables.Api) =>{
      //dtInstance.destroy();
      dtInstance.ajax.url(Configuration.web_api + 'DynamicResModule/'+masterId+'/'+'ResourceType',).load();
      //this.dtTrigger.next();

    })
  }
  checkAll() {
    $("#checkall").click(function () {
      var check = $(this).prop("checked");
      $("input[name='checkchild']").prop("checked", check);
    });
  }

  rerender():void {
    this.dtElement.dtInstance.then((dtInstance:DataTables.Api) =>{
      //dtInstance.destroy();
      dtInstance.ajax.reload();
      //this.dtTrigger.next();

    })
  }*/
}
