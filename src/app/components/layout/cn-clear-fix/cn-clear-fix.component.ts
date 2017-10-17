import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cn-clear-fix',
  template: `<div></div>`,
  styleUrls: ['./cn-clear-fix.component.css']
})
export class CnClearFixComponent {
  @HostBinding('class.clearfix') hasClearFix = true;
}
