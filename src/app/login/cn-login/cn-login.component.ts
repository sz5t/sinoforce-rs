import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Configuration} from '../../framework/configuration';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OnlineUser} from './online-user.model';
import {ClientStorageService} from '../../services/client-storage.service';
import {Router} from '@angular/router';
import {Broadcaster} from '../../broadcast/broadcaster';
declare let $: any;
declare let MD5: any;
@Component({
  selector: 'cn-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cn-login.component.html',
  styleUrls: ['./cn-login.component.css']
})

export class CnLoginComponent implements OnInit {
  validCode;
  verfyCode;
  verfyLength;
  validCodeId;
  orgList: any[] = [{name: '--独立用户--', value: []}];
  user: FormGroup;
  entryForm: FormGroup;
  onlineUser: OnlineUser;
  errorMessage;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private clientStorage: ClientStorageService,
              private router: Router,
              private broadcast: Broadcaster) {
  }

  ngOnInit() {
    this.getValidCode();
    this.user = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required]],
      validCode: ['', [Validators.required]]
    });
    this.entryForm = this.formBuilder.group(
      {
        projectName: ['', [Validators.required]]
      }
    );
  }

  getValidCode() {
    this.apiService.doPost2(Configuration.validCode_resource, {})
      .subscribe(
        response => {
          this.validCode = 'data:image/gif;base64,' + response.Data;
          this.verfyCode = response.VerfyCode;
          this.validCodeId = response.Id;
          this.verfyLength = response.Length;
        }
      );
  }

  getOnlineUser() {
    this.onlineUser = new OnlineUser();
    // 1. does exist user with identity, validCode, validCodeId
    // 2. make online user with password
    // 3. get appUser and project list
    this.onlineUser.Identify = this.user.value.userName;
    this.onlineUser.Password = MD5(this.user.value.userPassword);
    if (this.verfyLength !== 0) {
      this.onlineUser.ValidCode = MD5(this.user.value.validCode.toLowerCase() + this.verfyCode);
      this.onlineUser.ValidCodeId = this.validCodeId;
    }
    const identityPromise = this.apiService.doPost2(Configuration.onlineUser_resource, this.onlineUser);
    identityPromise.toPromise()
      .then(response => {
        this.onlineUser = {...response};
        if (response.UserId && response.UserId.length > 0) {
          $('.login-form').hide();
          $('.register-form').show();
          if (this.onlineUser.OrgList && this.onlineUser.OrgList.length > 0) {
            this.onlineUser.OrgList.forEach(org => {
              const orgObj: { name: string, value: any[] } = {name: '', value: []};
              orgObj.name = org.value;
              this.onlineUser.ProjList.forEach(proj => {
                const keys = proj.Key.split('.');
                if (keys[0] === org.Key) {
                  orgObj.value.push({key: keys[1], value: proj.Value});
                }
              });
            });
          } else {
            this.onlineUser.ProjList.forEach(proj => {
              this.orgList[0].value.push({key: proj.Key.split('.')[1], value: proj.Value});
            });
          }
        } else {
          this.errorMessage = this.onlineUser.Message;
          console.log(this.errorMessage);
          // show this message
        }
      })
      .catch((error) => {
        this.onlineUser = null;
        console.log(error);
        this.getValidCode();
      });
  }

  backLogin() {
    this.getValidCode();
    this.user.reset();
    this.orgList = [{name: '--独立用户--', value: []}];
    $('.login-form').show();
    $('.register-form').hide();
  }

  entryProject() {
    this.onlineUser.ProjId = this.entryForm.controls['projectName'].value;
    const onlineUserRequest = this.apiService.doPost2(Configuration.onlineUser_resource, this.onlineUser);
    onlineUserRequest
      .toPromise()
      .then(onlineUser => {
        return this.apiService.doPost2(Configuration.onlineUser_resource, onlineUser)
          .toPromise();
      }).then(onlineUser => {
      // console.log('1', onlineUser);
      this.clientStorage.setCookies('onlineUser', onlineUser);
      return this.apiService.doGet(Configuration.appUser_resource
        + '/'
        + onlineUser['UserId'])
        .toPromise();
    }).then(appUser => {
      console.log('2', appUser);
      // this.clientStorage.setCookies('appUser', appUser);
      return this.apiService.doGet(Configuration.commonCode_resource
        + '?Name='
        + Configuration.commonCode_code
        + '&ApplyId=ApplyId')
        .toPromise();
    }).then(commonCode => {
      // console.log('3', commonCode);
      return this.apiService.doGet(Configuration.appModule_response
        + '?ProjId='
        + this.onlineUser['ProjId']
        + '&ParentId=In(\"\",null)'
        + '&ApplyId=' + commonCode[0]['Id'])
        .toPromise();
    }).then(parentAppModuleConfig => {
      // console.log('4', parentAppModuleConfig);
      return this.apiService.doGet(Configuration.appModule_response
        + '?ProjId='
        + this.onlineUser['ProjId']
        + '&ParentId='
        + parentAppModuleConfig[0]['Id'])
        .toPromise();
    }).then(appModuleConfig => {
      // console.log('5', appModuleConfig);
      // this.clientStorage.setSessionStorage('appModuleConfig', appModuleConfig);
      return this.apiService.doGetConfig(Configuration.config_resource).toPromise();
    }).then(localConfig => {
      this.router.navigate(['/app']).then(() => {
        this.clientStorage.setSessionStorage('appModuleConfig', localConfig);
        // console.log('6');
        this.broadcast.broadcast('loadConfig', 'start');
        this.broadcast.broadcast('loadConfig', 'processing');
        this.broadcast.broadcast('loadConfig', 'end');
      });
    });
    // onlineUser
    // appUser
    // commonCode
    // parent appModuleConfig
    // appModuleConfig
  }
}
