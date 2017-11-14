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
    const userToken = this.clientStorage.getCookies('onlineUser');
    if(userToken){
      this.setHeaders(userToken['Token']);
    }
  }
  setHeaders(token){
    this.headers = new HttpHeaders()
    .set('Credential', token)
    //.set('X-Requested-With', 'XMLHttpRequest')
    .set('Cache-Control', 'no-cache');
  }
  doGetConfig(configUrl){
    this.array$ =  this.httpClient.request(
      'GET',
      configUrl,
      {
        responseType: 'json',
        headers: this.headers
      }
    );
    return this.array$;
  }
  doList(url, params?, data?){
    return this.httpClient.request<any[]>(
      'GET',
      Configuration.web_api + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.headers
      }
    );
  }
  doQuery(url, params?, data?){
    return this.httpClient.request(
      'GET',
      Configuration.web_api + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.headers
      }
    );
  }
  doGet(url, params?, data?){
    return this.httpClient.request(
      'GET',
      Configuration.web_api_2 + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.headers
      }
    );
  }
  doGet2<T>(url, params?, data?){
    return this.httpClient.request<T>(
      'GET',
      Configuration.web_api + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.headers
      }
    );
  }
  doPut(url, params?, data?){
    return this.httpClient.request(
      'PUT',
      Configuration.web_api + url,
      {
        body: data,
        headers: this.headers,
        params: this.buildParameters(params)
      }
    );
  }
  doDelete(url, params?, data?){
    return this.httpClient.request(
      'DELETE',
      Configuration.web_api + url,
      {
        headers: this.headers,
        params: this.buildParameters(params)
      }
    );
  }
  doPost(url, data){
    return this.httpClient.request<any>(
      'POST',
      Configuration.web_api + url,
      {
        body: data,
        headers: this.headers
      }
    );
  }
  doPost2<T>(url, data){
    return this.httpClient.request<T>(
      'POST',
      Configuration.web_api_2 + url,
      {
        body: data
      }
    );
  }
  doProc(url, params?, data?){
    return this.httpClient.request(
      'GET',
      Configuration.web_api + url,
      {
        responseType: 'json',
        params: this.buildParameters(params),
        headers: this.headers
      }
    );
  }
  private buildParameters(params): HttpParams{
    let str = '';
    if (params) {
      for (const p in params){
        str += p + '=' + params[p] + '&';
      }
    }
    return new HttpParams({fromString: str});
  }
}
