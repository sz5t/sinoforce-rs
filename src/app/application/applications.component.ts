import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Broadcaster} from '../broadcast/broadcaster';
import {Subscription} from 'rxjs/Subscription';
import {ClientStorageService} from '../services/client-storage.service';
declare let $: any;

@Component({
  selector: 'cn-applications',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit, OnDestroy {
  title = 'Sinoforce';
  name = 'sinoforce.com';
  site = 'http://www.sinoforce.com';
  copyright = 'sinoforce.com';
  menuDirect = 'pull-right';
  dropdownType: any = {
    notification: 'notification',
    inbox: 'inbox',
    tasks: 'tasks',
    user: 'user'
  };
  menu: any[];
  broadcastObj: Subscription;
  loadTimer = 0;
  loopTimer;

  constructor(private broadcast: Broadcaster,
              private clientStorage: ClientStorageService) {
    this.menu = this.clientStorage.getSessionStorage('appModuleConfig');
    this.broadcastObj = broadcast.on<string>('loadConfig').subscribe(
      (result) => {
        if (result === 'start') {
          $('#large').modal('show');
          this.setProgress(0.25, ['li_proc1'], 800);
        } else if (result === 'processing') {
          this.setProgress(0.75, ['li_proc1', 'li_proc2'], 2000);
        } else if (result === 'end') {
          this.menu = this.clientStorage.getSessionStorage('appModuleConfig');
          this.setProgress(1, ['li_proc1', 'li_proc2', 'li_proc3'], 2500);
        }
      }
    );
  }

  /*handleTitle(process, ids) {
   //const total = navigation.find('li').length;
   // set wizard title
   //$('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
   // set done steps
   this.setProgress(process, ids);
   }*/

  setProgress(number, ids, time) {
    this.loadTimer = this.loadTimer + 1;
    //const $percent = (this.loadTimer / 1) * 100;
    setTimeout(() => {
      $('#form_wizard_1').find('.progress-bar').css({
        width: number * 100 + '%'
      });
      jQuery('li', $('#form_wizard_1')).removeClass('done');
      // const li_list = navigation.find('li');
      for (let id of  ids) {
        jQuery('#' + id).addClass('done');
      }
      if (time === 2500) {
        $('#large').modal('hide');
      }
    }, time);
  }

  ngOnInit() {
    //Layout.init();
    this.formWizard();
  }

  formWizard() {
    $('#form_wizard_1').bootstrapWizard({
      'nextSelector': '.button-next',
      'previousSelector': '.button-previous',
      onTabClick: function (tab, navigation, index, clickedIndex) {
        //return false;
        //ApplicationsComponent.handleTitle(tab, navigation, clickedIndex);
      },
      onNext: function (tab, navigation, index) {
        //ApplicationsComponent.handleTitle(tab, navigation, index);
      },
      onPrevious: function (tab, navigation, index) {
        //ApplicationsComponent.handleTitle(tab, navigation, index);
      },
      onTabShow: function (tab, navigation, index) {
        const total = navigation.find('li').length;
      }
    });
  }

  ngOnDestroy() {
    this.broadcastObj.unsubscribe();
  }
}
