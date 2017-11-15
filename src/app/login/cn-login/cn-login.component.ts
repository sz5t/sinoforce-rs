import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Configuration} from '../../framework/configuration';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OnlineUser} from './online-user.model';
import {ClientStorageService} from '../../services/client-storage.service';
import {Router} from '@angular/router';
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
              private router: Router) {
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
    this.apiService.doPost2<any>(Configuration.validCode_resource, {})
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
    const identityPromise = this.apiService.doPost2<OnlineUser>(Configuration.onlineUser_resource, this.onlineUser);
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
          throw new Error('error');
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
    $('.login-form').show();
    $('.register-form').hide();
  }

  entryProject() {
    this.onlineUser.ProjId = this.entryForm.controls['projectName'].value;
    this.apiService.doPost2<OnlineUser>(Configuration.onlineUser_resource, this.onlineUser)
      .subscribe(
        response => {
          this.clientStorage.setCookies('onlineUser', response);
          this.apiService.setHeaders(response['Token']);
          this.apiService.doGet(Configuration.appUser_resource + '/' + this.onlineUser['UserId'])
            .toPromise()
            .then(appUser => {
              this.clientStorage.setCookies('appUser', appUser);
            });
          this.router.navigate(['/app']);
        },
        error2 => {
          console.log(error2);
        },
        () => {
        }
      );
  }
}
