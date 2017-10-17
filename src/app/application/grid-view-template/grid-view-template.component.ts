import {Component, OnInit, ViewEncapsulation, HostListener, AfterViewInit, ViewChild, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {DataTableDirective} from 'angular-datatables';
import { HttpEventType, HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {ButtonEvent, EVENT_TYPE} from '../../framework/event/button-event';
import {ApiService} from "../../services/api.service";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/toPromise';
import {IFieldConfig} from "../../components/form/form-models/IFieldConfig";
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
  @Input() formConfig:IFieldConfig[];
  @Input() gridConfig;
  @Input() buttonsConfig:any[];

  dtOption: DataTables.Settings = {};
  dtTrigger:Subject<Object> = new Subject();
  _router: ActivatedRoute;
  _selectedItem = {};
  confirmTitle:string;
  confirmMessage:string;
  confirmEventSetting;
  formDialogTitle:string='表单';
  constructor(private router: ActivatedRoute,private http:HttpClient,private apiService:ApiService) {
    this._router = router;
  }

  ngOnInit() {
    this.loadData();
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

  loadData(){
    this.dtOption = this.apiService
      .doList('AppProject')
      .toPromise()
      .then(result => {
         const dt = this.gridConfig;
         dt.buttons = this.initButton(this.buttonsConfig);
         dt.proDrawCallback = () =>{
           this.checkAll();
         };
        return dt;
      });
  }

  checkAll() {
    $("#checkall").click(function () {
      var check = $(this).prop("checked");
      $("input[name='checkchild']").prop("checked", check);
    });
  }

  render():void {
    this.dtElement.dtInstance.then((dtInstance:DataTables.Api) =>{
      dtInstance.ajax.reload();
    })
  }
}
