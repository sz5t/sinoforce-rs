import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {ClientStorageService} from '../../../services/client-storage.service';
import {Router} from '@angular/router';
declare let $: any;
@Component({
  selector: 'cn-page',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-page.component.html',
  styleUrls: ['./cn-page.component.css']
})
export class CnPageComponent implements OnInit {
  //@HostBinding('class.page-content') hasPageContent = true;
  @HostBinding('class.component') _component = true;

  constructor(private clientStorage: ClientStorageService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    $('#dialog_logout').modal('hide');
    this.router.navigate(['/login']).then(() => {
      this.clientStorage.clearCookies();
      this.clientStorage.clearSessionStorage();
    });
  }
}
