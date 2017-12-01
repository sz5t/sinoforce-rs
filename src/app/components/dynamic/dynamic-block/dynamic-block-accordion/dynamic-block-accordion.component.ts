import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IDynamicBlock, IDynamicBlockModel} from '../dynamic-block.model';

@Component({
  selector: 'cn-dynamic-block-accordion',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-block-accordion.component.html',
  styleUrls: ['./dynamic-block-accordion.component.css']
})
export class CnDynamicBlockAccordionComponent implements OnInit, IDynamicBlock {
  dynamicBlockField: IDynamicBlockModel;
  templateConfig: any;

  constructor() {
  }

  ngOnInit() {
  }

}
