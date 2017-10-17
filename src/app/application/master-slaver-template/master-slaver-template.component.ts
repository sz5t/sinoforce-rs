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
export class MasterSlaverTemplateComponent implements OnInit,AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement:DataTableDirective;
  @Input() formConfig:IFieldConfig[];
  dtTrigger:Subject<Object> = new Subject();
  _router: ActivatedRoute;
  _selectedItem = {};
  dtOption: DataTables.Settings = {};
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
    this.loadData();
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
  loadData(){
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
          pageLength:10,
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
              title:'Code', data:'Code',
            },
            {
              title:'名称', data:'Name',
              render:function(data, type, row, meta){
                return data==null?'':data;
              }
            },
            {
              title:'简明', data:'ShortName',
            },
            {
              title:'状态', data:'State',
            },
            {
              title:'备注', data:'Remark',
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
  }
}
