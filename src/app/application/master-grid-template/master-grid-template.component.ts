import {Component, Input, OnInit} from '@angular/core';
import {IFieldConfig} from "../../components/form/form-models/IFieldConfig";
import {Broadcaster} from "../../broadcast/broadcaster";

@Component({
  selector: 'cn-master-grid-template',
  templateUrl: './master-grid-template.component.html',
  styleUrls: ['./master-grid-template.component.css']
})
export class MasterGridTemplateComponent implements OnInit {
  @Input() masterFormConfig:IFieldConfig[];
  @Input() masterButtonsConfig;
  @Input() masterGridConfig;

  _selectedItem;
  constructor(private broadcast:Broadcaster) {

  }
  ngOnInit() {
    this.masterGridConfig
      .rowCallback = (row:Node, data:any[] | Object ,index: number) => {
      $('td',row).unbind('click');
      $('td',row).bind('click',() => {
        this._selectedItem = data;
        this.broadcast.broadcast('master', data);
      });
    };
  }
}
