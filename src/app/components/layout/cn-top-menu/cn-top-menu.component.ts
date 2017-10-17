import {Component, OnInit, ViewEncapsulation, HostBinding, Input, ElementRef, Renderer2} from '@angular/core';
export type CnDirect = 'pull-right' | 'pull-left';

@Component({
  selector: 'cn-top-menu',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-top-menu.component.html',
  styleUrls: ['./cn-top-menu.component.css']
})
export class CnTopMenuComponent implements OnInit {
  @HostBinding('class.component') _component = true;
  @HostBinding('class.top-menu') hasTopMenu = true;
  _el: HTMLElement;
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = _elementRef.nativeElement;
  }
  ngOnInit() {

  }


}
