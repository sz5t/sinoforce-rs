import {Component, Input, OnInit} from '@angular/core';
import {IFieldConfig} from "../../components/form/form-models/IFieldConfig";
import {Validators} from "@angular/forms";
import {Broadcaster} from "../../broadcast/broadcaster";

@Component({
  selector: 'cn-slaver-grid-template',
  templateUrl: './slaver-grid-template.component.html',
  styleUrls: ['./slaver-grid-template.component.css']
})
export class SlaverGridTemplateComponent implements OnInit {
  @Input() slaverFormConfig:IFieldConfig[];
  @Input() slaverButtonsConfig;
  @Input() slaverGridConfig;
  constructor(private broadcast:Broadcaster) {

  }
  ngOnInit() {
    this.registBroadcast();
  }
  registBroadcast(){
    this.broadcast.on('master').subscribe(data => {
      console.log('slaver',data);
    })
  }
}
