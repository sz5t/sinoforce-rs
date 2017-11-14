import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cn-applications',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {
  title: string = 'Sinoforce';
  name: string = 'sinoforce.com';
  site: string = 'http://www.sinoforce.com';
  copyright: string = 'sinoforce.com';
  menuDirect: string = 'pull-right';
  dropdownType: any = {
    notification: 'notification',
    inbox: 'inbox',
    tasks: 'tasks',
    user: 'user'
  };
}
