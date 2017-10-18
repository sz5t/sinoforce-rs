import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IFieldConfig} from "../../components/form/form-models/IFieldConfig";
import {Broadcaster} from "../../broadcast/broadcaster";
import {Subscription} from "rxjs/Subscription";
import {GridViewTemplateComponent} from "../grid-view-template/grid-view-template.component";
import {Configuration} from "../../framework/configuration";

@Component({
  selector: 'cn-slaver-grid-template',
  templateUrl: './slaver-grid-template.component.html',
  styleUrls: ['./slaver-grid-template.component.css']
})
export class SlaverGridTemplateComponent implements OnInit,OnDestroy {
  @ViewChild(GridViewTemplateComponent)
  gridViewTemplateComponent:GridViewTemplateComponent;

  @Input()
  slaverFormConfig:IFieldConfig[];

  @Input()
  slaverButtonsConfig;

  @Input()
  slaverGridConfig;

  @Input()
  filterConfig;

  _broadcastObj:Subscription;
  _selectedItem:any;

  constructor(private broadcast:Broadcaster) {

  }
  ngOnInit() {
    this.registBroadcast();
    this.slaverGridConfig
      .rowCallback = (row:Node, data:any[] | Object ,index: number) => {
      $('td',row).unbind('click');
      $('td',row).bind('click',() => {
        this._selectedItem = data;
      });
    };
  }
  registBroadcast(){
    this._broadcastObj = this.broadcast.on<string>('master').subscribe(data => {
      if(this.filterConfig){
        const filter = this.filterConfig[0];
        let condition = '' ;

        for(let propLink of filter.PropLinks){
          if(data){
            condition += propLink["SlaveProp"] +'='+ data[propLink.MasterProp]+'&';
          }
        }
        const url = Configuration.web_api + filter.SlaveClass + '?' + condition.substring(0,condition.length-1);
        this.gridViewTemplateComponent.reload(url)
      }
    })
  }
  ngOnDestroy(){
    this._broadcastObj.unsubscribe();
  }
}
