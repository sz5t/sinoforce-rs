import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
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
    debugger;
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

  doPost2(url, data?) {
    const post = this.httpClient.request<any>(
      'POST',
      Configuration.web_api + url,
      {
        body: data
      }
    );
    return post;
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

  doGetWithProgress(url, params?) {
    const req = new HttpRequest(
      'GET',
      Configuration.web_api + url,
      {headers: this.setHeaders(), params: this.buildParameters(params)},
      {reportProgress: true}
    );
    return this.httpClient.request(req);
  }

  doPostWithProgress<T>(url, data) {
    const req = new HttpRequest(
      'POST',
      Configuration.web_api + url,
      {body: data},
      {reportProgress: true}
    );
    return this.httpClient.request<T>(req);
  }

  private buildParameters(params): HttpParams {
    let str = '';
    if (params) {
      for (const p in params) {
        if (params.hasOwnProperty(p)) {
          const s = [];
          s[0] = p;
          s[1] = '=';
          s[2] = params[p];
          s[3] = '&';
          str += s.join('');
        }
      }
    }
    return new HttpParams({fromString: str.substring(0, str.length - 1)});
  }
}
