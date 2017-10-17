import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cn-page',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-page.component.html',
  styleUrls: ['./cn-page.component.css']
})
export class CnPageComponent implements OnInit {
  @HostBinding('class.page-content') hasPageContent = true;
  @HostBinding('class.component') _component = true;
  constructor() { }

  ngOnInit() {
  }

}
