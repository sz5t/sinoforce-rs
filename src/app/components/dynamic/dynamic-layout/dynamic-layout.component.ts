import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cn-dynamic-layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-layout.component.html',
  styleUrls: ['./dynamic-layout.component.css']
})
export class CnDynamicLayoutComponent implements OnInit {
  @Input() config;

  constructor() {
  }

  ngOnInit() {
  }

}
