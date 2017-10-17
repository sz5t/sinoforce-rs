import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
