import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Configuration} from '../framework/configuration';
import {Observable} from 'rxjs/Observable';
import {ClientStorageService} from './client-storage.service';
@Injectable()
export class ApiService {
  headers = new HttpHeaders();
  array$: Observable<any[]>;
  object$: Observable<any>;
  constructor(private httpClient: HttpClient, private clientStorage: ClientStorageService) {
  }

  setHeaders() {
    const userToken = this.clientStorage.getCookies('onlineUser');
    return new HttpHeaders()
      .set('Credential', userToken['Token'] ? userToken['Token'] : '')
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('Cache-Control', 'no-cache');
  }

  doGetConfig(configUrl) {
    this.array$ =  this.httpClient.request(
      'GET',
      configUrl,
      {
        responseType: 'json',
        headers: this.setHeaders()
      }
    );
    return this.array$;
  }

  doList(url, params?, data?) {
    return this.httpClient.request<any[]>(
      'GET',
      Configuration.web_api + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.setHeaders()
      }
    );
  }

  doQuery(url, params?, data?) {
    return this.httpClient.request(
      'GET',
      Configuration.web_api + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.setHeaders()
      }
    );
  }

  doGet(url, params?, data?) {
    return this.httpClient.request(
      'GET',
      Configuration.web_api + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.setHeaders()
      }
    );
  }

  doGet2<T>(url, params?, data?) {
    return this.httpClient.request<T>(
      'GET',
      Configuration.web_api + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.setHeaders()
      }
    );
  }

  doPut(url, params?, data?) {
    return this.httpClient.request(
      'PUT',
      Configuration.web_api + url,
      {
        body: data,
        headers: this.setHeaders(),
        params: this.buildParameters(params)
      }
    );
  }

  doDelete(url, params?, data?) {
    return this.httpClient.request(
      'DELETE',
      Configuration.web_api + url,
      {
        headers: this.setHeaders(),
        params: this.buildParameters(params)
      }
    );
  }

  doPost(url, data) {
    return this.httpClient.request<any>(
      'POST',
      Configuration.web_api + url,
      {
        body: data,
        headers: this.setHeaders()
      }
    );
  }

  doPost2<T>(url, data) {
    return this.httpClient.request<T>(
      'POST',
      Configuration.web_api + url,
      {
        body: data
      }
    );
  }

  doProc(url, params?, data?) {
    return this.httpClient.request(
      'GET',
      Configuration.web_api + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.setHeaders()
      }
    );
  }

  private buildParameters(params): HttpParams {
    let str = '';
    if (params) {
      for (const p of params) {
        str += p + '=' + params[p] + '&';
      }
    }
    return new HttpParams({fromString: str});
  }
}
